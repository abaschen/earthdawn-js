<script setup lang="ts">
import StatsBanner from './components/StatsBanner.vue';


</script>

<template>
  <v-app class="app">
    <StatsBanner class="banner">
      <!-- Display the 6 base stats, initiative, and defenses here -->
      <!-- You can use Vuetify's layout components to create a responsive grid -->
    </StatsBanner>
    <div class="main">
      <router-view></router-view>
      <!-- This will render the component associated with the current route -->
    </div>
  </v-app>
</template>

<style>
  .app {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .banner {
    /* Style the banner here */
    /* You can use Vuetify's typography and color classes to style the text */
  }

  .main {
    flex: 1;
    /* Style the rest of the page here */
    /* You can use Vuetify's layout components and card component to style the content */
  }
</style>