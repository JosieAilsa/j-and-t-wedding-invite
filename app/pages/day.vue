<template>
  <v-container fluid class="order pt-3">
    <v-row class="mt-4">
      <v-col justify="center" align="center">
        <h1>Order of the Day</h1>
        <h3 class="order__highlight-text pb-2">Sunday 9th August</h3>
        <p> May be subject to change </p>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="8"><v-divider> </v-divider></v-col>
    </v-row>
    <v-row justify="center">
      <v-col justify="center" align="center">
        <h3>Guests arrive</h3>
        <p class="order__highlight-text"><strong>12pm</strong></p>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="8"><v-divider> </v-divider></v-col>
    </v-row>
    <v-row justify="center">
      <v-col justify="center" align="center">
        <h3>Ceremony</h3>
        <p class="order__highlight-text"><strong>1pm</strong></p>
        <v-img
          style="transform: scaleX(-1)"
          :width="100"
          class="text-center"
          src="/assets/rings.png"
          alt="rings"
        />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="8"><v-divider> </v-divider></v-col>
    </v-row>
    <v-row justify="center pb-2 pt-2">
      <v-col justify="center" align="center">
        <h3>Photos, canapés & beach games</h3>
        <p class="order__highlight-text"><strong>2pm</strong></p>
        <p>
          Group photos on the terrace and beach while canapés and drinks are
          served.
        </p>
      </v-col>
    </v-row>
    <v-img
      :height="120"
      class="text-center"
      src="/assets/bridesmaids.png"
      alt="Wedding couple illustration"
    />
    <v-row justify="center">
      <v-col cols="8"><v-divider> </v-divider></v-col>
    </v-row>
    <v-row justify="center">
      <v-col justify="center" align="center">
        <h3>Wedding Breakfast</h3>
        <p class="order__highlight-text"><strong>4:30pm</strong></p>
        <p>A relaxed barbecue mezze, with plenty of vegan and veggie options.</p>
        <v-img
          :width="100"
          class="text-center pb-2 pt-3"
          src="/assets/wedding-breakfast.png"
          alt="Wedding couple illustration"
        />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="8"><v-divider> </v-divider></v-col>
    </v-row>
    <v-row justify="center">
      <v-col justify="center" align="center">
        <h3>Speeches</h3>
        <p class="order__highlight-text">
          <strong>6pm</strong>
        </p>
        <v-img
          :width="90"
          class="text-center pb-2 pt-3"
          src="/assets/groomsmen.png"
          alt="Wedding couple illustration"
        />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="8"><v-divider> </v-divider></v-col>
    </v-row>
    <v-row justify="center">
      <v-col justify="center" align="center">
        <h3>Evening Guests arrive</h3>
        <p class="order__highlight-text"><strong>7pm</strong></p>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="8"><v-divider> </v-divider></v-col>
    </v-row>
    <v-row justify="center">
      <v-col justify="center" align="center">
        <h3>DJ starts</h3>
        <p class="order__highlight-text"><strong>8pm</strong></p>
        <p>
          No first dance - it's just not our style!
        </p>
        <v-img
          :width="80"
          class="text-center pb-2 pt-3"
          src="/assets/discoball.png"
          alt="Wedding couple illustration"
        />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="8"><v-divider> </v-divider></v-col>
    </v-row>
    <v-row justify="center">
      <v-col justify="center" align="center">
        <h3>Evening food</h3>
        <p class="order__highlight-text"><strong>9pm</strong></p>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="8"><v-divider> </v-divider></v-col>
    </v-row>
    <v-row justify="center">
      <v-col justify="center" align="center">
        <h3>Last orders</h3>
        <p class="order__highlight-text"><strong>12:30pm</strong></p>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="8"><v-divider> </v-divider></v-col>
    </v-row>
    <v-row justify="center">
      <v-col justify="center" align="center">
        <h3>Carriages</h3>
        <p class="order__highlight-text"><strong>1am</strong></p>
        <v-img
          :width="100"
          class="text-center"
          src="/assets/bride-and-groom.png"
          alt="Wedding couple illustration"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts" setup></script>

<style lang="scss">
.order {
  p {
    font-family: var(--body-font);
  }
  &__highlight-text {
    font-family: var(--body-font);
    font-style: italic;
    font-weight: 900;
    color: #b97c60;
  }
}
</style>
