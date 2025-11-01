<template>
  <v-container fluid class="rsvp">
    <div class="form-wrapper">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSc-npJRoR6B5v1AkcYRK99y7-PpzKzzHzgufuX7Wf1LupIq8Q/viewform?embedded=true"
        width="640"
        height="1151"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        >Loading…</iframe
      >
    </div>
  </v-container>
</template>
<script lang="ts" setup></script>

<style>
.form-wrapper {
  width: 100%;
  max-width: 640px;
  margin: 2rem auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.form-wrapper iframe {
  width: 100%;
  height: 1200px;
  border: none;
}

@media (max-width: 768px) {
  .form-wrapper iframe {
    height: 1400px;
  }
}
</style>
