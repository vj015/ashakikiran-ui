<template>
  <!-- dob, contact, whatsapp, adress, city -->
  <b-card no-body class="overflow-hidden">
    <b-row no-gutters>
      <b-col md="7" class="formatimg">
        <b-card-img
          :src="require('../assets/images/login.webp')"
          alt="Image"
          class="rounded-0"
        ></b-card-img>
      </b-col>
      <b-col md="5">
        <b-card-body>
          <b-card-text>
            <div>
              <div class="m-4">
                <b-form-input
                  type="text"
                  placeholder="Enter your name"
                ></b-form-input>
              </div>
              <div class="m-4">
                <b-form-group
                  description="Make sure to use unused mobile number for registration"
                >
                  <b-form-input
                    type="number"
                    placeholder="Enter your contact number"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="m-4">
                <b-form-input
                  type="number"
                  placeholder="Enter your whatsapp number"
                ></b-form-input>
              </div>
              <div class="m-4">
                <b-form-group description="Enter date of birth">
                  <b-form-input type="date" id="date"></b-form-input
                ></b-form-group>
              </div>
              <div class="m-4">
                <b-form-select
                  v-model="selected"
                  :options="options"
                ></b-form-select>
              </div>
              <div class="m-4">
                <b-form-input
                  type="text"
                  placeholder="Enter your address"
                ></b-form-input>
              </div>
              <div class="m-4">
                <b-form-input
                  type="text"
                  placeholder="Enter your city"
                ></b-form-input>
              </div>
              <div class="m-4">
                <b-form-input
                  type="password"
                  placeholder="Enter your password"
                ></b-form-input>
              </div>
              <div class="m-4">
                <b-form-input
                  type="password"
                  placeholder="Confirm your password"
                ></b-form-input>
              </div>
              <div class="m-4">
                <b-form-checkbox
                  id="checkbox-1"
                  name="checkbox-1"
                  value="true"
                  unchecked-value="false"
                >
                  I agree to support the NGO and be its member
                </b-form-checkbox>
              </div>
              <div
                class="m-4 d-flex flex-column justify-content-center align-items-center"
              >
                <b-button variant="dark">Register</b-button>
              </div>
            </div>
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>
<script>
export default {
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Select Gender", disabled: true },
        { value: "M", text: "Male" },
        { value: "F", text: "Female" },
        { value: "O", text: "Others" },
      ],
    };
  },
  methods: {},
};
</script>
<style scoped>
.formatimg {
  display: flex;
}
</style>
