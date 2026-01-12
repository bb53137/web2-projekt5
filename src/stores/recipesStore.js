import { defineStore } from 'pinia'
import {
  fetchRecipes,
  fetchRecipeById,
  loadFavoritesFromStorage,
  saveFavoritesToStorage
} from '@/api/recipesApi'

export const useRecipesStore = defineStore('recipes', {
  state: () => ({
    recipes: [],
    favoriteIds: [],
    loading: false,
    error: null
  }),

  // computed na razini store-a
  getters: {
    favoriteRecipes(state) {
      return state.recipes.filter((r) => state.favoriteIds.includes(r.id))
    }
  },

  actions: {
    async init() {
      this.favoriteIds = await loadFavoritesFromStorage()
    },

    async loadAll() {
      this.loading = true
      this.error = null
      try {
        this.recipes = await fetchRecipes()
      } catch {
        this.error = 'Failed to load recipes.'
      } finally {
        this.loading = false
      }
    },

    async loadOne(id) {
      return await fetchRecipeById(id)
    },

    async toggleFavorite(id) {
      const index = this.favoriteIds.indexOf(id)
      if (index >= 0) this.favoriteIds.splice(index, 1)
      else this.favoriteIds.push(id)

      await saveFavoritesToStorage(this.favoriteIds)
    }
  }
})
