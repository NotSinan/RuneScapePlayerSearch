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
      <p>{{ data }}</p>
    </v-container>
  </v-form>
</template>

<script>
import { fetchData } from "@/composables/fetchData";
import { computed } from "vue";
export default {
  setup() {
    const data = computed(() => {
      fetchData();
    });

    return {
      data,
    };
  },
};
</script>

<style></style>
