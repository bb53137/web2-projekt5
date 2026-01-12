<template>
  <section v-if="loading">
    <p>Loading...</p>
  </section>

  <section v-else>
    <div v-if="!recipe">
      <h1>Recipe not found</h1>
    </div>

    <div v-else>
      <h1>{{ recipe.title }}</h1>
      <p>{{ recipe.timeMin }} min • {{ recipe.level }}</p>

      <button @click="store.toggleFavorite(recipe.id)">
        {{ store.favoriteIds.includes(recipe.id) ? 'Remove favorite' : 'Add favorite' }}
      </button>

      <h3>Ingredients</h3>
      <ul>
        <li v-for="(i, idx) in recipe.ingredients" :key="idx">{{ i }}</li>
      </ul>

      <h3>Steps</h3>
      <ol>
        <li v-for="(s, idx) in recipe.steps" :key="idx">{{ s }}</li>
      </ol>

      <RouterLink to="/recipes">Back</RouterLink>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useRecipesStore } from '@/stores/recipesStore'

const route = useRoute()
const store = useRecipesStore()

const recipe = ref(null)
const loading = ref(true)

onMounted(async () => {
  await store.init()
  recipe.value = await store.loadOne(route.params.id)
  loading.value = false
})
</script>
