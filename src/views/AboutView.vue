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
            <div class="formatbody">
              <h3>About us</h3>
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
              <b-btn
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
};
</script>
<style scoped>
.formatutube {
  margin-top: 10px;
  margin-bottom: 5px;
}
.formatbody {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}
</style>
