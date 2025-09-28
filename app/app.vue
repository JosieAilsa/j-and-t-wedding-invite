<template>
  <v-app class="root">
    <v-navigation-drawer
      v-model="drawer"
      class="hidden-md-and-up"
      :location="$vuetify.display.mobile ? 'right' : undefined"
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
    <v-main>
      <NuxtPage />
    </v-main>
  </v-app>
</template>
<script setup lang="ts">
const drawer: boolean = ref(false);

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
  p,
  h3 {
    font-family: var(--body-font);
  }
}
</style>
