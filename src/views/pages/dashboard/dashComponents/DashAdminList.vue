<template>
    <div class=" p-3 bg-body rounded shadow-lg col-12 mb-5 mt-5">
      <div class="d-flex justify-content-between">
                <div><h4 class="border-bottom pb-2 mb-3">Yetkili listesi</h4></div>
                <div>
                    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Yeni Yetkili  
                    </button>
                </div>
                </div>

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


  </div>
  <!-- Modal -->
<div class="modal " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog ">
    <div class="modal-content text-bg-dark"  data-bs-theme="dark">
      <div class="modal-header" >
        <h1 class="modal-title fs-5" id="exampleModalLabel">Yeni Yetkili</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <label class="text-body-secondary mb-1">Yetki seçiniz</label>
        <select class="col-12 form-select mb-3">
            <option value="-1" selected>Yetki Seçiniz</option>
            <option v-for="authority in authorityData">{{ authority.Name }}</option>
        </select>
        <div class="d-flex flex-column mb-3">
          <label class="text-body-secondary mb-1">Kullanıcı adı giriniz</label>
            <input type="text" class="form-control" placeholder="Kullanıcı adı">
        </div>
        <div>
          <label class="text-body-secondary mb-1">İsim ve soyisim giriniz</label>
          <div class="d-flex flex-row col-12 input-group">
            <input type="text" class="form-control" placeholder="Ad">
            <input type="text" class="form-control" placeholder="Soyad">
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Onayla</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import { defineComponent, ref } from 'vue';
import SuperUsersData from '../../../data/SuperUsers.json'
import authorityData from '../../../data/authority.json'

export default defineComponent({
    name: 'AdminLists',
    setup(){
        const SuperUsers = ref({SuperUsersData})
        const SuperUsersDatas = SuperUsers.value.SuperUsersData
        console.log(authorityData)
        return{SuperUsersDatas}

    }
})

</script>