<template>
  <section class="grid">
    <div class="card">
      <h1 class="h1">O aplikaciji</h1>
      <p class="p">
        Ovo je jednostavna jednostranična aplikacija napravljena u Vue 3 uz korištenje
        Vue Routera i Pinia storea.
      </p>
      <p class="p" style="margin-top:8px;">
        Podaci o receptima se dohvaćaju asinkrono iz mock backend servisa,
        omiljeni recepti se spremaju lokalno.
      </p>
    </div>

    <div class="grid grid-2">
      <div class="card">
        <h2 class="h2">Tehnologije</h2>
        <ul style="color:var(--muted); padding-left:18px;">
          <li>Vue 3 (komponente, lifecycle)</li>
          <li>Vue Router (više stranica i 404)</li>
          <li>Pinia (globalno stanje)</li>
          <li>Asinkroni dohvat podataka</li>
        </ul>
      </div>

      <div class="card">
        <h2 class="h2">Napomena</h2>
        <p class="p">
          Aplikacija je jednostavna namjerno da bi bila lagana za razumjeti,
          ali uključuje sve tražene funkcionalnosti.
        </p>
        <div class="row" style="margin-top:12px;">
          <RouterLink class="btn btn-primary" to="/recipes">Idi na recepte</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
