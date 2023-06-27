<template>
  <div class="container mt-2">
    <div class="mt-2 mb-1 test">
      <h3>Make your day memorable with us!</h3>
      <hr class="formathr" />
    </div>
    <div class="mt-2">
      <b-alert show variant="warning" style="font-family: fantasy; color: black"
        >Now you can also order the events with the team and witness it through
        video conferencing as well!</b-alert
      >
      <b-row>
        <b-card-group class="col-md-3" v-for="club in clubs" :key="club.id">
          <b-card
            :title="club.description"
            :img-src="club.src"
            img-alt="Img"
            img-top
            class="m-2"
          >
            <div slot="footer">
              <b-btn
                style="font-family: fantasy"
                variant="danger"
                @click="callModal(club)"
                >Book <font-awesome-icon icon="fa-solid fa-arrow-right"
              /></b-btn>
            </div>
          </b-card>
        </b-card-group>
      </b-row>
    </div>
    <!-- <button @click="callModal">Show Modal</button> -->
    <ModalComponent
      v-show="getShowModal()"
      :title="this.modaltitle"
      :content="this.modalbody"
      :amount="this.modalamount"
      @close="close"
    >
      <!-- <template #footer>
        <b-btn
          style="font-family: fantasy; color: black; border: 2px solid black"
          >Cancel</b-btn
        >
        <b-btn
          style="font-family: fantasy; color: black; border: 2px solid black"
          >Pay</b-btn
        >
      </template> -->
    </ModalComponent>
  </div>
</template>
<script>
import ModalComponent from "./ModalComponent.vue";
export default {
  data: function () {
    return {
      isShowModal: false,
      modaltitle: "",
      modalbody: "",
      modalamount: "",
      clubs: [
        {
          id: 1,
          description: "Ocassions in orphanage",
          src: require("../assets/images/Celebrate1.webp"),
          body: "Donate INR 5000 to organize this event",
          amount: 5000,
        },
        {
          id: 2,
          description: "Ocassions in old age home",
          src: require("../assets/images/Celebrate2.webp"),
          body: "Please donate a minimum of 10000 INR for this celebration or the distribution can be customized as well on basis of your needs",
          amount: 10000,
        },
        {
          id: 3,
          description: "Organizing medical camps",
          src: require("../assets/images/MedicalCamps.webp"),
          body: "Please donate a minimum of 50000 INR for this celebration or the requirement can be customized as well on basis of your needs",
          amount: 50000,
        },
        {
          id: 4,
          description: "Donating for needy",
          src: require("../assets/images/dtn.webp"),
          body: "Please donate a minimum of 10000 INR for this celebration or the distribution can be customized as well on basis of your needs",
          amount: 10000,
        },
        {
          id: 5,
          description: "Food Distribution Camps",
          src: require("../assets/images/PDS.webp"),
          body: "Please donate a minimum of 7000 INR for this celebration or the distribution can be customized as well on basis of your needs",
          amount: 7000,
        },
        {
          id: 6,
          description:
            "Fund a Asha ki Kiran Education Center for needy children",
          src: require("../assets/images/educationcamps.webp"),
          body: "Please donate a minimum of 3000 INR for this help or the it can be customized as well on basis of your needs",
          amount: 3000,
        },
        {
          id: 7,
          description: "Adopt a child's education",
          src: require("../assets/images/adopt.webp"),
          body: "Please donate a minimum of 50000 INR for this request",
          amount: 50000,
        },
        {
          id: 8,
          description: "Happiness Spreading Camps",
          src: require("../assets/images/Happiness.webp"),
          body: "Please donate a minimum of 9000 INR for this celebration or the distribution can be customized as well on basis of your needs",
          amount: 9000,
        },
      ],
    };
  },
  components: {
    ModalComponent,
  },
  methods: {
    close() {
      this.isShowModal = false;
    },
    callModal(club) {
      console.log(club);
      this.modaltitle = club.description;
      this.modalbody = club.body;
      this.modalamount = club.amount;
      console.log(this.modalamount);
      console.log(this.modaltitle);
      this.isShowModal = true;
    },
    getShowModal() {
      return this.isShowModal;
    },
  },
  mounted() {
    window.scrollTo(0, 0, "smooth");
  },
};
</script>
<style scoped>
h3,
h4 {
  font-family: fantasy;
}
.formathr {
  height: 4px;
  width: 20%;
  border-width: 0;
  background-color: red;
}
img {
  /* border: 2px solid black; */
  height: 230px;
  max-height: 230px;
}
</style>
