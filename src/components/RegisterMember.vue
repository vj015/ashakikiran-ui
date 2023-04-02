<template>
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
                <b-form-group>
                  <b-form-input
                    type="number"
                    placeholder="Enter your contact number"
                    v-model="form.cnumber"
                    @blur="verifyusername()"
                  ></b-form-input>
                  <b-alert show variant="danger" v-if="this.showwarning"
                    ><font-awesome-icon
                      icon="fa-solid fa-circle-xmark"
                      style="color: rgb(132 32 41)"
                    />Entered Contact number is already registered. <br />Click
                    here to
                    <RouterLink to="/login">Login</RouterLink>
                  </b-alert>
                  <b-alert show variant="success" v-if="this.verifiedusername"
                    >Verified
                    <font-awesome-icon
                      icon="fa-solid fa-circle-check"
                      style="color: rgb(15 81 50)"
                  /></b-alert>
                </b-form-group>
              </div>
              <div class="m-4">
                <b-form-input
                  type="text"
                  placeholder="Enter your name"
                  v-model="form.name"
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
                  @blur="setdob()"
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
                  placeholder="Enter your address"
                  v-model="form.address"
                ></b-form-input>
              </div>
              <div class="m-4">
                <b-form-input
                  type="text"
                  placeholder="Enter your city"
                  v-model="form.city"
                ></b-form-input>
              </div>
              <div class="m-4">
                <b-form-input
                  type="password"
                  placeholder="Enter your password"
                  v-model="pass"
                  @blur="passcheck()"
                ></b-form-input>
              </div>
              <div class="m-4">
                <b-form-input
                  type="password"
                  placeholder="Confirm your password"
                  v-model="cpass"
                  @blur="passcheck()"
                ></b-form-input>
                <b-alert show variant="danger" v-if="this.showpassmismatch"
                  ><font-awesome-icon
                    icon="fa-solid fa-circle-xmark"
                    style="color: rgb(132 32 41)"
                  />
                  Password Mismatch. Confirm password correctly.</b-alert
                >
                <b-alert show variant="success" v-if="this.showpasssuccess"
                  >Password Verified
                  <font-awesome-icon
                    icon="fa-solid fa-circle-check"
                    style="color: rgb(15 81 50)"
                /></b-alert>
              </div>
              <div class="m-4">
                <b-form-checkbox
                  id="checkbox-1"
                  name="checkbox-1"
                  @change="togglebtn()"
                >
                  I agree to support the NGO and be its member
                </b-form-checkbox>
              </div>
              <div
                class="m-4 d-flex flex-column justify-content-center align-items-center"
              >
                <b-button
                  :disabled="verifypass || !verifiedusername || !tnc"
                  variant="dark"
                  @click="register()"
                  >Register</b-button
                >
              </div>
            </div>
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
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
        cnumber: "",
        wnumber: "",
        dob: "241060",
        gender: null,
        city: "",
        address: "",
        password: "",
      },
      max: maxDate,
      tnc: false,
      verifiedusername: false,
      verifypass: true,
      showpasssuccess: false,
      demodob: null,
      showwarning: false,
      pass: "",
      cpass: "",
      showpassmismatch: false,
      options: [
        { value: null, text: "Select Gender", disabled: true },
        { value: "Male", text: "Male" },
        { value: "Female", text: "Female" },
        { value: "Other", text: "Others" },
      ],
    };
  },
  methods: {
    register() {
      console.log("User Registration method");
      AuthenticationServices.registeruser(JSON.stringify(this.form))
        .then((res) => {
          if (res.status === 201) {
            // sessionStorage.setItem("frJWT", res.data.token);
            // this.form.username = "";
            // this.form.password = "";
            console.log("Success");
            swal({
              title: "Successfully Registered!",
              icon: "success",
            }).then(() => {
              router.push("/");
            });
          }
        })
        .catch((err) => {
          console.log(err);
          swal({
            title: "Failed to Register.Try after some time!",
            icon: "error",
          }).then(() => {
            router.push("/");
          });
        });
    },
    togglebtn() {
      this.tnc = !this.tnc;
    },
    verifyusername() {
      console.log("Username verify karo");
      if (this.form.cnumber.length > 0) {
        AuthenticationServices.verifyuser(this.form.cnumber)
          .then((res) => {
            console.log(res);
            if (res.status === 200) {
              this.verifiedusername = false;
              this.showwarning = true;
            } else {
              this.verifiedusername = true;
              this.showwarning = false;
            }
          })
          .catch((err) => {
            console.log(err);
            this.verifiedusername = true;
            this.showwarning = false;
            console.log(err);
          });
      } else {
        this.verifiedusername = false;
        this.showwarning = false;
      }
    },
    passcheck() {
      if (this.cpass.length > 0) {
        if (this.pass == this.cpass) {
          this.verifypass = false;
          this.showpassmismatch = false;
          this.showpasssuccess = true;
          this.form.password = this.pass;
        } else {
          this.verifypass = true;
          this.showpassmismatch = true;
          this.showpasssuccess = false;
        }
      } else {
        this.verifypass = true;
        this.showpassmismatch = false;
        this.showpasssuccess = false;
      }
    },
    setdob() {
      console.log(this.demodob);
      const str =
        this.demodob.substring(8) +
        this.demodob.substring(5, 7) +
        this.demodob.substring(2, 4);
      console.log(str);
      this.form.dob = str;
    },
  },
};
</script>
<style scoped>
a {
  color: #842029;
}
.formatimg {
  display: flex;
}
.alert {
  padding: 0px;
  padding-left: 10px;
  margin-bottom: 0px;
  border-radius: 0px;
  margin-top: 2px;
  font-family: fantasy;
}
</style>
