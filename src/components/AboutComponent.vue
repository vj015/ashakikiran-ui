import AboutView from '@/views/AboutView.vue';

<template>
  <div class="container">
    <div class="mt-2 mb-1">
      <b-card no-body class="text-center">
        <h3>About us</h3>
      </b-card>
    </div>
    <div class="mt-1 mb-2">
      <b-card no-body class="overflow-hidden">
        <b-row no-gutters>
          <b-col md="4">
            <b-card-img
              :src="require('../assets/images/About.jpg')"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
          </b-col>
          <b-col md="8">
            <b-card-body title="Who we are?">
              <b-card-text>
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
                  <b-btn class="explore">Explore More!</b-btn>
                </div>
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>
<style scoped>
.explore {
  background-color: #ff0003;
}
</style>
