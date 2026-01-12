<template>
  <section>
    <h1>Omiljeni</h1>

    <p v-if="store.favoriteIds.length === 0">Nema omiljenih još.</p>

    <div class="list">
      <RecipeCard
        v-for="r in store.favoriteRecipes"
        :key="r.id"
        :recipe="r"
        :isFav="true"
        @toggle-fav="store.toggleFavorite"
        @open="openDetail"
      />
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useRecipesStore } from '@/stores/recipesStore'
import RecipeCard from '@/components/RecipeCard.vue'

const store = useRecipesStore()
const router = useRouter()

onMounted(async () => {
  await store.init()
  await store.loadAll()
})

function openDetail(id) {
  router.push(`/recipe/${id}`)
}
</script>

<style>
.list {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 12px;
}
</style>
