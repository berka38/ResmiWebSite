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

    {
        path: "/admin",
        redirect: "/dashboard",
        component: () => import('@/views/layouts/Dashlayout.vue'),
        children: [
            {
                path: "/dashboard",
                name: "AdminDash",
                component: () => import('@/views/pages/dashboard/AdminDash.vue'),
            },
            {
                path: "/superusers",
                name: "superusers",
                component: () => import('@/views/pages/dashboard/ADadminList.vue'),
            },
            {
                path: "/superuserstasks",
                name: "superuserstasks",
                component: () => import('@/views/pages/dashboard/AdminTasks.vue'),
            },
            {
                path: "/authoritylist",
                name: "authoritylist",
                component: () => import('@/views/pages/dashboard/authoritylist.vue'),
            },


        ]
    }
    
];          

const router = createRouter({
    history: createWebHistory(),
    routes,
});



export default router;