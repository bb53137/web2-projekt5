//mock backend, radi kao backend, sve je async

const DATA = [
  {
    id: 'pasta-1',
    title: '15-minute Garlic Pasta',
    timeMin: 15,
    level: 'Easy',
    ingredients: ['pasta', 'garlic', 'olive oil', 'parsley', 'lemon'],
    steps: [
      'Boil pasta in salted water.',
      'Gently warm garlic in olive oil (do not burn).',
      'Toss pasta with oil, lemon and parsley.'
    ]
  },
  {
    id: 'soup-1',
    title: 'Tomato Soup (Simple)',
    timeMin: 25,
    level: 'Easy',
    ingredients: ['tomatoes', 'onion', 'garlic', 'broth', 'basil'],
    steps: [
      'Cook onion and garlic.',
      'Add tomatoes and broth.',
      'Blend and simmer 10 minutes.'
    ]
  },
  {
    id: 'salad-1',
    title: 'Crunchy Chickpea Salad',
    timeMin: 10,
    level: 'Easy',
    ingredients: ['chickpeas', 'cucumber', 'olive oil', 'lemon', 'salt'],
    steps: ['Mix everything.', 'Let it rest 3 minutes.', 'Serve.']
  },
  {
    id: 'eggs-1',
    title: 'Pan Eggs + Toast',
    timeMin: 12,
    level: 'Easy',
    ingredients: ['eggs', 'butter', 'toast', 'salt', 'pepper'],
    steps: ['Toast bread.', 'Cook eggs in butter.', 'Season and eat.']
  },
  {
    id: 'rice-1',
    title: 'Quick Veggie Rice',
    timeMin: 20,
    level: 'Medium',
    ingredients: ['rice', 'frozen veggies', 'soy sauce', 'oil'],
    steps: ['Cook rice.', 'Stir-fry veggies.', 'Mix + soy sauce.']
  }
]

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function fetchRecipes() {
  await sleep(400)
  return DATA.map((r) => ({ ...r }))
}

export async function fetchRecipeById(id) {
  await sleep(250)
  const found = DATA.find((r) => r.id === id)
  return found ? { ...found } : null
}

export async function saveFavoritesToStorage(ids) {
  await sleep(150)
  localStorage.setItem('favRecipeIds', JSON.stringify(ids))
}

export async function loadFavoritesFromStorage() {
  await sleep(150)
  const raw = localStorage.getItem('favRecipeIds')
  return raw ? JSON.parse(raw) : []
}
