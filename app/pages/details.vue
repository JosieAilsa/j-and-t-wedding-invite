<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8">
        <section>
          <h1 class="font-weight-bold text-center">The Details</h1>
          <h2 class="font-weight-bold mb-4">Where</h2>
          <p class="body-1 mb-4">
            We're getting married at
            <NuxtLink
              target="blank"
              external
              to="https://tunnelsbeaches.co.uk/weddings.html"
              >Tunnels Beaches,</NuxtLink
            >
            a unique venue built into Ilfracombe's cliffs and accessed through
            hand-carved tunnels dating back to the 1820s.
            <br />
            <br />The venue has a private beach for all our guests to use during
            the day - as well as sea water bathing pools for swimming. Fingers
            crossed for sunshine!
          </p>
          <div class="d-flex flex-row">
            <v-icon icon="mdi-map-marker" />
            <address class="venue-address body-1 font-weight-medium">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Tunnels+Beaches,+Bath+Place,+Ilfracombe,+Devon,+EX34+8AN"
                target="_blank"
                rel="noopener noreferrer"
                class="venue-address body-1 font-weight-medium"
              >
                Tunnels Beaches, Bath Place, Ilfracombe, Devon, EX34 8AN
              </a>
            </address>
          </div>
        </section>
        <v-row justify="center">
          <v-col cols="12" md="8" lg="6">
            <v-img src="/assets/postcard.png" class="hero__img" />
          </v-col>
        </v-row>
        <section>
          <v-row>
            <v-col>
              <h2 class="headline font-weight-bold mb-4">When</h2>
              <p class="body-1">
                The big day is
                <time datetime="2026-08-09"
                  ><strong>Sunday 9th August 2026</strong></time
                >. The ceremony kicks off at
                <time datetime="13:00"><strong>1:00pm</strong></time
                >, so we'd love for guests to arrive about half an hour
                beforehand to get settled and enjoy the view before we start.
                The bar will be open for a short period before the ceremony.
              </p>
            </v-col>
          </v-row>
        </section>
      </v-col>
    </v-row>
    <v-row  justify="center" class="mt-6 mb-6">
      <v-col  cols="12" sm="10" md="8">
        <v-divider thickness="1"></v-divider>
      </v-col>
    </v-row>
    <v-row  justify="center" >
      <v-col  cols="12" sm="10" md="8">
        <h2 class="font-weight-bold text-center">
          Travel
          <span class="and"> & </span>
          Stay
        </h2>
        <section class="getting-there mb-8">
          <h3 class="headline font-weight-bold mb-4">Getting there</h3>
          <v-row>
            <v-col>
              <p class="body-1">
                Tunnels Beaches is in the center of Ilfracombe. As the wedding
                is during peak tourist season, we recommend allowing some extra
                time to ensure a relaxed journey if you're planning to visit on
                the day.
              </p>
              <br />
              <p>
                For public transport, simply take a train to Barnstaple station,
                then catch the direct bus service from there to Ilfracombe.
              </p>
            </v-col>
          </v-row>
        </section>
        <section>
          <h3 class="headline font-weight-bold mb-4">Staying in Ilfracombe</h3>
          <v-row> 
            <v-col >
              <p class="body-1">
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
          <v-row class="mb-2">
            <v-col>
              <p class="body-1 mb-4">
                Beyond that, Ilfracombe has plenty of B&Bs and holiday homes to
                suit different budgets. Because it's August and the town gets
                busy, we recommend booking your accommodation soon.
              </p>
            </v-col>
          </v-row>
        </section>
        <section>
          <h3 class="headline font-weight-bold mb-4">Staying elsewhere</h3>
          <v-row class="pb-0">
            <v-col>
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
          </v-row>
        </section>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col  cols="12" sm="10" md="8">
        <v-divider class="mb-2 mt-2"></v-divider>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col  cols="12" sm="10" md="8">
        <section>
          <h2 class="font-weight-bold text-center mb-5">Wedding Gifts</h2>
          <p class="body-1 mb-4">
            Given we're asking all our guests to travel to North Devon (we know
            it's a pain in the arse),
            <strong>we aren't asking for any wedding gifts!</strong> If you
            would like, you can give us something toward honeymoon
            <a href="https://pay.collctiv.com/tom-and-josie-honeymoon-49819">
              here</a
            >.
          </p>
        </section>
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss">

</style>