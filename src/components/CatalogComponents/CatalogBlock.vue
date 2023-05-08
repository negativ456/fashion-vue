<template>
  <section>
    <div class="container catalog_items">
      <div class="left_nav">
        <CategoryFilter v-for="n of 3" :key="n"></CategoryFilter>
      </div>
      <div class="right_nav">
        <div class="select_nav">
          <div class="trending">
            <h3 class="sort_header">Trending now</h3>
            <div class="trending_content">
              <div class="up_line">
                <div class="trending_item">Bohemian</div>
                <span class="divider">|</span>
                <div class="trending_item">Floral</div>
                <span class="divider">|</span>
                <div class="trending_item">Lace</div>
              </div>
              <div class="down_line">
                <div class="trending_item">Floral</div>
                <span class="divider">|</span>
                <div class="trending_item">Lace</div>
                <span class="divider">|</span>
                <div class="trending_item">Bohemian</div>
              </div>
            </div>
          </div>
          <div class="size">
            <h3 class="sort_header">Size</h3>
            <div class="size_content">
              <div class="flex" v-for="item of availableSizes" :key="item">
                <label class="input_block">
                  <input type="checkbox" name="register" class="real-checkbox-btn" :value="item" v-model="chosenSize" @change="filterItems">
                  <span class="custom-checkbox-btn"></span>
                  <span class="size_item">{{item}}</span>
                </label>
              </div>
            </div>
          </div>
          <div class="price">
            <h3 class="sort_header">Price</h3>
            <div class="range_slider">
              <div class="slider-track" :style="fillColor"></div>
              <input type="range" min="0" max="300" step="1" v-model.number="minPrice" @input="slideOne" @change="filterItems">
              <input type="range" min="0" max="300" step="1" v-model.number="maxPrice" @input="slideTwo" @change="filterItems">
            </div>
            <div class="range_price_container">
              <div class="range_price"><span>$</span>{{minPrice}}</div>
              <div class="range_price"><span>$</span>{{maxPrice}}</div>
            </div>
          </div>
        </div>
        <div class="sort_nav">
          <SortComponent :title="'Sort By'" :array="filters" :name="'sort'" @selected="selectFilter" :first="true"></SortComponent>
          <SortComponent :title="'Show'" :array="showTabs" :name="'show'" @selected="select"></SortComponent>
        </div>
        <div class="goods_gal">
            <Item v-for="item of filteredItems" :key="item._id" :item="item"></Item>
        </div>
        <div class="page_selector">
          <div class="page">
            <span class="fa-solid_link" @click="prevPage">
              <i class="fa-solid fa-angle-left"></i>
            </span>
            <span
                v-for="page in totalPages"
                :class="{'active-page': page === this.selectedPage}"
                :key="page"
                class="page_item"
                @click="selectPage(page)">{{page}}
            </span>
            <span class="fa-solid_link" @click="nextPage">
              <i class="fa-solid fa-angle-right"></i>
            </span>
          </div>
          <a href="#" class="view">View All</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Item from "@/components/HomeComponents/Item";
import CategoryFilter from "@/components/CatalogComponents/CategoryFilter";
import SortComponent from "@/components/CatalogComponents/SortComponent";
import {mapActions , mapGetters} from 'vuex';

export default {
  name : "CatalogBlock",
  data: () => {
    return {
      minPrice: 0,
      maxPrice: 300,
      minGap: 0,
      threshold: 300,
      selectedPage: 1,
      showTabs: ['5', '9', '10', '11', '12'],
      filters: ['Name', 'Price ↑', 'Price ↓'],
      sortedProducts: [],
      chosenSize: [],
      availableSizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'],
      selectedFilters: {
        sort: "Name",
        show: '5'
      }
    }
  },
  components: {
    Item, CategoryFilter, SortComponent
  },
  methods: {
    ...mapActions(['getProducts']),
    filterItems() {
      this.sortedProducts = [...this.catalogProducts];
      this.sortedProducts = this.sortedProducts.filter(item => item.price >= this.minPrice && item.price <= this.maxPrice);

      switch (this.selectedFilters.sort) {
        case "Name":
          this.sortedProducts.sort((prev, next) => {
            if (prev.name > next.name) return 1;
            if (prev.name < next.name) return -1;
            return 0;
          });
          break;
        case "Price ↑":
          this.sortedProducts.sort((prev, next) => {
            if (prev.price > next.price) return 1;
            if (prev.price < next.price) return -1;
            return 0;
          });
          break;
        case "Price ↓":
          this.sortedProducts.sort((prev, next) => {
            if (next.price > prev.price) return 1;
            if (next.price < prev.price) return -1;
            return 0;
          });
          break;

      }
      if (this.chosenSize.length) {
        this.sortedProducts = this.sortedProducts.filter(el => this.chosenSize.includes(el.size));
      }
    },
    slideOne() {
      if (this.maxPrice - this.minPrice <= this.minGap) {
        this.minPrice = this.maxPrice - this.minGap
      }
    },
    slideTwo() {
      if (this.maxPrice - this.minPrice <= this.minGap) {
        this.maxPrice = this.minPrice + this.minGap
      }
    },
    async select(data) {
      this.selectedFilters[Object.keys(data)[0]] = data[Object.keys(data)[0]];
      await this.getProducts({
        limit: +this.selectedFilters.show,
        page: this.selectedPage
      });
      this.sortedProducts = []
      this.filterItems();
    },
    selectFilter(data) {
      this.selectedFilters[Object.keys(data)[0]] = data[Object.keys(data)[0]];
      this.filterItems();
    },
    async selectPage(page) {
      this.selectedPage = page;
      await this.getProducts({
        limit: +this.selectedFilters.show,
        page: this.selectedPage
      })
      this.sortedProducts = [];
      this.filterItems();
    },
    async nextPage() {
      if (this.selectedPage < this.totalPages) {
        this.selectedPage += 1;
        await this.getProducts({
          limit: +this.selectedFilters.show,
          page: this.selectedPage
        })
        this.sortedProducts = [];
        this.filterItems();
      }

    },
    async prevPage() {
      if (this.selectedPage > 1) {
        this.selectedPage -= 1;
        await this.getProducts({
          limit: +this.selectedFilters.show,
          page: this.selectedPage
        })
        this.sortedProducts = [];
        this.filterItems();
      }
    }


  },
  computed: {
    ...mapGetters(['catalogProducts', 'totalProducts']),
    filteredItems: function () {
      if (this.sortedProducts.length || this.chosenSize.length) {
        return this.sortedProducts;
      } else {
        return this.catalogProducts;
      }
    },
    fillColor: function () {
      let percent1 = (this.minPrice / this.threshold) * 100;
      let percent2 = (this.maxPrice / this.threshold) * 100;
      return {
        background: `linear-gradient(to right, #f0f0f0 ${percent1}% , #f16d7f ${percent1}% , #f16d7f ${percent2}%, #f0f0f0 ${percent2}%)`
      }
    },
    totalPages: function () {
      return Math.ceil(this.totalProducts / +this.selectedFilters.show)
    }

  },
  mounted() {
    this.getProducts({limit: +this.selectedFilters.show});
  }

}
</script>

