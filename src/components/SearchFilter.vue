<template>
  <div class="row">
    <input
      class="input"
      type="text"
      placeholder="Search..."
      v-model="localQuery"
    />

    <select class="input" v-model.number="localMaxTime">
      <option :value="0">Any time</option>
      <option :value="10">≤ 10 min</option>
      <option :value="15">≤ 15 min</option>
      <option :value="20">≤ 20 min</option>
    </select>

    <button class="btn" @click="clear">Clear</button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  modelValue: { type: String, default: '' },
  maxTime: { type: Number, default: 0 }
})

const emit = defineEmits(['update:modelValue', 'update:maxTime'])

const localQuery = ref(props.modelValue)
const localMaxTime = ref(props.maxTime)

watch(() => props.modelValue, (v) => (localQuery.value = v))
watch(() => props.maxTime, (v) => (localMaxTime.value = v))

watch(localQuery, (v) => emit('update:modelValue', v))
watch(localMaxTime, (v) => emit('update:maxTime', v))

function clear() {
  localQuery.value = ''
  localMaxTime.value = 0
}
</script>

<style scoped>
.row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.input {
  padding: 8px;
  border-radius: 10px;
  border: 1px solid rgba(0,0,0,0.2);
}

.btn {
  padding: 8px 10px;
  border-radius: 10px;
  border: 1px solid rgba(0,0,0,0.2);
  background: white;
}
</style>
