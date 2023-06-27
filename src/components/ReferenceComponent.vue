<template>
  <div class="container mt-4">
    <b-card-group style="border: 0.5px solid rgb(0 0 0 / 18%)">
      <b-card no-body class="overflow-hidden">
        <b-row no-gutters>
          <b-col md="2">
            <font-awesome-icon
              :icon="['fas', 'hand-holding-heart']"
              size="2xl"
              class="formatlocation m-2"
            />
          </b-col>
          <b-col md="10">
            <b-card-body title="Make Donation">
              <b-card-text>
                "Your donation is not just a gift; it is a beacon of hope for a
                child in need. Together, we can rewrite their story, empower
                their dreams, and nurture a brighter tomorrow. Give generously,
                and let the power of your kindness transform lives."
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
      <b-card no-body class="overflow-hidden">
        <b-row no-gutters>
          <b-col md="2">
            <font-awesome-icon
              :icon="['fas', 'handshake-angle']"
              size="2xl"
              class="formatlocation m-2"
            />
          </b-col>
          <b-col md="10">
            <b-card-body title="Become A Volunteer">
              <b-card-text>
                "Calling all compassionate hearts! Join us in making a
                difference in the lives of children in need. Become a volunteer
                with our child NGO, and together, we can be the guiding light in
                their journey towards a better future. Your time, passion, and
                dedication will create ripples of positive change that will last
                a lifetime."
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
      <b-card no-body class="overflow-hidden">
        <b-row no-gutters>
          <b-col md="2">
            <font-awesome-icon
              :icon="['fas', 'hands-holding-child']"
              size="2xl"
              class="formatlocation m-2"
            />
          </b-col>
          <b-col md="10">
            <b-card-body title="Sponsorship">
              <b-card-text>
                "Unlock the boundless potential within every child by becoming a
                sponsor of our child NGO. Your support can provide education,
                healthcare, and a nurturing environment, laying the foundation
                for a brighter tomorrow. Together, let's empower these young
                souls and witness the incredible impact we can make when we
                invest in their dreams."
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </b-card-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: false,
    };
  },
  methods: {},
};
</script>
<style scoped>
h4 {
  font-family: fantasy;
}
p {
  font-family: cursive;
}
.formatlocation {
  position: relative;
  top: 20px;
  left: 30px;
  color: #ff0003;
}
.card {
  border: none;
}
.card:hover {
  background-color: #ffeaaf;
}
</style>
