<script setup>
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <header>
    <div class="site-header">
      <RouterLink to="/" class="site-header-left">
        <img
          class="site-logo"
          src="../img/two-barrels-logo-final-symbol.svg"
          alt="2 barrels logo"
        />
        <p class="header-title">Frontend Resources</p>
      </RouterLink>

      <nav class="site-nav">
        <RouterLink
          to="/how-i-built-it"
          class="nav-link"
          :class="{ 'nav-link--active': route.path === '/how-i-built-it' }"
        >
          How I Built It
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style>
.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #040061;
  height: 45px;
  padding-inline: 1.5rem;
}

.site-header-left {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.site-logo {
  width: 40px;
}

.header-title {
  margin-left: 10px;
  font-weight: 500;
  color: white;
  font-size: 14px;
}

.site-header-left:hover .header-title,
.site-header-left:focus-visible .header-title {
  text-decoration: underline;
  text-underline-offset: 5px;
}

.site-nav {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  color: #ffffff;
  font-size: 12px;
  text-decoration: none;
  position: relative;
  padding-bottom: 2px;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background-color: #ffffff;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 200ms ease-out;
}

.nav-link:hover::after,
.nav-link:focus-visible::after,
.nav-link--active::after {
  transform: scaleX(1);
}

@media (max-width: 630px) {
  .site-header {
    padding-inline: 1rem;
  }

  .header-title {
    font-size: 12px;
  }

  .site-nav {
    gap: 1rem;
  }

  .nav-link {
    font-size: 11px;
  }
}
</style>
