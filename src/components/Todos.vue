<template>
  <Addtodo />
  <FilterTodos />
  
  <div>
    <h1 class="font-semibold text-lg underline">Todos</h1>
    <div class="todos">
      <div
        @dblclick="Ondbclick(todo)"
        v-for="todo in allTodos"
        :key="todo.id"
        :class="{ 'bg-blue-900 ': todo.completed }"
        class="bg-green-800 text-white rounded-md p-5 relative"
      >
        {{ todo.title }}
        <div class="text-red-600 absolute top-1 right-3" @click="removeTodo(todo.id)">
          <button class="">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Addtodo from "./AddTodo.vue";
import FilterTodos from "./FilterTodos.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Todos",
  components: { Addtodo, FilterTodos },
  methods: {
    ...mapActions(["fetchTodos", "updateTodo", "deleteTodo"]),
    Ondbclick(todo) {
      const updateTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      };
      this.updateTodo(updateTodo);
    },
    removeTodo(id) {
      this.deleteTodo(id);
    },
  },
  computed: { ...mapGetters(["allTodos"]) },
  created() {
    this.fetchTodos();
  },
  data() {
    return {
    };
  },
};
</script>
<style scoped>
.todos {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
}
.todo {
  background-color: #41b883;
  padding: 20px;
  border-radius: 4px;
  position: relative;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}

.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
.completed {
  background: #35495e;
  color: whitesmoke;
}
</style>
