<template>
  <div class="site_nav">
    <div class="container nav">
      <p class="text_nav">{{breadcrumbs[breadcrumbs.length - 1]?.name}}</p>
      <ol class="breadcrumb_list">
        <li class="breadcrumb_item" v-for="crumb in breadcrumbs" :key="crumb">
          <router-link :to="crumb.path" v-if="crumb.path" class="main_nav">{{crumb.name}}</router-link>
          <span v-if="crumb.path">/</span>
          <span v-else class="main_nav last_nav">{{crumb.name}}</span>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import crumbs  from "@/breadcrumbs";
export default {
  name : "breadCrumbs",
  props: ['name'],
  data: () => {
    return {
      breadcrumbs: [],
      lastItem: ''
    }
  },
  methods: {
    getRoute() {
      const routes = this.$router.options.routes
      console.log (routes)
      let breadcrumbs = []
      breadcrumbs.push(routes[0])
      const myData = routes.filter((page) => {
        return page.name === "productName"
      })
      let pathList = myData[0].path.split('/')
      pathList.shift()
      pathList.pop()
      console.log (pathList)
      let parentPath = '/'


      for (let path of pathList) {

        parentPath += path

        const parent = routes.filter((page) => {
          return page.path === parentPath
        })
        console.log (parent)

        breadcrumbs.push({name: parent[0].name, path: parent[0].path})

        parentPath += '/'
      }

      // 最後に自身を path 無しで追加
      breadcrumbs.push({name: 'productName'})
      this.breadcrumbs = breadcrumbs
      console.log (this.breadcrumbs)


    }
  },
  mounted() {
    //this.getRoute()
    this.breadcrumbs = crumbs(this.name, this.$router.options.routes)
    this.lastItem = this.breadcrumbs[this.breadcrumbs.length - 1].name
  }
}
</script>

<style scoped>
.nav {
  margin-bottom: 90px;
}
.site_nav {
  background-color: #f8f3f4;
}
.site_nav .nav {
  height: 148px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 300;
  text-transform: uppercase;
  color: #636363;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.site_nav .text_nav {
  font-size: 24px;
  line-height: 20px;
  font-weight: 900;
  text-transform: uppercase;
  color: #f16d7f;
}
.site_nav .breadcrumb_list {
  display: flex;
  list-style-type: none;
}
.site_nav .breadcrumb_list .main_nav {
  font-size: 14px;
  line-height: 20px;
  font-weight: 300;
  text-transform: uppercase;
  color: #636363;
  text-decoration: none;
  transition: color 0.2s;
}
.site_nav .breadcrumb_list .main_nav:hover {
  color: #f16d7f;
}
.site_nav .breadcrumb_list .last_nav {
  font-weight: 700;
  color: #f16d7f;
}
</style>