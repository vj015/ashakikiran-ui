<template>
  <!-- { "id":3, "name":"Rajesh", "address":"Karhal", "gender":"MAle",
  "city":"Lucknow", "pincode":"208001", "state":"UP", "reason":"reason1",
  "email":"hfhfh@ndjhjdjd.com", "cnumber":9076545269, "wnumber":99999999,
  "education":"MA", "college":"MMMUT", "expertise":"Dancing", "dob":"100588" } -->
  <b-card no-body class="overflow-hidden">
    <b-row no-gutters>
      <b-col md="7" class="formatimg">
        <b-card-img
          :src="require('../assets/images/demo.webp')"
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
                <b-form-input
                  type="email"
                  placeholder="Enter your email"
                ></b-form-input>
              </div>
              <div class="m-4">
                <b-form-input
                  type="number"
                  placeholder="Enter your contact number"
                ></b-form-input>
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
                  type="number"
                  placeholder="Enter your pincode"
                ></b-form-input>
              </div>
              <div class="m-4">
                <b-form-input
                  type="text"
                  placeholder="Enter your highest education as of now"
                ></b-form-input>
              </div>
              <div class="m-4">
                <b-form-input
                  type="text"
                  placeholder="Enter your college"
                ></b-form-input>
              </div>
              <div class="m-4">
                <b-form-textarea
                  id="textarea"
                  v-model="text"
                  placeholder="Enter your reason for applying"
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </div>
              <div class="m-4">
                <b-form-select
                  v-model="selected1"
                  :options="expertise"
                ></b-form-select>
              </div>
              <div class="m-4">
                <b-form-checkbox
                  id="checkbox-1"
                  name="checkbox-1"
                  value="true"
                  unchecked-value="false"
                >
                  All the information provided above is best of my known
                </b-form-checkbox>
              </div>
              <div
                class="m-4 d-flex flex-column justify-content-center align-items-center"
              >
                <b-button variant="dark">Apply</b-button>
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
      selected1: null,
      options: [
        { value: null, text: "Select Gender", disabled: true },
        { value: "M", text: "Male" },
        { value: "F", text: "Female" },
        { value: "O", text: "Others" },
      ],
      expertise: [
        { value: null, text: "Area of expertise", disabled: true },
        { value: "A", text: "Website" },
        { value: "B", text: "App" },
        { value: "C", text: "Social Skills" },
        { value: "D", text: "Accountancy & Finance" },
        { value: "E", text: "Campaigning" },
        { value: "F", text: "Teacher" },
      ],
    };
  },
  methods: {},
};
</script>
<style scoped>
.formatimg {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}
</style>