<style scoped>

.fa-solid_link {
  cursor: pointer;
}
.divider {
  margin-left: 7px;
  margin-right: 7px;
  color: #dfdfdf;
}
.flex {
  display: flex;
}

.range_price_container {
  display: flex;
  justify-content: space-between;
}
.range_price {
  font-size: 14px;
  line-height: 26px;
  font-weight: 400;
  color: #6f6e6e;
}
.range_slider {
  position: relative;
  width: 262px;
  margin-bottom: 35px;

}
input[type="range"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  outline: none;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  background-color: transparent;
  pointer-events: none;
}
.slider-track {
  width: 100%;
  height: 6px;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  border-radius: 3px;
}
input[type="range"]::-webkit-slider-runnable-track {
  -webkit-appearance: none;
  height: 3px;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 14px;
  width: 14px;
  background-color: #f16d7f;
  cursor: pointer;
  margin-top: -6px;
  pointer-events: auto;
  border-radius: 50%;
}

input[type="range"]:active::-webkit-slider-thumb {
  background-color: #ffffff;
  border: 3px solid #f16d7f;
}

.input_block {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  user-select: none;
  cursor: pointer;
}
.catalog_items {
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
}
.custom-checkbox-btn {
  position: relative;
  display: inline-block;
  width: 13px;
  height: 13px;
  background-color: #ffffff;
  border: 1px solid #ebebeb;
  vertical-align: text-top;
}

.custom-checkbox-btn::before {
  content: '';
  display: inline-block;
  width: 14px;
  height: 14px;
  position: absolute;
  left: 50%;
  top: 50%;
  background-color: #ebebeb;
  background-image: url("../../assets/images/icons8-done.svg");
  background-position: center center;
  background-repeat: no-repeat;
  transform: translate(-50%, -50%)  scale(0);
}

.real-checkbox-btn:checked + .custom-checkbox-btn::before {
  transform: translate(-50%, -50%) scale(1);
}
.real-checkbox-btn {
  width: 0;
  height: 0;
  position: absolute;
  opacity: 0;
  z-index: -1;
}


.size {
  width: 263px;
}

.size_content {
  font-size: 14px;
  line-height: 20px;
  text-transform: uppercase;
  color: #6f6e6e;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 65px);
}

.size_item {
  padding-left: 10px;
}

.right_nav {
  width: 846px;
}

.select_nav {
  display: flex;
  justify-content: space-between;
}

.sort_nav {
  width: 100%;
  height: 50px;
  background-color: #f3f3f3;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  padding-left: 10px;
}



.sort_header {
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  text-transform: uppercase;
  color: #6f6e6e;
  margin-bottom: 25px;
}

.trending_content {
  width: 176px;
  display: flex;
  flex-direction: column;

}
.trending_content .trending_item {
  font-size: 14px;
  line-height: 26px;
  font-weight: 400;
  color: #6f6e6e;
  display: inline-block;
  cursor: pointer;
}

.goods_gal {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.page_selector {
  display: flex;
  justify-content: space-between;
  margin-bottom: 110px;
}
.page_selector .fa-solid {
  color: #aaaaaa;
}
.page_selector .page {
  display: flex;
  align-items: center;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  padding: 15px;
}
.page_item {
  text-decoration: none;
  margin-right: 15px;
  font-size: 16px;
  font-weight: 700;
  color: #c4c4c4;
  cursor: pointer;
}
.active-page {
  color: #ef5b70;
}
.page_selector .page_item:nth-child(2) {
  margin-left: 15px;
}
.page_selector .page_item:hover {
  color: #ef5b70;
}
.page_selector .page .fa-solid:hover {
  color: #ef5b70;
}
.page_selector .view {
  text-decoration: none;
  padding: 15px 45px;
  border: 1px solid #ef5b70;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 700;
  color: #ef5b70;
}
</style>