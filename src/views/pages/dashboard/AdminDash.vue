<template>
    <div class="">
        <div class="col-12 d-flex justify-content-center " style="height: 100vh;">
            <AdminLists></AdminLists>
        </div>

    </div>
</template>

<script>
  import { defineComponent } from "vue";
  import AdminLists from '@/views/pages/dashboard/dashComponents/DashAdminList.vue';

    export default defineComponent({
        name: 'admin-dashboard',
        components:{AdminLists},
        setup() {
            
        }
    })

</script>