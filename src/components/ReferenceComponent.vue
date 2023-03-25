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
              <b-card-text
                >Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
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
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
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
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
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
