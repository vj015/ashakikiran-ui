<template>
  <div class="container mt-4">
    <b-card no-body class="overflow-hidden" v-if="!this.newUser">
      <b-row no-gutters>
        <b-col md="4">
          <b-card-img
            :src="require('../assets/images/signup.webp')"
            alt="Image"
            class="rounded-0"
          ></b-card-img>
        </b-col>
        <b-col md="8">
          <b-card-body>
            <b-card-text>
              <div>
                <div class="m-4">
                  <b-form-input
                    type="number"
                    placeholder="Enter your mobile number"
                  ></b-form-input>
                </div>
                <div class="m-4">
                  <b-form-input
                    type="password"
                    placeholder="Enter your password"
                  ></b-form-input>
                </div>
                <div
                  class="m-4 d-flex flex-column justify-content-center align-items-center"
                >
                  <b-button variant="dark">Login</b-button>
                </div>
              </div>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>
