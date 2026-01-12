<template>
  <div>
    <header class="topbar">
      <div class="container topbar-inner">
        <div class="brand">
          <div class="dot" />
          <div>
            <div class="title">Mini kuharica</div>
          </div>
        </div>

        <nav class="nav">
          <RouterLink to="/" class="nav-link">Početna</RouterLink>
          <RouterLink to="/recipes" class="nav-link">Recepti</RouterLink>
          <RouterLink to="/favorites" class="nav-link">Omiljeni</RouterLink>
          <RouterLink to="/about" class="nav-link">O aplikaciji</RouterLink>
        </nav>
      </div>
    </header>

    <main class="container" style="padding: 16px 0 40px">
      <RouterView />
    </main>

    <footer class="footer">
      <div class="container footer-inner">
      </div>
    </footer>
  </div>
</template>

<style>
.topbar {
  background: linear-gradient(90deg, #6366f1, #0ea5e9);
  color: white;
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
  color: white;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 10px;
}


.nav-link.router-link-active {
  background: rgba(255,255,255,0.25);
}


.footer { border-top: 1px solid rgba(0,0,0,0.08); padding: 16px 0; }
.footer-inner { display: flex; justify-content: space-between; gap: 10px; flex-wrap: wrap; }
.muted { opacity: 0.7; }
</style>
