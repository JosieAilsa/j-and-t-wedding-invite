<template>
  <v-container fluid>
    <h1>RSVP</h1>
    <p>
      Kindly RSVP by 1/04/2026, as that's when we'll be closing our guest list.
    </p>
    <form @submit.prevent="submit">
      <v-text-field
        v-model="name.value.value"
        :counter="10"
        :error-messages="name.errorMessage.value"
        label="Name"
      ></v-text-field>
      <v-radio-group
        v-model="attendance.value.value"
        label="Can you attend?"
        :error-messages="attendance.errorMessage.value"
      >
        <v-radio label="Yes, I wouldn't miss it" value="yes"></v-radio>
        <v-radio label="No, I can't make it" value="no"></v-radio>
      </v-radio-group>

      <p class="pb-2">If yes, please provide your email:</p>
      <v-text-field
        v-model="email.value.value"
        :error-messages="email.errorMessage.value"
        label="E-mail"
      ></v-text-field>
      <v-radio-group
        v-model="dietaryRequirements.value.value"
        label="And do you have any dietary requirements?"
        :error-messages="dietaryRequirements.errorMessage.value"
      >
        <v-radio label="No" :value="false"></v-radio>
        <v-radio label="Yes" :value="true"></v-radio>
      </v-radio-group>
      <div v-if="dietaryRequirements.value.value">
        <p>If yes, please add any dietary requirements:</p>
        <v-checkbox
          v-for="item in dietaryItems"
          :key="item"
          v-model="checkbox.value.value"
          :label="item"
          :value="item"
          hide-details
          :error-messages="checkbox.errorMessage.value"
        ></v-checkbox>
        <v-checkbox
          v-model="checkbox.value.value"
          label="Other"
          value="Other"
          hide-details
        ></v-checkbox>
        <v-text-field
          v-model="otherDietary.value.value"
          :counter="50"
          label="Please specify other dietary requirements"
          :disabled="!checkbox.value.value?.includes('Other')"
        ></v-text-field>
      </div>
      <v-btn class="me-4" type="submit"> submit </v-btn>
      <v-btn @click="handleReset"> clear </v-btn>
    </form>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useField, useForm } from "vee-validate";

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name(value: string) {
      if (value?.length >= 2) return true;

      return "Name needs to be at least 2 characters.";
    },
    email(value: string) {
      if (attendance.value) {
        if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;
        return "Must be a valid e-mail.";
      } else {
        return true;
      }
    },
    attendance(item: string) {
      if (item) return true;
      return "You must select an attendance option";
    },
    dietaryRequirements(item: boolean) {
      if (item === undefined) return "You must select a dietary option";
      return true;
    },
    checkbox(value: string[]) {
      // Optional validation - remove if checkboxes are optional
      if (value && value.length > 0) return true;
      return true; // Set to true to make optional, or return error message to make required
    },
  },
});

const dietaryItems: Array<string> = [
  "Vegetarian",
  "Vegan",
  "Pescatarian",
  "Gluten-free",
  "Dairy-free",
  "Nut allergy",
  "Shellfish allergy",
];

const name = useField("name");
const email = useField("email");
const attendance = useField("attendance");
const dietaryRequirements = useField("dietaryRequirements");
const checkbox = useField<string[]>("checkbox", undefined, {
  initialValue: [], // Initialize as empty array for multi-select
});
const otherDietary = useField("otherDietary");

const submit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
});
</script>

<style></style>
