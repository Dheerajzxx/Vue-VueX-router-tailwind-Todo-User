<template>
  <h1>users</h1>
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
                <span v-else v-for="(location, index) in address" :key="location">
                  <p v-if="index == 'lat'">Lat: {{location}}</p>
                  <p v-else>Lng: {{location}}</p>
                </span>
              </p>
            </td>
            <td>{{ user.phone }}</td>
            <td>{{ user.website }}</td>
            <td><span v-for="(value, index) in user.company" :key="value.name">
              <p v-if="index == 'name'">name: {{ value }}</p>
              <p v-if="index == 'catchPhrase'">CatchPhrase: {{ value }}</p>
              <p v-if="index == 'bs'">BS: {{ value }}</p>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- <div>{{allUsers[0]}}</div> -->

  <!-- <div v-for="(value2, index) in allUsers[0]" :key="value2">
      {{index}}
    </div> -->
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Users",
  methods: {
    ...mapActions(["fetchUsers"]),
  },
  computed: mapGetters(["allUsers"]),
  created() {
    this.fetchUsers();
  },
};
</script>

<style scoped></style>
