<template>
  <div class="container mt-4 main">
    <b-row style="border: 0.5px solid rgb(0 0 0 / 18%)">
      <b-col class="md-6">
        <div class="maindiv">
          <h3>
            We love to help all the children that have problems in the world.
            After 15 years we have many goals achieved.
          </h3>
          <br />
          <hr class="formathr" />
          <p>
            "Every child deserves a chance to shine, to dream, and to grow. Let
            us join hands and ensure that no child is left behind, for they are
            the future we hold in our hearts."
          </p>
        </div>
      </b-col>
      <b-col class="md-6">
        <b-card-group>
          <b-card
            :img-src="require('../assets/images/ChildrenHelped.jpg')"
            img-alt="Image"
            img-top
            class="formatcard"
          >
            <b-card-text class="text-center">
              <h2>{{ "500+" }}</h2>
              <h6>{{ "Children Helped" }}</h6>
            </b-card-text>
          </b-card>

          <b-card
            :img-src="require('../assets/images/school1.jpg')"
            img-alt="Image"
            img-top
            class="formatcard"
          >
            <b-card-text class="text-center">
              <h2>{{ "50+" }}</h2>
              <h6>{{ "Charity Schools" }}</h6>
            </b-card-text>
          </b-card>

          <b-card
            :img-src="require('../assets/images/Volunteers.jpg')"
            img-alt="Image"
            img-top
            class="formatcard"
          >
            <b-card-text class="text-center">
              <h2>{{ "2000+" }}</h2>
              <h6>{{ "Volunteers Community" }}</h6>
            </b-card-text>
          </b-card>
        </b-card-group>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.formatcard h2 {
  font-family: fantasy;
}
.formatcard h6 {
  font-family: cursive;
}
.main {
  padding-top: 30px;
  padding-bottom: 20px;
}
.maindiv h3 {
  font-family: fantasy;
  font-size: xxx-large;
}
.maindiv p {
  font-family: cursive;
}
.formathr {
  height: 4px;
  width: 20%;
  border-width: 0;
  background-color: red;
}
.card {
  margin: 2px;
  border: none;
  margin-top: 50px;
}
.card img {
  max-height: 130px;
}
</style>
