<template>
  <section class="how-built">
    <div class="how-built__lock-width">
      <h1 class="how-built__title">How I Built It</h1>

      <p class="how-built__intro">
        This app is a small frontend development resource library built with
        <span class="how-built__highlight">Vue 3</span> and
        <span class="how-built__highlight">Vite</span>. It focuses on fast
        filtering, pagination, and a clean list / card view of useful sites for frontend developers.
      </p>

      <a
        class="how-built__button"
        href="https://github.com/aD3nnis/Frontend-Dev-Resource-Library"
        target="_blank"
        rel="noopener noreferrer"
      >
        View the code on GitHub
      </a>

      <h2 class="how-built__heading">Architecture</h2>
      <ul class="how-built__list">
        <li>
          <strong>Vue 3 + script setup</strong> – Components like
          <code>SiteContainer</code> and the various filter / list components are
          written using the modern <code>&lt;script setup&gt;</code> syntax for a
          concise setup function.
        </li>
        <li>
          <strong>Vite build system</strong> – Vite handles dev server,
          hot-module reloading, and production builds. It ships native ES
          modules during development for fast feedback, then bundles and
          optimizes the app for production.
        </li>
        <li>
          <strong>Single-page app routing</strong> –
          <code>vue-router</code> powers the navigation between the main
          “Library” view and this “How I Built It” page, so navigation is instant without full page reloads.
        </li>
        <li>
          <strong>Centralized store</strong> – The logic for loading sites,
          tracking filters, search text, and view mode lives in the
          <code>store</code> module, which the UI reads from and updates.
        </li>
        <li>
          <strong>JSON-driven data</strong> – The list of frontend resources is
          loaded from JSON via a small helper in the store layer, which makes it
          easy to extend or swap out the data source later.
        </li>
        <li>
          <strong>Tooling & quality</strong> – ESLint and Prettier are wired in
          through NPM scripts to keep the code style consistent and to catch
          common issues automatically while developing.
        </li>
      </ul>

      <h2 class="how-built__heading">Styling</h2>
      <ul class="how-built__list">
        <li>
          <strong>Global styles</strong> – Base typography, link styles, and
          input treatments live in <code>global.css</code> so they are shared
          across the library and this page.
        </li>
        <li>
          <strong>Normalize.css</strong> – The app imports
          <code>normalize.css</code> to keep browser defaults consistent and to
          reduce cross‑browser quirks.
        </li>
        <li>
          <strong>Layout system</strong> – The main library view uses CSS Grid
          and Flexbox (for the header, filter toolbar, and pagination area) to
          keep the layout responsive down to small screens.
        </li>
        <li>
          <strong>Color + branding</strong> – The dark blue site header and
          minimalist cards are designed to keep the focus on the resource links,
          while still feeling like a cohesive product.
        </li>
      </ul>

      <h2 class="how-built__heading">Pagination & search</h2>
      <ul class="how-built__list">
        <li>
          <strong>vue-awesome-paginate</strong> – Pagination controls are
          powered by <code>vue-awesome-paginate</code>, which keeps the
          navigation between pages of results lightweight and accessible.
        </li>
        <li>
          <strong>Client-side filtering</strong> – Search, filters, and view
          mode all run on the client, so the UI updates immediately as you type
          or toggle options.
        </li>
      </ul>

      <h2 class="how-built__heading">Why this structure?</h2>
      <p class="how-built__body">
        The goal was to make a focused, fast resource browser that feels like a
        real production UI but stays small enough to understand quickly. Using
        Vue 3 with a dedicated store, reusable dropdown and list components, and
        a bit of routing keeps the codebase organized while still being easy to extend.
      </p>
    </div>
  </section>
</template>

<style>
.how-built {
  background-color: white;
  display: flex;
  justify-content: center;
  min-height: 100vh;
}

.how-built__lock-width {
  min-width: 75vw;
  max-width: 75vw;
  padding: 3rem;
}

.how-built__title {
  font-size: 24px;
  margin-bottom: 1.5rem;
  color: #222222;
}

.how-built__intro {
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #333333;
}

.how-built__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.55rem 1.1rem;
  margin-bottom: 2.5rem;
  border-radius: 999px;
  border: 1px solid #040061;
  background-color: #040061;
  color: #ffffff;
  font-size: 12px;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 160ms ease-out, color 160ms ease-out,
    transform 120ms ease-out, box-shadow 120ms ease-out;
}

.how-built__button::after {
  /* override global link underline animation */
  opacity: 0 !important;
}

.how-built__button:hover,
.how-built__button:focus-visible {
  background-color: #ffffff;
  color: #040061;
  box-shadow: 0 0 0 2px #04006133;
  transform: translateY(-1px);
  text-decoration: none;
}

.how-built__highlight {
  font-weight: 600;
}

.how-built__heading {
  font-size: 18px;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  color: #222222;
}

.how-built__list {
  list-style: disc;
  padding-left: 1.5rem;
  font-size: 14px;
  line-height: 1.7;
  color: #333333;
}

.how-built__list li + li {
  margin-top: 0.5rem;
}

.how-built__body {
  font-size: 14px;
  line-height: 1.7;
  margin-top: 0.5rem;
  margin-bottom: 3rem;
  color: #333333;
}

@media (max-width: 630px) {
  .how-built__lock-width {
    max-width: 90vw;
    min-width: 90vw;
    padding: 2rem 1.5rem;
  }

  .how-built__title {
    font-size: 20px;
  }
}
</style>

