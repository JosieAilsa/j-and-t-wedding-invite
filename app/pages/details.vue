<template>
  <v-container fluid>
    <v-row justify="center" class="mb-2">
      <v-col cols="12" md="8" lg="6">
        <section class="venue-section mb-8">
          <h2 class="headline font-weight-bold mb-4">Where</h2>

          <p class="body-1 mb-4">
            We're getting married at
            <NuxtLink external to="https://tunnelsbeaches.co.uk/weddings.html"
              >Tunnels Beaches
            </NuxtLink>
            a unique venue built into Ilfracombe's cliffs and accessed through
            hand-carved tunnels dating back to the 1820s.
            <br />
            <br />The venue has a private beach for all our guests to use during
            the day - as well as sea water bathing pools for swimming. Fingers
            crossed for sunshine!
          </p>
          <div class="d-flex flex-row">
            <v-icon icon="mdi-map-marker mr-1" />
            <address class="venue-address body-1 font-weight-medium">
              Tunnels Beaches, Bath Place, Ilfracombe,<br />
              Devon, EX34 8AN
            </address>
          </div>
        </section>

        <section class="date-section">
          <v-row align="center">
            <v-col cols="4" md="3" lg="2" class="text-center">
              <v-img
                :width="120"
                class="text-center"
                src="/assets/guests-1.png"
                alt="Wedding couple illustration"
              />
            </v-col>
            <v-col>
              <h2 class="headline font-weight-bold mb-4">When</h2>

              <p class="body-1">
                The big day is
                <time datetime="2026-08-09"
                  ><strong>Sunday 9th August 2026</strong></time
                >. The ceremony kicks off at
                <time datetime="13:00"><strong>1:00pm</strong></time
                >, so we'd love for guests to arrive about an hour beforehand to
                get settled and enjoy the view before we start.
                <br />
                <br />
                The bar will be open before the ceremony starts.
              </p>
            </v-col>
          </v-row>
        </section>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-divider></v-divider>
      <v-col cols="12" md="8" lg="6">
        <h1 class="display-1 font-weight-bold text-center mb-8">
          Travel
          <span class="and"> & </span>
          Stay
        </h1>

        <section class="getting-there mb-8">
          <h2 class="headline font-weight-bold mb-4">Getting there</h2>
          <v-row>
            <v-col cols="7" md="8" :align-self="mobile ? 'center' : 'end'">
              <p class="body-1">
                Tunnels Beaches is in the center of Ilfracombe. As the wedding
                is during peak tourist season, we recommend allowing some extra
                time to ensure a relaxed journey if you're planning to visit on
                the day.
              </p>
              <br />
              <p v-if="mobile">
                For public transport, simply take a train to Barnstaple station,
                then catch the direct bus service from there to Ilfracombe
              </p>
            </v-col>
            <v-col>
              <v-img
                :width="120"
                class="text-center"
                src="/assets/longboarders.png"
                alt="Wedding couple illustration"
              />
            </v-col>
          </v-row>
          <v-row v-if="!mobile">
            <v-col cols="12">
              <p>
                For public transport, simply take a train to Barnstaple station,
                then catch the direct bus service from there to Ilfracombe
              </p>
            </v-col>
          </v-row>
        </section>

        <section class="staying-ilfracombe mb-8">
          <h2 class="headline font-weight-bold mb-4">Staying in Ilfracombe</h2>
          <v-row>
            <v-col cols="3">
              <v-img
                :width="150"
                class="text-center"
                src="/assets/dancing-guests.png"
                alt="Wedding couple illustration"
              />
            </v-col>
            <v-col align-self="end">
              <p class="body-1 mb-4">
                There are lots of great places to stay within walking distance
                of the venue. A couple of the larger hotels nearby include
                <strong
                  ><NuxtLink
                    external
                    href="https://www.ilfracombecarlton.co.uk/"
                    >The Carlton Hotel</NuxtLink
                  ></strong
                >
                and
                <strong
                  ><NuxtLink
                    external
                    href="https://the-osborne.devontophotels.com/en/"
                    >The Osborne Hotel</NuxtLink
                  ></strong
                >, both popular with wedding guests.
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <p class="body-1 mb-4">
                Beyond that, Ilfracombe plenty of B&Bs and holiday homes to suit
                different budgets. Because it's August and the town gets busy,
                we recommend booking your accommodation as soon as possible.
              </p>
            </v-col>
          </v-row>
        </section>

        <section class="staying-elsewhere">
          <h2 class="headline font-weight-bold mb-4">Staying elsewhere</h2>
          <v-row class="pb-0">
            <v-col cols="12" md="8" align-self="center">
              <p class="body-1 mb-4">
                If you'd like to make more of a trip out of your stay,
                Woolacombe and Saunton both offer stunning beaches and dramatic
                coastal scenery, with plenty of places to stay.
              </p>
              <p class="body-1 mb-4">
                Croyde, a quaint village with thatched cottages, a great surf
                beach and a few cosy pubs - is our personal favourite!
              </p>
              <p class="body-1">
                All are a 20-30 minute drive from Tunnels Beaches.
              </p>
            </v-col>
            <v-col>
              <v-img
                :width="150"
                class="text-center"
                src="/assets/dancing-guest.png"
                alt="Wedding couple illustration"
              />
            </v-col>
          </v-row>
        </section>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import { useDisplay } from "vuetify";

const { mobile } = useDisplay();
</script>

<style></style>
