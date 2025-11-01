<template>
  <v-container class="h-screen">
    <v-row class="mt-4 mb-2">
      <v-col justify="center" align="center">
        <h1>FAQs</h1>
      </v-col>
    </v-row>
    <v-expansion-panels bg-color="transparent">
      <v-expansion-panel v-for="(faq, ix) in faqs" :key="ix">
        <v-expansion-panel-title>
          <h3>{{ faq.question }}</h3>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <p v-html="faq.answer"></p>
          <v-row v-if="faq.image">
            <v-img
              height="100"
              :width="faq.imageWidth || 120"
              class="text-center mt-4"
              :src="faq.image"
              :alt="faq.imageAlt || 'FAQ image'"
            />
          </v-row>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>
<script lang="ts" setup>
import beetleAndTed from "@/assets/beetle-and-ted.png";

interface FAQItem {
  question: string;
  answer: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
}
const faqs: FAQItem[] = [
  {
    question: "What should I wear?",
    answer: "Formal wedding occasion wear. We suggest bringing an extra pair of shoes or just going barefoot on the beach.",
  },
  {
    question: "Will anyone be going for a swim?",
    answer:
    "The wedding venue has it own private tidal pools. We suggest bringing a towel and swimwear in case you'd like a dip on the day!",
  },
  {
    question: "Does the venue have a cloakroom", 
    answer: "IDC we need to check???"
  },
  {
    question: "What about wedding gifts? ",
    answer: `Given we're asking all our guests to travel to rural North Devon (we know it's a pain in the arse),
    <strong> we aren't asking for any wedding gifts!</strong>
    If you would like, you can give us something toward honeymoon <a href="https://pay.collctiv.com/tom-and-josie-honeymoon-49819">here</a>.`,
  },
  {
    question: "Should I bring my kids?",
    answer:
      "We'd love for your children to join! The venue also provides a games room with a games console for older children to use during the day.",
    imageWidth: 120,
  },
  {
    question: "Can I bring my dog?",
    answer:
      "No. The venue only allows 2 dogs at the ceremony - these spots have already been filled (Beetle and Ted will be attending!)",
    image: beetleAndTed,
    imageAlt: "Beetle and Ted",
    imageWidth: 120,
  },
];
</script>

<style></style>
