<template>
  <v-container fluid>
    <v-row justify="center" class="mb-2">
      <v-col cols="12" md="8" lg="6">
        <h1
          class="display-1 font-weight-bold brown--text text--darken-4 text-center mb-8"
        >
          The Details
        </h1>

        <section class="venue-section mb-8">
          <h2 class="headline font-weight-bold brown--text text--darken-3 mb-4">
            Where
          </h2>

          <p class="body-1 brown--text text--darken-2 mb-4">
            We're getting married at
            <NuxtLink external to="https://tunnelsbeaches.co.uk/weddings.html"
              >Tunnels Beaches
            </NuxtLink>
            a unique venue built into Ilfracombe's cliffs and accessed through
            hand-carved tunnels dating back to the 1820s. The venue has a
            private beach for all our guests to use during the day - as well as
            sea water bathing pools for swimming. Fingers crossed for sunshine!
          </p>
          <div class="d-flex flex-row">
            <v-icon icon="mdi-map-marker mr-1" @click="drawer = !drawer" />
            <address
              class="venue-address body-1 brown--text text--darken-2 font-weight-medium"
            >
              Tunnels Beaches, Bath Place, Ilfracombe,<br />
              Devon, EX34 8AN
            </address>
          </div>
        </section>

        <section class="date-section">
          <v-row align="center">
            <v-col cols="12" sm="4" class="text-center">
              <div class="couple-illustration mb-4">
                <v-img
                  :width="120"
                  class="text-center"
                  src="/assets/guests-1.svg"
                  alt="Wedding couple illustration"
                />
              </div>
            </v-col>

            <v-col cols="12" sm="8">
              <h2
                class="headline font-weight-bold brown--text text--darken-3 mb-4"
              >
                When
              </h2>

              <p class="body-1 brown--text text--darken-2">
                The big day is
                <time datetime="2026-08-09">Sunday 9th August 2026</time>. The
                ceremony kicks off at <time datetime="13:00">1:00pm</time>, so
                we'd love for guests to arrive about an hour beforehand to get
                settled and enjoy the view before we start.
              </p>
            </v-col>
          </v-row>
        </section>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-divider></v-divider>
      <v-col cols="12" md="8" lg="6">
        <h1
          class="display-1 font-weight-bold brown--text text--darken-4 text-center mb-8"
        >
          Travel & Stay
        </h1>

        <section class="getting-there mb-8">
          <h2 class="headline font-weight-bold brown--text text--darken-3 mb-4">
            Getting there
          </h2>

          <p class="body-1 brown--text text--darken-2">
            Tunnels Beaches is conveniently located right in the heart of
            Ilfracombe, and is very easy to find once you arrive in town. As the
            wedding is during peak tourist season, so we recommend allowing some
            extra travel time to ensure a relaxed journey if you're planning to
            visit on the day.
            <br />
            <br />
            For public transport, simply take a train to Barnstaple station,
            then catch the direct bus service from there to Ilfracombe
          </p>
        </section>

        <section class="staying-ilfracombe mb-8">
          <h2 class="headline font-weight-bold brown--text text--darken-3 mb-4">
            Staying in Ilfracombe
          </h2>

          <p class="body-1 brown--text text--darken-2 mb-4">
            There are lots of great places to stay within walking distance of
            the venue. A couple of the larger hotels nearby include
            <strong
              ><NuxtLink external href="https://www.ilfracombecarlton.co.uk/"
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

          <p class="body-1 brown--text text--darken-2 mb-4">
            Beyond that, Ilfracombe has a huge number of cosy B&Bs and plenty of
            holiday homes to suit different budgets.
          </p>

          <p class="body-1 brown--text text--darken-2">
            Because it's August and the town gets busy, we recommend booking
            your accommodation as soon as possible.
          </p>
        </section>

        <section class="staying-elsewhere">
          <h2 class="headline font-weight-bold brown--text text--darken-3 mb-4">
            Staying elsewhere
          </h2>

          <p class="body-1 brown--text text--darken-2 mb-4">
            If you'd like to make more of a trip out of your stay, Woolacombe
            and Saunton both offer stunning beaches and dramatic coastal
            scenery, with plenty of places to stay.
          </p>

          <p class="body-1 brown--text text--darken-2 mb-4">
            We especially recommend Croyde — a cute village with thatched
            cottages, a gorgeous beach, and a laid-back surfer vibe.
          </p>

          <p class="body-1 brown--text text--darken-2">
            All are only about a 20-30 minute drive from Tunnels Beaches.
          </p>
        </section>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup></script>

<style>
</style>
