<template>
    <div class="col-5">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">İD</th>
      <th scope="col">Username</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="SuperUsers in SuperUserData">
      <th scope="row">{{ SuperUsers.id }}</th>
      <td>{{ SuperUsers.userName }}</td>
      <td>{{ SuperUsers.Status }}</td>
    </tr>
  </tbody>
</table>
    </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
import SuperUsersData from '../../../data/SuperUsers.json'

export default defineComponent({
    name: 'AdminLists',
    setup(){
        const SuperUserData = ref(SuperUsersData)
        return{SuperUserData}
    }
})

</script>