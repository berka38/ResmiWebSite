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
        <div class="card col-12 d-flex flex-wrap flex-row justify-content-around" style="max-width: 50%; margin: 5% 0;" >
            <div id="carouselExample" class="carousel slide"  style="width: 100%;">
            <div class="carousel-inner">
                <div class="carousel-item active"  v-for="i in CommnetData">
                    <div>
                        <div class="card">
                        <div class="card-header">
                           Verdiği puan, {{ i.puan }} yıldız.
                        </div>
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                            <p>{{ i.Aciklama }}</p>
                            <footer class="blockquote-footer">by {{i.Gonderen}} </footer>
                            </blockquote>
                        </div>
                        </div>

                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden" style="color: black; font-size: 4em;">Geri</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="" style="color: black; font-size: 4em;">></span>
            </button>
        </div>        
    </div>

    </div>
    <div class="section-c">
        <div class="card text-bg-dark col-12 ">
            <h1 style="text-align: center;">Blog</h1>
            <span class="card col-12"></span>
            <ul v-for="blogs in BlogData" class="d-flex justify-content-center">

                <div class="card text-bg-dark" style=" max-height: 20rem; margin: 2% 0; min-width: 70%; max-width: 60rem;">
 
                    <img style="max-height: 20rem;" :src="blogs.image" class="card-img" alt="...">
                    <span class="card float-start" style="z-index: 0 ; width: 100%; height: 100%; position: absolute; background: black; opacity: 0.5;"></span>
                    <div class="card-img-overlay d-flex justify-content-center align-items-center flex-column">
                        <h5 class="card-title fw-bold" style="z-index: 5; font-family:sans-serif; font-size: 1.2em;">{{ blogs.BlogYazi }}</h5>
                        <p class="card-text fw-bold"><small>by. {{blogs.Gonderen}}</small></p>
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