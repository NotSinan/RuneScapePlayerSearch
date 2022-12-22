<template>
  <v-form v-on:submit.prevent="fetchData">
    <v-container>
      <v-row>
        <v-col cols="6" md="4">
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
          <v-btn type="submit"> Submit </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  setup() {
    async function fetchData() {
      const endpoint = `https://apps.runescape.com/runemetrics/profile/profile?user=Xai Caldrin&activities=20`;
      const response = await fetch(endpoint);
      if (!response.ok) {
        // Handle error here
        console.error(`Error: ${response.status}`);
        return;
      }
      const data = await response.json();
      console.log(data.magic);
    }

    return {
      fetchData,
    };
  },
};
</script>

<style></style>
