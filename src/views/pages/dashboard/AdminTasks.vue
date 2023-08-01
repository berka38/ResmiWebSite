<template>
    <div class="container">
        <div class="p-3 bg-body rounded shadow-lg col-12 mb-5 mt-5">
            <div class="d-flex justify-content-between">
                <div><h4 class="border-bottom pb-2 mb-3">Görev listesi</h4></div>
                <div>
                    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Yeni Görev  
                    </button>
                </div>
                </div>
        <!-- Button trigger modal -->
        



    <ul v-for="tasks in SUTasks">
        <div class="d-flex text-body-secondary col-12 justify-content-between align-items-center">
             <div class="d-flex flex-row">
                <i v-if="tasks.completed" class="bi bi-patch-check m-2"></i>
                <i v-else class="bi bi-patch-exclamation m-2" ></i>
                <p class="pb-3 mb-0 small lh-sm border-bottom">
                    <strong class="d-block text-gray-dark">@{{ tasks.userName }}</strong>
                    {{ tasks.task }}
                </p>
             </div>
             <div class="float-end">
                <button class="btn btn-dark " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria="true" aria-expanded="false">
                    ...
                </button>
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
        <h1 class="modal-title fs-5" id="exampleModalLabel">Yeni Görev</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <label class="text-body-secondary mb-1">yetkili giriniz</label>
        <select class="col-12 form-select mb-3">
            <option value="-1" selected>Yetkili Seçiniz</option>
            <option v-for="SuperUsers in SuperUsersData" value="-1">@{{ SuperUsers.userName }}</option>
        </select>
        <div class="d-flex flex-column">
            <label class="text-body-secondary mb-1">Görevi giriniz</label>
            <input type="text" class="form-control" placeholder="Görev...">
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
import SUTasks from '../../data/SuperUserTasks.json';
import SuperUsersData from '../../data/SuperUsers.json';


</script>