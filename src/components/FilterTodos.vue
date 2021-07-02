<template>
  <div class="flex justify-evenly items-center mt-4">
    <div class="flex justify-center items-center">
      <div class="text-lg font-semibold relative">Filter Todos:
      <div class="">
        <select @change="filterTodos($event)" class="rounded absolute -right-20 -top-6 focus:outline-none focus:bg-gray-900 focus:text-white px-2">
          <option value="200">200</option>
          <option value="100">100</option>
          <option value="50">50</option>
          <option value="20">20</option>
          <option value="10">10</option>
          <option value="5">5</option>
        </select>
      </div>
      </div>
    </div>
    <div class="flex justify-around items-center font-semibold">
      <div>Double click to mark as complete</div>
      <div class="text-green-700">
        <span class="bg-green-700 w-3 h-3 inline-block rounded-sm ml-6"></span> =
        Incomplete
      </div>
      <div class="text-blue-900">
        <span class="bg-blue-900 w-3 h-3 inline-block rounded-sm ml-6"></span> =
        Complete
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FilterTodos",
  methods: mapActions(["filterTodos"]),
};
</script>

<style scoped>
select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
}
</style>
