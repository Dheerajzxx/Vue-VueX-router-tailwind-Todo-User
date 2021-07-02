import axios from "axios";

const state = {
    todos: [
        {
            id: 1001,
            title: 'Todo One',
            completed: false,
        },
        {
            id: 1002,
            title: 'Todo Two',
            completed: true,
        },
    ]
};

const getters = {
    allTodos: (state) => state.todos
};

const actions = {
    async fetchTodos({commit}){
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos`); //use backticks (``)
        // console.log(response);
        commit('setTodos', response.data);
    },
    async addTodo({ commit }, title) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false});
        commit('newTodo', response.data);
    },
    async deleteTodo({ commit }, id) {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
  
      commit('removeTodo', id);
    },
    async filterTodos({ commit }, e) {
      // Get selected number
      const limit = parseInt(
        e.target.options[e.target.options.selectedIndex].innerText
      );
      
      const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`); 
      // console.log(response.data);
      commit('filterTodos', response.data);
    },
    async updateTodo({ commit }, updTodo) {
      // console.log(updTodo);
      
      if (updTodo.id > 1000) {
        commit('updateTodo', updTodo);
      }
      else{
        const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`, updTodo);
        // console.log(response.data);
        commit('updateTodo', response.data);
      }
  
    }
};

const mutations = {
    // setTodos: (state, todos) => (state.todos = todos),
    setTodos (state, todos) {
      state.todos = state.todos.concat(todos);
    },

    filterTodos(state, todos) {
      state.todos = todos;
    },
    
    // newTodo: (state, todo) => state.todos.unshift(todo),
    newTodo (state, todo) {
      state.todos.unshift(todo);
    },
    // removeTodo: (state, id) => (state.todos = state.todos.filter(todo => todo.id !== id)),
    removeTodo (state, id){
      state.todos = state.todos.filter(remove);
      function remove(todo) {
        return todo.id !== id;
      }
    },
    updateTodo: (state, updTodo) => {
    const index = state.todos.findIndex(todo => todo.id === updTodo.id);
    if (index !== -1) {
      state.todos.splice(index, 1, updTodo);
    }
  }
};

export default {
    state,
    getters,
    actions,
    mutations
}