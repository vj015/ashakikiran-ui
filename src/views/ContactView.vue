<template>
  <div class="container mt-4">
    <!-- <h3>Contact us</h3>
    <hr class="formathr" /> -->

    <b-row class="formatdisplay">
      <b-col cols="4">
        <h3>Contact us</h3>
        <hr class="formathr" />
        <b-card style="border: none">
          <div class="maindiv">
            <div>
              <font-awesome-icon
                icon="fa-solid fa-location-dot"
                color="#ff0003"
                size="xl"
              />
            </div>
            <div class="subdiv">
              <h4>Address</h4>
              <h5>76A,Block C,Saket Nagar,Kanpur-01</h5>
            </div>
          </div>
        </b-card>
        <b-card style="border: none">
          <div class="maindiv">
            <div>
              <font-awesome-icon
                icon="fa-solid fa-phone"
                color="#ff0003"
                size="xl"
              />
            </div>
            <div class="subdiv">
              <h4>Call us</h4>
              <h5>+919076526926</h5>
              <h5>+918601170114</h5>
            </div>
          </div>
        </b-card>
        <b-card style="border: none">
          <div class="maindiv">
            <div>
              <font-awesome-icon
                icon="fa-solid fa-envelope"
                color="#ff0003"
                size="xl"
              />
            </div>
            <div class="subdiv">
              <h4>Mail us</h4>
              <h5>contact@ashakikiran.in</h5>
            </div>
          </div>
        </b-card>
      </b-col>
      <b-col>
        <h3>
          Drop a message
          <font-awesome-icon icon="fa-solid fa-message" color="#ff0003" />
        </h3>
        <hr class="formathr" />
        <b-card style="border: none">
          <div>
            <b-form-input
              placeholder=" Full Name"
              class="mt-2"
              v-model="form.name"
            ></b-form-input>
            <b-input-group prepend="+91" class="mt-2 mr-sm-2 mb-sm-0">
              <b-form-input
                id="mobile"
                placeholder="Mobile Number"
                v-model="form.number"
              ></b-form-input>
            </b-input-group>
            <b-form-textarea
              id="textarea"
              placeholder="Message"
              rows="3"
              max-rows="6"
              class="mt-2 mb-2"
              v-model="form.msg"
            ></b-form-textarea>
            <b-button
              class="stylbtn"
              style="font-family: fantasy; border: none; color: black"
              @click="sendsms()"
              >Send</b-button
            >
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import swal from "sweetalert";
import router from "@/router";
import AuthenticationServices from "../Services/AuthenticationServices";
export default {
  data() {
    return {
      form: {
        name: "",
        msg: "",
        number: "",
      },
    };
  },
  methods: {
    sendsms() {
      console.log("Sending sms");
      AuthenticationServices.sendsms(JSON.stringify(this.form))
        .then((res) => {
          if (res.status === 200) {
            this.form.number = "";
            this.form.msg = "";
            this.form.name = "";
            console.log("Success");
            swal({
              title: "Message Sent successfully!",
              icon: "success",
            }).then(() => {
              router.push("/contactus");
            });
          }
        })
        .catch((err) => {
          console.log(err);
          this.form.number = "";
          this.form.msg = "";
          this.form.name = "";
          swal({
            title: "Failed to Send Message.Try after some time!",
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
.maindiv {
  display: flex;
  flex-direction: row;
}
.subdiv {
  display: flex;
  flex-direction: column;
}
span {
  margin-right: 10px;
}
h3 {
  font-family: fantasy;
}
h4 {
  font-family: math;
  text-decoration: underline;
}
h5 {
  font-family: cursive;
}
.formathr {
  height: 4px;
  width: 20%;
  border-width: 0;
  background-color: red;
}
@media screen and (max-width: 768px) {
  .formatdisplay {
    flex-direction: column;
  }
}
</style>
