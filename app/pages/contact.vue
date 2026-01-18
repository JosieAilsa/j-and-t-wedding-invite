<template>
  <v-container class="h-screen">
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" class="text-center">
        <h1>Need help?</h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="6" md="4" lg="3">
        <v-img
          class="text-center"
          src="/assets/rubber-ring.png"
          alt="rubber ring"
        />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8">
        <p>
          If you have any questions about the big day, getting there, or if
          you’d prefer to RSVP by phone or email instead of online — our
          dedicated support team is standing by.
        </p>
        <v-divider class="mt-4 mb-3"></v-divider>
        <section>
          <section class="d-flex align-center">
            <v-icon icon="mdi-email mr-2" />
            <p>
              Email:
              <a href="mailto:tomjosie95@gmail.com">tomjosie95@gmail.com</a>
            </p>
          </section>
          <div class="d-flex align-center">
            <v-icon icon="mdi-phone mr-2" />
            <p>
              Tom (Head of Logistics):
              <a href="tel:07453 427708">07453 427708</a>
            </p>
          </div>
          <div class="d-flex align-center">
            <v-icon icon="mdi-phone mr-2" />
            <p>
              Josie (Director of Everything Else):
              <a href="tel:07703 464370">07703 464370</a>
            </p>
          </div>
        </section>
        <v-divider class="mt-4 mb-3"></v-divider>
        <p>No question is too small — please don’t hesitate to get in touch!</p>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts" setup></script>
<style lang="scss">
.root {
  h2 {
    font-family: var(--body-font) !important;
  }
}
</style>
