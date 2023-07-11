import { createRouter, createWebHistory } from "vue-router";

const routes = [

    {
        path: "/",
        redirect: "/anasayfa",
        component: () => import('@/views/layouts/layout.vue'),
        children: [
            {
                path: "/anasayfa",
                name: "Anasayfa",
                component: () => import('@/views/pages/home/Home.vue'),
            },
            {
                path: "/hakkimizda",
                name: "Hakkimizda",
                component: () => import('@/views/pages/hakkimizda/Hakkimizda.vue'),
            },
            {
                path: "/iletisim",
                name: "Iletisim",
                component: () => import('@/views/pages/iletisim/Iletisim.vue'),
            },
            {
                path: "/testpage",
                name: "testPage",
                component: () => import('@/views/testpage/testPage.vue'),
            },

        ]
    },
    
];          

const router = createRouter({
    history: createWebHistory(),
    routes,
});



export default router;