<template>
  <div>
    <v-toolbar dark prominent>
      <img
        class="ml-3"
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        height="40"
      />
      <v-toolbar-title> RuneScape Search </v-toolbar-title>

      <v-toolbar-items>
        <v-btn variant="tonal" :to="{ name: 'home' }">Home</v-btn>
        <v-btn variant="tonal" :to="{ name: 'about' }">About</v-btn>
        <v-btn variant="tonal" :to="{ name: 'news' }">News</v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>
    </v-toolbar>
  </div>
</template>

<script></script>

<style scoped>
.logo img {
  height: 50px;
}
</style>
