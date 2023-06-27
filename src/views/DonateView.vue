<template>
  <div class="container mt-4" style="border: 0.5px solid rgb(0 0 0 / 18%)">
    <h2>Donation</h2>
    <hr class="formathr" />
    <div class="mt-1 mb-2">
      <b-card no-body class="overflow-hidden" style="border: none">
        <b-row no-gutters>
          <b-col md="6">
            <h3>Bank Transfer</h3>
            <hr class="formathr" />
            <b-card-body>
              <b-card-text>
                <h4></h4>
                <p>Account Number : 37860423490</p>
                <p>IFSC : SBIN0002578</p>
                <p>Account Name : Asha ki Kiran</p>
                <p>Bank Name : State Bank of India</p>
                <p>Branch : Mall Road, Kanpur</p>
                <!-- <div>
                  <b-btn class="explore" style="font-family: fantasy"
                    >Thanks for helping!
                  </b-btn>
                </div> -->
              </b-card-text>
            </b-card-body>
          </b-col>
          <b-col md="6">
            <h3>UPI</h3>
            <hr class="formathr" />
            <b-card-img
              :src="require('../assets/images/upish.jpg')"
              alt="Image"
              class="formatupiimg"
            ></b-card-img>
            <b-card-body>
              <b-card-text>
                <h4></h4>
                <!-- <div>
                  <b-btn class="explore" style="font-family: fantasy"
                    >Thanks for helping!
                  </b-btn>
                </div> -->
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>
<style scoped>
h3,
h2 {
  font-family: fantasy;
  font-size: xx-large;
}
h4 {
  font-family: math;
}
p {
  font-family: cursive;
}
.formathr {
  height: 4px;
  width: 20%;
  border-width: 0;
  background-color: red;
}
.explore {
  background-color: #ff0003;
}
.formatupiimg {
  height: 70%;
  width: 70%;
}
</style>
