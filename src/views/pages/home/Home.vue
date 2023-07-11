<style>.section-a {
    background: url('https://c1.wallpaperflare.com/preview/835/250/537/office-desk-computer-light.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
}</style>

<template>

<div class="section-a col-12 d-flex align-items-center justify-content-center">
        <div style="border: 1px black solid; background-color: black; width: 100%; height: 100vh; opacity: 0.5; position: absolute;"></div>
        <div  style="z-index: 2;">
            <h1 class="fw-bold d-flex justify-content-center" style="color: white; z-index: 2;">Yazılım SAN. AŞ.</h1>
            <h2 class="fw-bold d-flex justify-content-center col-12" style="z-index: 2; color: white; margin: 5%;">Bir yazılım şirketinden daha fazlası</h2>
        </div>
    </div>
    <div class="section-b d-flex justify-content-around flex-wrap " >
        <h1>Yorumlar</h1>
        <span class="card col-12 text-bg-dark"></span>
        <div class="card col-12 d-flex flex-wrap flex-row justify-content-around">
            <div v-for="i in CommnetData">
                <div class="p-2 card col-12 shadow" style="min-width: 100%; margin: 3%; min-height: 25em;">
                    <div class="card-body d-flex align-items-center justify-content-center flex-column">
                        <p class="d-flex justify-content-center ">{{ i.Aciklama }}</p>
                        <h5 style="display: block;">{{i.Gonderen}}</h5>
                    </div> 
                </div>
            </div>

            
            
        </div>

    </div>
    <div class="section-c">
        <div class="card text-bg-dark col-12 ">
            <h1 style="text-align: center;">Blog</h1>
            <span class="card col-12"></span>
            <ul v-for="blogs in BlogData">
                    <div class="card-body d-flex justify-content-center align-items-center flex-column">
                    <div class="card col-5 shadow d-flex justify-content-center align-items-center" style="min-width: 70%; height: 30rem; margin: 3%;">
                    <div class="card col-12  " style="max-width: 100%; min-width: 90%; margin-top: 1%;">
                        <img class="" style="min-height: 10rem;" :src="blogs.image" >
                    </div>
                <div class="card-body">
                    {{ blogs.BlogYazi }}
                </div>
                <div class="card-footer col-12" style="height: 5rem;">
                    <div class="d-flex align-items-center ">
                        
                            <div class="col-10">
                                <h3 style="font-size: 1em;">by. {{blogs.Gonderen}}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </ul>
        </div>
    </div>
    
</template>

<script>
  import { ref, onMounted, defineComponent } from "vue";
  import Commentsdata from '../../data/Comments.json';
  import Blogsdata from '../../data/Blogs.json';

    export default defineComponent({
        name:"home",
        components:{},
        setup() {
            const CommnetData = ref(Commentsdata);
            const BlogData = ref(Blogsdata)

            return{
                CommnetData,
                BlogData
            }
        }
    })
</script>