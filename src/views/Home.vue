<template>
  <section class="grid">
    <div class="card">
      <h1 class="h1">Mini kuharica</h1>
      <p class="p">
        Ova aplikacija omogućuje pregled jednostavnih recepata, njihovo filtriranje
        po vremenu pripreme i spremanje omiljenih.
      </p>
      <p class="p" style="margin-top:8px;">
        Sami recepti su na engleskom jeziku.
      </p>

      <div class="row" style="margin-top:14px;">
        <RouterLink class="btn btn-primary" to="/recipes">Pregledaj recepte</RouterLink>
        <RouterLink class="btn btn-outline" to="/favorites">Moji favoriti</RouterLink>
      </div>
    </div>

    <div class="grid grid-2">
      <div class="card">
        <h2 class="h2">Što možeš raditi?</h2>
        <ul style="color:var(--muted); padding-left:18px;">
          <li>Pretraživati recepte</li>
          <li>Filtrirati po vremenu pripreme</li>
          <li>Otvarati detalje recepata</li>
          <li>Spremati omiljene</li>
        </ul>
      </div>

      <div class="card">
        <h2 class="h2">Savjet</h2>
        <p class="p">
          Možeš direktno otvoriti link poput <b>/recipe/pasta-1</b> i on će raditi
          čak i nakon osvježavanja stranice.
        </p>
        <div class="row" style="margin-top:12px;">
          <RouterLink class="btn btn-accent" to="/about">Više o aplikaciji</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
