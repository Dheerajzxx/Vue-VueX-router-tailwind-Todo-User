<template>
  <div>
    <div class="add">
      <form @submit="OnSubmit">
        <input type="text" v-model="title" placeholder="Add Todo..." />
        <input type="submit" value="Add" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    OnSubmit(e) {
      e.preventDefault();
      this.addTodo(this.title);
      // this.title = "";
    },
  },
};
</script>

<style scoped>
.add {
  width: 100%;
}
form {
  display: grid;
  grid-template-columns: 69.5% 29.5%;
  grid-gap: 1%;
}
.add input[type="text"] {
  padding: 10px;
  border-radius: 6px;
  outline: none;
  border: none;
  /* margin-right: 20px; */
}
.add input[type="submit"] {
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
</style>
