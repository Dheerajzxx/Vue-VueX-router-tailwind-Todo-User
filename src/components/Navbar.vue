<template>
  <div
    class="w-full p-8 mb-4 rounded-lg bg-gray-800 text-white font-bold text-xl flex justify-around items-center"
  >
    <div class="addtodo">
      <router-link to="/">
        <button class="p-2 bg-gray-700 rounded"><h2>Add Todo</h2></button>
      </router-link>
    </div>
    <div class="users">
      <router-link to="/users">
        <button class="p-2 bg-gray-700 rounded"><h2>Users</h2></button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>
