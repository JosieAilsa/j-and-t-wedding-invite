<template>
  <v-card class="pa-5 password w-lg-33" flat tile color="transparent">
    <v-card-title>
      <p class="font-italic text-center password__welcome text-body-20">
        Welcome to the wedding of
      </p>
      <h1 class="text-center">
        TOM
        <span class="password__and"> & </span>
        JOSIE
      </h1>
      <v-divider class="border-opacity-50"></v-divider>
    </v-card-title>
    <v-card-subtitle>
      <h2 class="font-italic font-weight-light text-center password__date">
        August 9th 2026, Tunnels Beaches
      </h2>
    </v-card-subtitle>
    <v-card-text>
      <p class="text-center">We can't wait to celebrate with you!</p>
    </v-card-text>
    <v-card-actions>
      <v-text-field
        v-model="submittedPassword"
        label="Enter the password on your invite"
        variant="outlined"
        placeholder="Invite password"
        type="password"
        clearable
        color="surface"
        bg-color="surface"
        :error="hasError"
        :error-messages="errorMessage"
        @keyup.enter="onSubmit"
        @input="clearError"
      />
    </v-card-actions>
    <v-card-actions>
      <v-btn
        variant="flat"
        color="#2E3738"
        size="large"
        block
        :loading="isLoading"
        :disabled="!submittedPassword"
        @click="onSubmit"
      >
        Unlock full website
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { ref } from "vue";

const config = useRuntimeConfig();
const submittedPassword = ref("");
const successPassword = config.public.weddingPassword;
const hasError = ref(false);
const errorMessage = ref("");
const isLoading = ref(false);

const emit = defineEmits(["success"]);

// Create a cookie that expires in 1 day
const authCookie = useCookie("wedding-auth", {
  maxAge: 60 * 60 * 24, // 1 day in seconds (86400)
  sameSite: "lax",
});

const onSubmit = async () => {
  if (!submittedPassword.value) {
    hasError.value = true;
    errorMessage.value = "Please enter a password";
    return;
  }

  isLoading.value = true;

  // Simulate a small delay for better UX
  await new Promise((resolve) => setTimeout(resolve, 500));

  if (submittedPassword.value.toLowerCase() === successPassword.toLowerCase()) {
    hasError.value = false;
    errorMessage.value = "";

    // Set the auth cookie
    authCookie.value = "authenticated";

    // Emit success event to parent component
    emit("success");

    // Optional: Navigate to the main page
    // navigateTo('/wedding-details');
  } else {
    hasError.value = true;
    errorMessage.value =
      "Incorrect password. Please check your invite and try again.";
  }

  isLoading.value = false;
};

const clearError = () => {
  if (hasError.value) {
    hasError.value = false;
    errorMessage.value = "";
  }
};
</script>

<style lang="scss">
.password {
  margin-top: 10vh;
  &__and,
  &__date,
  &__welcome {
    font-family: var(--body-font);
    font-style: italic;
  }
}
</style>
