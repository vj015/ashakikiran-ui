<template>
  <div class="container mt-4" style="border: 0.5px solid rgb(0 0 0 / 18%)">
    <h3>About us</h3>
    <hr class="formathr" />
    <div class="mt-1 mb-2">
      <b-card no-body class="overflow-hidden" style="border: none">
        <b-row no-gutters>
          <b-col md="4">
            <b-card-img
              :src="require('../assets/images/About.webp')"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
          </b-col>
          <b-col md="8">
            <b-card-body>
              <b-card-text>
                <h4>Who we are?</h4>
                <p>
                  We are a compassionate team with a focus on building healthy
                  communities, strengthening families, and creating
                  opportunities for those in hardship! Our project is working
                  towards breaking the cycle of poverty to those kids who can't
                  afford education at all. The underprivileged community does
                  not have access to quality education and our project targets
                  the disadvantaged community. The project aims to solve this
                  inequality in education by providing quality education to
                  distressed kids .Their families will be benefited from this
                  project too.
                </p>
                <div>
                  <b-btn
                    class="explore"
                    style="font-family: fantasy"
                    @click="redirect()"
                    >Explore More
                    <font-awesome-icon icon="fa-solid fa-arrow-right"
                  /></b-btn>
                </div>
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    redirect() {
      this.$router.push("/about");
    },
  },
};
</script>
<style scoped>
h3 {
  font-family: fantasy;
  font-size: xx-large;
}
h4 {
  font-family: math;
}
p {
  font-family: cursive;
}
.formathr {
  height: 4px;
  width: 20%;
  border-width: 0;
  background-color: red;
}
.explore {
  background-color: #ff0003;
}
</style>
