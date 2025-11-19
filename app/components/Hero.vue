<template>
  <v-container class="hero d-flex flex-column h-screen">
    <v-row>
      <v-col>
        <h1
          class="hero__headline text-body-1 text-lg-h6 w-100 d-flex justify-center align-center"
        >
          We're getting married!
        </h1>
      </v-col>
    </v-row>
    <v-row class="hero__divider">
      <v-divider></v-divider>
    </v-row>
    <v-row>
      <v-col class="d-flex align-center flex-column ga-4 w-100">
        <h2
          class="text-h2 text-lg-h1 d-flex flex-column text-center hero__names"
        >
          <v-row v-if="mobile">
            <v-col class="pa-1">TOM</v-col>
            <v-col class="hero__and pa-1">&</v-col>
          </v-row>
          <v-row v-if="mobile">
            <v-col class="pt-0">JOSIE</v-col>
          </v-row>
          <v-row v-else>
            <v-col>TOM <span class="hero__and"> & </span> JOSIE</v-col>
          </v-row>
        </h2>
        <h3 class="hero__date">Sunday, 9th August 2026</h3>
        <h4 class="d-flex flex-column hero__location">
          <span>Tunnels Beaches,</span>
          <span>Ilfracombe Devon</span>
        </h4>
        <v-img src="/assets/surfers.png" class="hero__img" />
        <NuxtLink to="/rsvp" class="hero__rsvp">
          <v-btn color="grey-darken-3" size="large"> RSVP NOW </v-btn>
        </NuxtLink>
      </v-col>
    </v-row>
    <v-row class="pb-2 pt-2 hero__divider-two">
      <v-divider></v-divider>
    </v-row>
    <v-row class="hero__other">
      <v-col>
        <div
          class="d-flex flex-column align-center justify-center text-center ga-2"
        >
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
@keyframes heroFadeTransitionYIn {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  75% {
    opacity: 0.5;
    transform: translateY(0px);
  }
  100% {
    opacity: 1;
  }
}

@keyframes heroFadeTransitionXIn {
  0% {
    opacity: 0;
    transform: translateX(-30px) translateY(10px);
  }
  75% {
    opacity: 0.5;
    transform: translateX(0px);
  }
  100% {
    opacity: 1;
  }
}

@keyframes simpleFade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.hero {
  h3,
  h4 {
    font-family: (--body-font);
    font-weight: 400;
  }
  &__headline {
    animation: heroFadeTransitionYIn 0.5s ease forwards;
  }
  &__divider {
    animation: simpleFade 0.5s ease-in-out forwards;
  }
  &__names {
    font-family: "Afacad";
    font-weight: 800 !important;
    letter-spacing: 0.2rem;
    animation: heroFadeTransitionYIn 1s ease forwards;
  }
  &__img {
    width: 125px;
    height: 125px;
    opacity: 0;
    animation: heroFadeTransitionXIn 1s 0.75s ease-in-out forwards;
  }
  &__rsvp {
    opacity: 0;
    animation: simpleFade 1s 0.5s ease forwards;
  }
  &__date {
    opacity: 0;
    animation: simpleFade 1s 0.5s ease-in-out forwards;
  }
  &__location {
    font-family: var(--body-font);
    font-style: italic;
    opacity: 0;
    animation: simpleFade 1s 0.5s ease-in-out forwards;
  }
  &__and,
  &__headline {
    font-family: "Cormorant Garamond" !important;
    text-align: center;
    font-style: italic;
  }
  &__other,
  &__divider-two {
    opacity: 0;
    animation: simpleFade 1s 1s ease-in-out forwards;
  }
}
</style>
