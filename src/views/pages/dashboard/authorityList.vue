<template>
        <div class="container">
          <div class=" p-3 bg-body rounded shadow-lg col-12 mb-5 mt-5">
      <div class="d-flex justify-content-between">
                <div><h4 class="border-bottom pb-2 mb-3">Yetki listesi</h4></div>
                <div>
                    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Yeni Yetki
                    </button>
                </div>
                </div>

     <ul v-for="authority in authorityData">
      <div class="d-flex text-body-secondary pt-3">
        <i class="bd-placeholder-img flex-shrink-0 me-2 rounded bi bi-key" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"></i>
        <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
          <div class="d-flex justify-content-between">
            <strong class="text-gray-dark">{{ authority.Name }}</strong>
            <p>{{ authority.authorityCode }}</p>
          </div>
          <span class="d-block">id: {{ authority.id }}</span>
        </div>
    </div>
    </ul>
</div>


  
        </div>
        <!-- Modal -->
<div class="modal " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog ">
    <div class="modal-content text-bg-dark"  data-bs-theme="dark">
      <div class="modal-header" >
        <h1 class="modal-title fs-5" id="exampleModalLabel">Yeni Yetki</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="d-flex flex-column mb-3">
          <label class="text-body-secondary mb-1">İsim</label>
            <input type="text" class="form-control" placeholder="Yetki adı">
        </div>
        <div>
          <label class="text-body-secondary mb-1">İsim ve soyisim giriniz</label>
          <select class="form-select" multiple aria-label="Multiple select example">
            <option v-for="authorityAuthData in authorityAuth" value="1">{{ authorityAuthData.name }}</option>

          </select>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Onayla</button>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import authorityData from '../../data/authority.json';
import authorityAuth from '../../data/authorityAuth.json'

</script>