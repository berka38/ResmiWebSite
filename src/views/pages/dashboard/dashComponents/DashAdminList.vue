<template>
    <div class=" p-3 bg-body rounded shadow-sm col-12 mb-5 mt-5">
    <h4 class="border-bottom pb-2">Yetkililer</h4>

     <ul v-for="AdminList in SuperUsersDatas">
      <div class="d-flex text-body-secondary pt-3">
        <i class="bd-placeholder-img flex-shrink-0 me-2 rounded bi bi-shield" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"></i>
        <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
          <div class="d-flex justify-content-between">
            <strong class="text-gray-dark">{{ AdminList.name }}</strong>
            <p>{{ AdminList.Status }}</p>
          </div>
          <span class="d-block">@{{ AdminList.userName }}</span>
        </div>
      </div>
    </ul> 

    <small class="d-block text-end mt-3">
      <a href="#">Tüm Yetkililer</a>
    </small>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
import SuperUsersData from '../../../data/SuperUsers.json'

export default defineComponent({
    name: 'AdminLists',
    setup(){
        const SuperUsers = ref({SuperUsersData})
        const SuperUsersDatas = SuperUsers.value.SuperUsersData
        console.log(SuperUsersDatas)
        return{SuperUsersDatas}
    }
})

</script>