<template>
  <div class="ToDoList">
    <h1 v-html="title"></h1>
    <div>
      <input type="text" v-model="newItem" />
      <button @click="addNewItem">添加</button>
    </div>
    <ul>
      <li v-for="item in items" :key="item.id">
        <!-- 待办事项 -->
        <span v-text="item.title"></span>
        <!-- 完成按钮 -->
        <button @click="toggleFinish(recycleItem)">完成</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ToDoList",
  data() {
    return {
      title: "ToDoList",
      items: [
        {
          id: 1,
          title: "吃喝",
        },
        {
          id: 2,
          title: "时间",
        },
        {
          id: 3,
          title: "送审",
        },
      ],
    };
  },
  methods: {
    toggleFinish(recycleItem) {
      this.items.map((index, item) => {
        if (item.id === recycleItem.id) {
          this.items.splice(index, 1);
        }
      });
    },
    // 点击添加按钮，添加新的待办事项
    addNewItem() {
      // 使用push为数组添加新元素
      this.items.push({
        id: this.id, // id 唯一且自增
        title: this.newItem, // todo 标题
      });
      // id 自增
      this.id++;
      // 清空输入框
      this.newItem = "";
    },
  },
};
</script>

<style>
</style>