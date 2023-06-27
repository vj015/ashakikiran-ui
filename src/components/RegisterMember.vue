<template>
  <b-card no-body class="overflow-hidden">
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
              />Entered Contact number is already registered.Use another number
              to register
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
            :disabled="!verifiedusername || !tnc"
            variant="danger"
            @click="register()"
            >Register</b-button
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
      const form1 = {
        username: this.form.cnumber,
        password: "123",
      };
      AuthenticationServices.registeruser(JSON.stringify(this.form))
        .then((res) => {
          if (res.status === 201) {
            console.log("Success");
            console.log(JSON.stringify(form1));
            AuthenticationServices.loginuser(JSON.stringify(form1))
              .then((res) => {
                if (res.status === 200) {
                  sessionStorage.setItem("frJWT", res.data.token);
                  AuthenticationServices.getuserdetails(res.data.token)
                    .then((res) => {
                      console.log(res);
                      sessionStorage.setItem(
                        "username",
                        "User_" + res.data.name
                      );
                      sessionStorage.setItem(
                        "authrole",
                        "FIRAuthDataResult" + res.data.authrole
                      );
                      sessionStorage.setItem("id", "UserIDIN" + res.data.id);
                      sessionStorage.setItem(
                        "userid",
                        "INNNNNNNNN" + res.data.loggedinNumber
                      );
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }
              })
              .catch((err) => {
                console.log(err);
              });
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
  mounted() {
    window.scrollTo(0, 0, "smooth");
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
