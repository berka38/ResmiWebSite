<template>
    <div class="container">
        <AdminLists></AdminLists>  
    </div>    
</template>
<script>
  import { defineComponent } from "vue";
  import AdminLists from '@/views/pages/dashboard/dashComponents/DashAdminList.vue';

  export default defineComponent({
        name: 'adminList',
        components:{AdminLists},
        setup() {
            
        }
    })
</script>

<style lang="">
    
</style>