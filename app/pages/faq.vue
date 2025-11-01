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
    answer: `We’d love for everyone to dress up and keep it smart, but no need for black tie. Think summer celebration vibes — bright colours, fun patterns, and your favourite suit or dress. Comfortable shoes for dancing are always a good idea too!
    <br/>
    <br/>The ceremony will (hopefully!) take place outside overlooking the beach. But don’t worry — if the weather doesn’t play along, we’ve got a backup plan so you’ll stay dry and comfortable.
    <br/>
    <br/>And because we’re by the sea… feel free to bring your swimsuit (yes, seriously!). There may be a chance for a dip in the evening if you’re feeling adventurous.`
  },
  {
    question: "Will anyone be going for a swim?",
    answer:
    "The wedding venue has it own private tidal pools. We suggest bringing a towel and swimwear in case you'd like a dip on the day!",
  },
  {
    question: "What would you like as a wedding gift?",
    answer: `Given we're asking all our guests to travel to rural North Devon (we know it's a pain in the arse),
    <strong>we aren't asking for any wedding gifts!</strong>, If you would like, you can give us something toward honeymoon <a href="https://pay.collctiv.com/tom-and-josie-honeymoon-49819">here</a>.`
  },
  {
    question: "Is there parking at the venue?",
    answer: `If you’re staying in the Tunnels Beaches onsite accommodation, you’ll have a parking spot reserved for you (1 spot per room). 
    For everyone else, there’s plenty of free on-street parking on the roads surrounding the venue — just leave yourself a little extra time to find a space.`
  },
  {
    question: "Is it easy to get a taxi at the end of the evening?",
    answer: `Taxis in Ilfracombe can be tricky to grab late at night, so it’s best to pre-book your ride if you’ll need one after the party. Here are a few local companies: 
    <br/>
    <br/>• Sure Taxis Limited — 01271 865385
    <br/>• Mike’s Taxis Ilfracombe — 01271 268434
    <br/>• GO2 Taxi — 01271 545007. 
    <br/>
    <br/>If you can, we’d recommend booking a hotel or B&B within walking distance of the venue — that way you can stroll home at your own pace once the dancing’s done.`
  },
  {
    question: "Are children welcome at the wedding?",
    answer:
      "Yes — children are very welcome at the wedding! When you RSVP, please include their ages so we can make sure there are enough baby seats at the venue. Tunnels Beaches also has a dedicated children’s room designed to keep little ones entertained. It’s a quieter space away from the music and crowd, where parents can take children if they need a break from the party.",
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
