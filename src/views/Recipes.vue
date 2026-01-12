<template>
  <section>
    <h1>Recipes</h1>

    <p v-if="store.loading">Loading...</p>
    <p v-else-if="store.error">{{ store.error }}</p>

    <div v-else>
      <!-- two-way binding -->
      <SearchFilter v-model="query" v-model:maxTime="maxTime" />

      <p>Showing {{ filtered.length }} of {{ store.recipes.length }}</p>

      <div class="list">
        <RecipeCard
          v-for="r in filtered"
          :key="r.id"
          :recipe="r"
          :isFav="store.favoriteIds.includes(r.id)"
          @toggle-fav="store.toggleFavorite"
          @open="openDetail"
        />
      </div>

      <p v-if="filtered.length === 0">No recipes found.</p>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useRecipesStore } from '@/stores/recipesStore'
import RecipeCard from '@/components/RecipeCard.vue'
import SearchFilter from '@/components/SearchFilter.vue'

const store = useRecipesStore()
const router = useRouter()

const query = ref('')
const maxTime = ref(0)

//lifecycle hook
onMounted(async () => {
  await store.init()
  await store.loadAll()
})

//computed
const filtered = computed(() => {
  const q = query.value.toLowerCase()
  return store.recipes.filter((r) => {
    const matchText = !q || r.title.toLowerCase().includes(q)
    const matchTime = !maxTime.value || r.timeMin <= maxTime.value
    return matchText && matchTime
  })
})

//method
function openDetail(id) {
  router.push(`/recipe/${id}`)
}
</script>

<style>
.list {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
</style>
