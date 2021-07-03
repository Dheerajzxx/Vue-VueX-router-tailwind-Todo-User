<template>
  <!-- <h1>users</h1>
  <div class="users">
    <div>
      <table>
        <thead>
          <tr>
            <th v-for="(value, index) in allUsers[0]" :key="value">
              {{ index }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in allUsers" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>
              <p v-for="(address, index) in user.address" :key="address">
                <span v-if="index !== 'geo'"> {{ index }}: {{ address }},</span>
                <span
                  v-else
                  v-for="(location, index) in address"
                  :key="location"
                >
                  <p v-if="index == 'lat'">Lat: {{ location }}</p>
                  <p v-else>Lng: {{ location }}</p>
                </span>
              </p>
            </td>
            <td>{{ user.phone }}</td>
            <td>{{ user.website }}</td>
            <td>
              <span v-for="(value, index) in user.company" :key="value.name">
                <p v-if="index == 'name'">name: {{ value }}</p>
                <p v-if="index == 'catchPhrase'">CatchPhrase: {{ value }}</p>
                <p v-if="index == 'bs'">BS: {{ value }}</p>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div> -->
  <!-- <div>{{allUsers[0]}}</div> -->
  <!-- <div v-for="(value2, index) in allUsers[0]" :key="value2">
      {{index}}
    </div> -->

  <div class="flex flex-col my-10">
    <div>
      <h2 class="text-2xl font-semibold leading-tight mb-4 text-secondary">
        Users Details Table (from JSON.placeholder API)
      </h2>
    </div>
    <div class="flex justify-between items-center mb-4">
      <div class="flex-1 pr-4">
        <div class="relative md:w-1/3">
          <input
            @keyup="filterTable"
            type="search"
            id="table-search"
            class="w-full pl-10 pr-4 py-2 rounded-lg shadow focus:outline-none focus:shadow-outline text-primary font-medium placeholder-primary"
            placeholder="Search by name..."
          />
          <div class="absolute top-0 left-0 inline-flex items-center p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 text-primary"
              viewbox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
              <circle cx="10" cy="10" r="7" />
              <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
          </div>
        </div>
      </div>
      <div>
        <div class="shadow rounded-lg flex">
          <div id="filter" class="relative">
            <button
              id="filter-dropdown"
              class="rounded-lg inline-flex items-center bg-white focus:outline-none focus:shadow-outline text-primary font-semibold py-2 px-2 md:px-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 md:hidden"
                viewbox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
                <path
                  d="M5.5 5h13a1 1 0 0 1 0.5 1.5L14 12L14 19L10 16L10 12L5 6.5a1 1 0 0 1 0.5 -1.5"
                />
              </svg>
              <span class="hidden md:block">Display</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 ml-1"
                width="24"
                height="24"
                viewbox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div
              class="absolute uppercase hidden filter-menu right-0 top-11 bg-white text-gray-500 border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none z-50"
            >
              <div class="px-4 py-3 w-40">
                <label
                  class="text-primary inline-flex justify-between items-center hover:bg-gray-200 px-2 py-2 rounded-lg cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked
                    value="col-1"
                    class="filter-checkbox focus:outline-none focus:shadow-outline"
                  />
                  <span class="text-sm leading-5 pl-2">column-1</span>
                </label>
              </div>
              <div class="px-4 py-3">
                <label
                  class="text-primary inline-flex justify-between items-center hover:bg-gray-200 px-2 py-2 rounded-lg cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked
                    value="col-2"
                    class="filter-checkbox focus:outline-none focus:shadow-outline"
                  />
                  <span class="text-sm leading-5 pl-2">column-2</span>
                </label>
              </div>
              <div class="px-4 py-3">
                <label
                  class="text-primary inline-flex justify-between items-center hover:bg-gray-200 px-2 py-2 rounded-lg cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked
                    value="col-3"
                    class="filter-checkbox focus:outline-none focus:shadow-outline"
                  />
                  <span class="text-sm leading-5 pl-2">column-3</span>
                </label>
              </div>
              <div class="px-4 py-3">
                <label
                  class="text-primary inline-flex justify-between items-center hover:bg-gray-200 px-2 py-2 rounded-lg cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked
                    value="col-4"
                    class="filter-checkbox focus:outline-none focus:shadow-outline"
                  />
                  <span class="text-sm leading-5 pl-2">column-4</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative"
      style="height: 405px;"
    >
      <table
        id="users-table"
        class="border-collapse table-auto w-full whitespace-no-wrap bg-white relative"
      >
        <thead class="text-gray-500 bg-gray-200">
          <tr>
            <th
              v-for="(value, index) in allUsers[0]"
              :key="value"
              class="uppercase text-left  border-b-2 py-2"
            >
              <span class="px-4 py-3"> {{ index }} </span>
            </th>
          </tr>
        </thead>
        <tbody id="usersData" class="text-gray-500">
          <tr
            v-for="user in allUsers"
            :key="user.id"
            class="hover:bg-primary hover:bg-opacity-20"
          >
            <td class="col-1 border-b px-4">
              <span class="flex items-center justify-center">
                {{ user.id }}
              </span>
            </td>
            <td class="col-1 border-b px-4">
              <span class="flex justify-center w-max">
                {{ user.name }}
              </span>
            </td>
            <td class="col-1 border-b px-4">
              <span class="flex justify-center w-max">
                {{ user.username }}
              </span>
            </td>
            <td class="col-1 border-b px-4 ">
              <span class="flex justify-center w-max">
                {{ user.email }}
              </span>
            </td>
            <td class="col-1 border-b px-4">
              <div
                v-for="(address, index) in user.address"
                :key="address"
                class="flex w-max"
              >
                <span v-if="index !== 'geo'" class="capitalize">
                  {{ index }}: {{ address }},</span
                >
                <span
                  v-else
                  v-for="(location, index) in address"
                  :key="location"
                >
                  <span v-if="index == 'lat'">Lat: {{ location }} &nbsp;</span>
                  <span v-else>Lng: {{ location }}</span>
                </span>
              </div>
            </td>
            <td class="col-1 border-b px-4">
              <span class="py-3 flex justify-center w-max">
                {{ user.phone }}
              </span>
            </td>
            <td class="col-1 border-b px-4">
              <span class="py-3 flex justify-center w-max">
                {{ user.website }}
              </span>
            </td>
            <td class="col-1 border-b px-4">
              <span v-for="(value, index) in user.company" :key="value.name">
                <p v-if="index == 'name'" class="w-max">Name: {{ value }}</p>
                <p v-if="index == 'catchPhrase'" class="w-max">
                  CatchPhrase: {{ value }}
                </p>
                <p v-if="index == 'bs'" class="w-max">BS: {{ value }}</p>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Users",
  methods: {
    ...mapActions(["fetchUsers"]),
    filterTable(e) {
      var value = e.target.value;
      var filtervalue = value.toUpperCase();
      var usersData = document.getElementById("usersData");
      var datacollection = usersData.getElementsByTagName("tr");
      for (let i = 0; i < datacollection.length; i++) {
        var td = datacollection[i].getElementsByTagName("td")[1];
        if (td) {
          var txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filtervalue) > -1) {
            datacollection[i].style.display = "";
          } else {
            datacollection[i].style.display = "none";
          }
        }
      }
    },
  },
  computed: mapGetters(["allUsers"]),
  created() {
    this.fetchUsers();
  },
};
</script>

<style scoped></style>
