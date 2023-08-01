<template>
  <div class="col-12 d-flex flex-row ">
    <div class="col-2">
      <div class="card p-3 text-bg-dark rounded-0" style="height: 100%;" >
        <card class="header d-flex justify-content-center"><i class="bi bi-speedometer2 me-2" style="font-size: 1.5em;"></i><h3><router-link style="text-decoration: none; color: white;" to="dashboard">Admin Panel</router-link></h3></card>
        <hr>
        <div class="card-body" style="font-size: 1.1em; font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif ;">
          
          <li style="list-style: none;" class="mb-4">
            <i class="bi bi-house-door me-1"></i>


            <router-link style="text-decoration: none; color: white;" to="dashboard">Ana Sayfa</router-link>
            

          </li>

          <li style="list-style: none;" class="mb-4">
            <i class="bi bi-people me-1"></i>
            <router-link style="text-decoration: none; color: white;" to="superusers">Yetkililer</router-link>

            
          </li>

          <li style="list-style: none;" class="mb-4">
            <i class="bi bi-card-checklist"></i>


            <a href="" style="text-decoration: none; color: white;">
              Şiparişler
            </a>
          </li>
        </div>
      </div>
    </div>
      <div class="col-10">
        <router-view></router-view>
    </div>
  </div>

</template>
<script>
import {defineComponent} from "vue";

export default defineComponent({
    name: "Autlayout",
});
</script>