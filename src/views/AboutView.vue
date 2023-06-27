<template>
  <div class="container mt-4">
    <b-card no-body class="overflow-hidden">
      <b-row no-gutters>
        <b-col md="6" class="formatutube">
          <TestimonialComponent
            src="https://www.youtube.com/embed/C08bGqoehnE"
          />
        </b-col>
        <b-col md="6">
          <b-card-body>
            <h3>About us</h3>
            <hr class="formathr" />
            <div class="formatbody">
              <p>
                We are a compassionate team with a focus on building healthy
                communities, strengthening families, and creating opportunities
                for those in hardship! Our project is working towards breaking
                the cycle of poverty to those kids who can't afford education at
                all. The underprivileged community does not have access to
                quality education and our project targets the disadvantaged
                community. The project aims to solve this inequality in
                education by providing quality education to distressed kids
                .Their families will be benefited from this project too.
              </p>
              <p>
                We are a compassionate team with a focus on building healthy
                communities, strengthening families, and creating opportunities
                for those in hardship! Our project is working towards breaking
                the cycle of poverty to those kids who can't afford education at
                all. The underprivileged community does not have access to
                quality education and our project targets the disadvantaged
                community. The project aims to solve this inequality in
                education by providing quality education to distressed kids
                .Their families will be benefited from this project too.
              </p>
              <b-btn style="font-family: fantasy" @click="redirect()"
                >Join us <font-awesome-icon icon="fa-solid fa-arrow-right"
              /></b-btn>
            </div>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>
<script>
import TestimonialComponent from "@/components/TestimonialComponent.vue";
export default {
  data() {
    return {};
  },
  components: {
    TestimonialComponent,
  },
  methods: {
    redirect() {
      this.$router.push("/register?member=true");
    },
  },
};
</script>
<style scoped>
h3 {
  font-family: fantasy;
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
/* .formatutube {
  display: flex;
  justify-content: center;
  align-items: center;
} */
.formatbody {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
