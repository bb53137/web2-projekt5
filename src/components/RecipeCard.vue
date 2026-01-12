<template>
  <article class="card" :class="{ fav: isFav }">
    <div class="top">
      <h3>{{ recipe.title }}</h3>

      <!-- emit event -->
      <button class="star" @click="emit('toggle-fav', recipe.id)">
        {{ isFav ? '★' : '☆' }}
      </button>
    </div>

    <p class="meta">{{ recipe.timeMin }} min • {{ recipe.level }}</p>

    <div class="chips">
      <span v-for="(i, idx) in recipe.ingredients.slice(0, 3)" :key="idx">
        {{ i }}
      </span>
      <span v-if="recipe.ingredients.length > 3">
        +{{ recipe.ingredients.length - 3 }}
      </span>
    </div>

    <button class="btn" @click="emit('open', recipe.id)">Otvori</button>
  </article>
</template>

<script setup>
defineProps({
  recipe: { type: Object, required: true },
  isFav: { type: Boolean, default: false }
})

const emit = defineEmits(['toggle-fav', 'open'])
</script>

<style scoped>
.card {
  width: 260px;
  padding: 12px;
  border-radius: 14px;
  border: 1px solid rgba(0,0,0,0.1);
  background: white;
}

.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.star {
  color: var(--accent);
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
}

.meta {
  opacity: 0.7;
  font-size: 14px;
}

.chips {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin: 6px 0;
}

.chips span {
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 999px;
  border: 1px solid rgba(0,0,0,0.15);
}

.fav {
  outline: 2px solid var(--accent);
}


.btn {
  margin-top: 8px;
  padding: 6px 10px;
  border-radius: 10px;
  border: 1px solid rgba(0,0,0,0.2);
  background: white;
  cursor: pointer;
}
</style>
