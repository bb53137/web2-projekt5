import { createRouter, createWebHistory } from 'vue-router'

//lazy loading
const Home = () => import('@/views/Home.vue')
const Recipes = () => import('@/views/Recipes.vue')
const RecipeDetail = () => import('@/views/RecipeDetail.vue')
const Favorites = () => import('@/views/Favorites.vue')
const About = () => import('@/views/About.vue')
const NotFound = () => import('@/views/NotFound.vue')

export default createRouter({
  history: createWebHistory(), //bookmarkable linkovi
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/recipes', name: 'recipes', component: Recipes },
    { path: '/recipe/:id', name: 'recipe-detail', component: RecipeDetail, props: true },
    { path: '/favorites', name: 'favorites', component: Favorites },
    { path: '/about', name: 'about', component: About },

    //catch all 404
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound }
  ]
})
