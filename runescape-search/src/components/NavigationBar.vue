<template>
  <div>
    <v-toolbar dark prominent>
      <v-toolbar-title
        ><router-link to="/">RuneScape Search</router-link>
      </v-toolbar-title>

      <v-toolbar-items>
        <v-btn variant="tonal" :to="{ name: 'home' }">Home</v-btn>
        <v-btn variant="tonal" :to="{ name: 'about' }">About</v-btn>
        <v-btn variant="tonal" :to="{ name: 'news' }">News</v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>
    </v-toolbar>
  </div>
</template>

<script>
export default {};
</script>
