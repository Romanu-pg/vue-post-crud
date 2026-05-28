import { createRouter, createWebHistory } from 'vue-router'; 
import { defineComponent } from 'vue';

// Inline stub components to avoid missing .vue module/type errors
const Home = defineComponent({ name: 'Home', template: '<div>Home</div>' });
const Posts = defineComponent({ name: 'Posts', template: '<div>Posts</div>' });

const routes = [
    { path: '/', name: "home", component: Home },
    { path: '/posts', name: "posts", component: Posts },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;