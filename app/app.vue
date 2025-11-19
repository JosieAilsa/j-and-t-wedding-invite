<template>
  <v-app class="root">
    <v-container
      v-if="!isAuthenticated"
      fluid
      class="fill-height pa-2"
      :style="{
        backgroundImage: `linear-gradient(to top, transparent 0%, rgba(232, 223, 206, 0.4) 25%, rgba(232, 223, 206, 0.9) 45%, rgba(232, 223, 206, 1) 100%), url(${mobile ? bgMobile : bgDesktop})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }"
    >
      <v-row class="fill-height pa-2" align="start" justify="center">
        <v-fade-transition>
          <password-card @success="handleSuccess"></password-card>
        </v-fade-transition>
      </v-row>
    </v-container>

    <v-parallax
      v-if="isAuthenticated"
      class="fill-height"
      src="./assets/main-bg-desktop.png"
    >
      <v-sheet color="transparent">
        <v-navigation-drawer
          v-model="drawer"
          color="surface"
          class="hidden-md-and-up"
          :location="mobile ? 'right' : undefined"
          temporary
        >
          <v-row class="mt-2 mb-1">
            <v-spacer></v-spacer>
            <v-col class="d-flex justify-end align-start">
              <v-icon icon="mdi-close mr-4" @click="drawer = !drawer" />
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-list>
            <v-list-item
              v-for="(item, index) in appMenuItems"
              :key="index"
              :value="item.title"
            >
              <v-list-item-title>
                <v-btn class="no-underline w-100" :to="item.link">{{
                  item.title
                }}</v-btn>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
        <NavBar
          :app-menu-items="appMenuItems"
          @drawer-is-open-closed="drawer = !drawer"
        />
        <v-main class="fill-height">
          <NuxtPage />
          <v-footer v-if="isAuthenticated">
            <v-col justify="center" align="center">
              <p>Designed by Tom.</p>
              <p>Built by Jose.</p>
              <v-icon icon="mdi-heart" />
            </v-col>
          </v-footer>
        </v-main>
      </v-sheet>
    </v-parallax>
  </v-app>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify";
import bgDesktop from "./assets/pword-bg.png";
import bgMobile from "./assets/pword-bg-mobile.png";
const { mobile } = useDisplay();
const drawer = ref(false);

// Check for existing auth cookie
const authCookie = useCookie("wedding-auth", {
  maxAge: 60 * 60 * 24, // 1 day
  sameSite: "lax",
});

const isAuthenticated = ref(authCookie.value === "authenticated");

const handleSuccess = () => {
  isAuthenticated.value = true;
};

const appMenuItems = [
  { title: "Details", link: "details" },
  { title: "Order of the day", link: "day" },
  { title: "FAQ", link: "faq" },
  { title: "RSVP", link: "rsvp" },
];
</script>

<style lang="scss" scoped>
.root {
  --header-font: "Afacad" !important;
  --body-font: "Cormorant Garamond" !important;
  font-family: var(--header-font);
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--header-font) !important;
  }
}
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
