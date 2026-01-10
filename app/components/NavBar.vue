<script setup>
const emit = defineEmits("drawerIsClosed");
defineProps({
  appMenuItems: {
    required: true,
    type: Array,
  },
});
</script>
<template>
  <v-app-bar class="nav">
    <v-app-bar-title>
      <NuxtLink to="/">
        <img src="/assets/T&J.svg" />
      </NuxtLink>
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn
        v-for="item in appMenuItems"
        :key="item.title"
        variant="flat"
        :to="item.link"
        flat
      >
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>
    <v-btn
      variant="flat"
      class="hidden-md-and-up"
      @click.stop="emit('drawerIsOpenClosed')"
    >
      <img src="/assets/wave.svg" />
    </v-btn>
  </v-app-bar>
</template>
<style lang="scss">
.nav {
  &__icon {
    color: #1e1e1e;
  }
}
</style>
