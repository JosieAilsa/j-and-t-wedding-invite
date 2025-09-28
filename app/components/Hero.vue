<template>
  <v-container class="hero d-flex flex-column">
    <v-row>
      <v-col>
        <h1
          class="hero__headline text-body-1 w-100 d-flex justify-center align-center"
        >
          We're getting married!
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-divider></v-divider>
    </v-row>
    <v-row>
      <v-col class="d-flex align-center flex-column ga-4 w-100">
        <h2 class="text-h2 d-flex flex-column text-center hero__names">
          <v-row v-if="mobile">
            <v-col class="p-0">TOM</v-col>
            <v-col class="hero__and">&</v-col>
          </v-row>
          <v-row v-if="mobile">
            <v-col class="pt-0">JOSIE</v-col>
          </v-row>
          <v-row v-else>
            <v-col>TOM <span class="hero__and"> & </span> JOSIE</v-col>
          </v-row>
        </h2>
        <h3>Sunday, 9th August 2026</h3>
        <h4 class="d-flex flex-column hero__location">
          <span>Tunnels Beaches,</span>
          <span>Ilfracombe Devon</span>
        </h4>
        <v-img src="/assets/surfers.png" class="hero__img" />
        <v-btn variant="outlined"> RSVP NOW</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-divider></v-divider>
    </v-row>
    <v-row>
      <v-col>
        <div class="d-flex flex-column align-center justify-center text-center ga-2">
          <p>We can’t wait to celebrate with all of our favourite people!</p>
          <p>
            Join us as we say I do, eat, drink and celebrate with us on Devon’s
            coastline.
          </p>
          <p>
            <strong> Please RSVP by 1st April 2026</strong>
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import { useDisplay } from "vuetify";
const { mobile } = useDisplay();
</script>
<style lang="scss" scoped>
.hero {
  
  h3,
  h4 {
    font-family: (--body-font);
    font-weight: 400;
  }
  &__names {
    font-family: "Afacad";
    font-weight: 800 !important;
    letter-spacing: 0.2rem;
  }
  &__img {
    width: 125px;
    height: 125px;
  }
  &__location {
    font-family: var(--body-font);
    font-style: italic;
  }
  &__and,
  &__headline {
    font-family: "Cormorant Garamond" !important;
    text-align: center;
    font-style: italic;
  }
}
</style>
