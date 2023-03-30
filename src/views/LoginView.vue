<template>
  <div class="container mt-4">
    <b-card no-body class="overflow-hidden">
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
                    v-model="form.username"
                  ></b-form-input>
                </div>
                <div class="m-4">
                  <b-form-input
                    type="password"
                    placeholder="Enter your password"
                    v-model="form.password"
                  ></b-form-input>
                </div>
                <div
                  class="m-4 d-flex flex-column justify-content-center align-items-center"
                >
                  <b-button @click="login()" variant="dark">Login</b-button>
                </div>
              </div>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>
<script>
import loginuser from "@/api.js";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      notfound: false,
      servererror: false,
    };
  },
  computed: {},
  methods: {
    async login() {
      await loginuser(JSON.stringify(this.form))
        .then((res) => {
          if (res.status === 200) {
            sessionStorage.setItem("frJWT", res.data.token);
            this.form.username = "";
            this.form.password = "";
          }
        })
        .catch((err) => {
          if (err.response.status === 404) {
            this.notfound = true;
          } else {
            this.servererror = true;
          }
        });
    },
  },
};
</script>
