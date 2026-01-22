VUE3 SPA Projekt

Ova aplikacija je jednostavna Vue 3 jednostranična aplikacija koja služi za pregled recepata.
Korisnik može pregledavati recepte, filtrirati ih po nazivu i vremenu potrebnom da se jelo spremi, otvoriti detalje pojedinog recepta i spremati recepte u favorite.
Aplikacija je izrađena korištenjem Vue 3 (za komponente, reactive state, lifecycle hooks), Vue Router (za više stranica, dinamičke rute i 404 stranica),
Pinia (za globalno stanje tj. recepti i favoriti).
Podaci o receptima dohvaćaju se asinkrono iz simuliranog backend servisa, a favoriti se asinkrono spremaju u lokalni storage preglednika.
Stranice aplikacije se učitavaju lazy loadingom.
Aplikacija se lokalno pokreće naredbama:
npm install
npm run dev

Aplikacija ima sve potrebne funkcionalnosti.

1.interpolation/one-way binding - Da 
src/views/Recipes.vue - {{ filtered.length }}, {{ store.recipes.length }} - tren recepta koliko vidim s filetrom, uk br recepata
src/components/RecipeCard.vue - :class="{ fav: isFav }" - ako je omiljen dodaj zeleni okvir, ako ne ništa

2.two-way binding - Da 
src/components/SearchFilter.vue - v-model  - upisano u input ide u localQuery
src/views/Recipes.vue - v-model i v-model:maxTime  - upisano u select ide u localMaxTime

3.methods - Da
src/views/Recipes.vue - openDetail()  - klikne se "open" na stranici pa prebaci na stranicu openDetail
src/components/SearchFilter.vue - clear()  - klikne se na "očisti" i metoda poništi filtere
src/stores/recipesStore.js - toggleFavorite()  - metoda kojom dodajemo ili mičemo recepte iz favorita

4.computed properties - Da   
src/views/Recipes.vue - filtered  - computed lista recepata koja se mijenja kad se promijeni search ili max time
src/stores/recipesStore.js - favoriteRecipes  - computed lista favorita koja se računa iz recipes i favoriteIds

5.scoped style - Da 
src/components/RecipeCard.vue  - ima <style scoped>
src/components/SearchFilter.vue  - ima <style scoped>

6.lifecycle hook - Da
src/views/Recipes.vue - onMounted - učitaju se favoriti i učitaju se recepti iz backenda
src/views/RecipeDetail.vue - onMounted  - učitaju se detalji recepta po id-u iz url-a
src/views/Favorites.vue - onMounted  - učitaju se favoriti i recepti

7.routing - Da
src/router/index.js  -
/, /recipes, /recipe/:id, /favorites, /about  - Home stranica, lista recepata, detalji recepata, omiljeni, o aplikaciji

Bookmarkable - Da, pomoću createWebHistory i Render rewrite 
404 catch all - Da  
src/router/index.js - tu se nalazi ruta za error 404 
src/views/NotFound.vue - tamo se ode ako se upise link koji ne postoji

8.komponente - Da
RecipeCard.vue (stateless i props) - bez stanja, ne pamti ništa, samo prima podatke
SearchFilter.vue (stateful) - ima stanje i svoje varijable: localQuery i localMaxTime

9.emit event - Da
RecipeCard.vue - toggle-fav, open  - emitira kad se klikne zvjezdica, kad se klikne open
SearchFilter.vue - update:modelValue, update:maxTime  - emitira update ovo sto pise lijevo

10.store(Pinia) - Da  
src/stores/recipesStore.js  -  sadrži listu recepata, favorite id-eve, loading status i error status

11.asinkroni backend Da 
src/api/recipesApi.js - ima sync/await i sleep() 
fetchRecipes, fetchRecipeById, saveFavoritesToStorage, loadFavoritesFromStorage  - učitavaju se svi recepti, učitava se 1 recept, spremaju se favoriti, učitavaju se favoriti

12.lazy loading - Da
src/router/index.js  - tu se nalazi
const Recipes = () => import('@/views/Recipes.vue') - primjer
