<template>
  <b-card no-body class="overflow-hidden">
    <b-card-text>
      <div>
        <div class="m-4">
          <b-form-input
            type="text"
            placeholder="Enter your name"
            v-model="form.name"
          ></b-form-input>
        </div>
        <div class="m-4">
          <b-form-input
            type="email"
            placeholder="Enter your email"
            v-model="form.email"
          ></b-form-input>
        </div>
        <div class="m-4">
          <b-form-input
            type="number"
            placeholder="Enter your contact number"
            v-model="form.cnumber"
          ></b-form-input>
        </div>
        <div class="m-4">
          <b-form-input
            type="number"
            placeholder="Enter your whatsapp number"
            v-model="form.wnumber"
          ></b-form-input>
        </div>
        <div class="m-4">
          <b-form-datepicker
            :max="max"
            locale="en"
            v-model="demodob"
            placeholder="Enter your date of birth"
            @change="setdob()"
          ></b-form-datepicker>
        </div>
        <div class="m-4">
          <b-form-select
            v-model="form.gender"
            :options="options"
          ></b-form-select>
        </div>
        <div class="m-4">
          <b-form-input
            type="text"
            v-model="form.address"
            placeholder="Enter your address"
          ></b-form-input>
        </div>
        <div class="m-4">
          <b-form-input
            type="text"
            v-model="form.city"
            placeholder="Enter your city"
          ></b-form-input>
        </div>
        <div class="m-4">
          <b-form-input
            type="number"
            v-model="form.pincode"
            placeholder="Enter your pincode"
          ></b-form-input>
        </div>
        <div class="m-4">
          <b-form-input
            type="text"
            v-model="form.education"
            placeholder="Enter your highest education as of now"
          ></b-form-input>
        </div>
        <div class="m-4">
          <b-form-input
            type="text"
            v-model="form.college"
            placeholder="Enter your college"
          ></b-form-input>
        </div>
        <div class="m-4">
          <b-form-textarea
            id="textarea"
            v-model="form.reason"
            placeholder="Enter your reason for applying"
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </div>
        <div class="m-4">
          <b-form-select
            v-model="form.expertise"
            :options="expertise"
          ></b-form-select>
        </div>
        <div class="m-4">
          <b-form-checkbox
            id="checkbox-1"
            name="checkbox-1"
            @change="checktick()"
          >
            All the information provided above is best of my known
          </b-form-checkbox>
        </div>
        <div
          class="m-4 d-flex flex-column justify-content-center align-items-center"
        >
          <b-button variant="danger" :disabled="!tnc" @click="registerintern()"
            >Apply</b-button
          >
        </div>
      </div>
    </b-card-text>
  </b-card>
</template>
<script>
import swal from "sweetalert";
import router from "@/router";
import AuthenticationServices from "../Services/AuthenticationServices";
export default {
  data() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    // 15th in two months
    const maxDate = new Date(today);
    return {
      form: {
        name: "",
        address: "",
        gender: null,
        city: "",
        pincode: "",
        state: "",
        reason: "",
        email: "",
        cnumber: "",
        wnumber: "",
        education: "",
        college: "",
        expertise: "",
        dob: "",
      },
      tnc: false,
      demodob: null,
      max: maxDate,
      options: [
        { value: null, text: "Select Gender", disabled: true },
        { value: "M", text: "Male" },
        { value: "F", text: "Female" },
        { value: "O", text: "Others" },
      ],
      expertise: [
        { value: null, text: "Area of expertise", disabled: true },
        { value: "Website", text: "Website" },
        { value: "App", text: "App" },
        { value: "Social Skills", text: "Social Skills" },
        { value: "Accountancy & Finance", text: "Accountancy & Finance" },
        { value: "Campaigning", text: "Campaigning" },
        { value: "Teacher", text: "Teacher" },
      ],
    };
  },
  methods: {
    setdob() {
      console.log("In set DOB");
      console.log(this.demodob);
      const str =
        this.demodob.substring(8) +
        this.demodob.substring(5, 7) +
        this.demodob.substring(2, 4);
      console.log(str);
      this.form.dob = str;
    },
    checktick() {
      this.tnc = !this.tnc;
    },
    registerintern() {
      console.log("Register Intern");
      console.log(this.form);
      AuthenticationServices.registerintern(JSON.stringify(this.form))
        .then((res) => {
          if (res.status === 201) {
            // sessionStorage.setItem("frJWT", res.data.token);
            // this.form.username = "";
            // this.form.password = "";
            console.log("Success");
            swal({
              title: "Successfully Applied for Internship!",
              icon: "success",
            }).then(() => {
              router.push("/");
            });
          }
        })
        .catch((err) => {
          console.log(err);
          swal({
            title: "Failed to Apply.Try after some time!",
            icon: "error",
          }).then(() => {
            router.push("/");
          });
        });
    },
  },
  mounted() {
    window.scrollTo(0, 0, "smooth");
  },
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
