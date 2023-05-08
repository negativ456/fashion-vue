<template>
  <form class="action_block">
    <div class="input_block_add">
      <label class="label">
            <span class="label_block">
                <span class="input_text right_text">First name</span>
            </span>
        <input type="text" class="input_data" v-model="email" required>
      </label>
    </div>
    <div class="input_block_add">
      <label class="label">
            <span class="label_block">
                <span class="input_text right_text">Last name</span>
            </span>
        <input type="text" class="input_data" v-model="email" required>
      </label>
    </div>
    <div class="input_block_add">
      <label class="label">
            <span class="label_block">
                <span class="input_text right_text">Date of birth</span>
            </span>
        <input type="text" class="input_data" v-model="email" required>
      </label>
    </div>
    <div class="input_block_add">
      <label class="label">
            <span class="label_block">
                <span class="input_text right_text">Phone number</span>
            </span>
        <input type="text" class="input_data" v-model="email" required>
      </label>
    </div>
    <div class="input_block_add">
      <label class="label">
            <span class="label_block">
                <span class="input_text right_text">Gender</span>
            </span>
        <input type="text" class="input_data" v-model="email" required>
      </label>
    </div>
    <div class="input_block_add">
      <label class="label">
            <span class="label_block">
                <span class="input_text right_text">City</span>
            </span>
        <input type="text" class="input_data" v-model="email" required>
      </label>
    </div>
    <button class="save_button" type="submit">Save changes</button>
  </form>
</template>

<script>
export default {
  name : "OpenProfile",
  data: () => {
    return {
      email: ''
    }
  },


}
</script>

<style scoped lang="scss">
.save_button {
  padding: 20px 0;
  background-color: #fff;
  border: 1px solid #f16d7f;
  color: #f16d7f;
  font-size: 16px;
  font-weight: 400;
  margin-top: 30px;
  transition: background-color .2s, color .2s;
}
.save_button:hover {
  background-color: #f16d7f;
  color: #fff;
}
.action_block {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
}
.label {
  display: flex;
  flex-direction: column;
}
.input_block_add {
  width: 220px;
  margin-bottom: 20px;
  .input_data {
    padding-left: 20px;
    height: 35px;
    background-color: #ffffff;
    border: 1px solid #eaeaea;
    transition: border-color .2s;
    border-radius: 5px;
  }
  .input_data:hover {
    border-color: #bbb;
  }
  .input_data:focus {
    border-color: #222222;
  }
  .label_block {
    font-size: 14px;
    color: #999;
    margin-bottom: 10px;
  }

}
</style>