<template>
  <div>
    <header class="topbar">
      <div class="container topbar-inner">
        <div class="brand">
          <div class="dot" />
          <div>
            <div class="title">Mini Cookbook</div>
            <div class="sub">Anonymous Vue3 SPA</div>
          </div>
        </div>

        <nav class="nav">
          <RouterLink to="/" class="nav-link">Home</RouterLink>
          <RouterLink to="/recipes" class="nav-link">Recipes</RouterLink>
          <RouterLink to="/favorites" class="nav-link">Favorites</RouterLink>
          <RouterLink to="/about" class="nav-link">About</RouterLink>
        </nav>
      </div>
    </header>

    <main class="container" style="padding: 16px 0 40px">
      <RouterView />
    </main>

    <footer class="footer">
      <div class="container footer-inner">
        <span class="muted">Vue3 + Router + Pinia</span>
        <span class="muted">Course assignment</span>
      </div>
    </footer>
  </div>
</template>

<style>
.topbar {
  background: white;
  border-bottom: 1px solid rgba(0,0,0,0.08);
  position: sticky;
  top: 0;
}

.topbar-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  flex-wrap: wrap;
}

.container {
  max-width: 980px;
  margin: 0 auto;
  padding: 0 16px;
}

.brand { display: flex; align-items: center; gap: 10px; }
.dot { width: 10px; height: 10px; border-radius: 50%; background: rgba(0,0,0,0.55); }
.title { font-weight: 700; }
.sub { font-size: 12px; opacity: 0.7; }

.nav { display: flex; gap: 10px; flex-wrap: wrap; }

.nav-link {
  text-decoration: none;
  padding: 8px 10px;
  border-radius: 10px;
  color: inherit;
}

.nav-link.router-link-active {
  background: rgba(0,0,0,0.06);
}

.footer { border-top: 1px solid rgba(0,0,0,0.08); padding: 16px 0; }
.footer-inner { display: flex; justify-content: space-between; gap: 10px; flex-wrap: wrap; }
.muted { opacity: 0.7; }
</style>
