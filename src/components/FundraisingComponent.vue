<template>
  <div class="container">
    <div class="mt-2 mb-1" v-if="!this.renderinmain">
      <b-card no-body class="text-center">
        <h2>Our Causes</h2>
      </b-card>
    </div>
    <div>
      <b-card-group>
        <b-card v-for="item in this.items" :key="item.id">
          <b-card-img :src="item.src" class="formatcardimg"></b-card-img>
          <b-card-text>
            <div class="d-flex justify-content-center formatheading">
              <h4>{{ item.title }}</h4>
            </div>
            <p>{{ item.message }}</p>
            <b-row>
              <b-col>
                <b-button
                  block
                  variant="danger"
                  class="donatebtn"
                  style="font-family: fantasy"
                  @click="redirect()"
                  >Donate</b-button
                >
                <b-button
                  block
                  variant="danger"
                  style="font-family: fantasy"
                  @click="sharefundraise(item.id)"
                  >Share</b-button
                >
              </b-col>
            </b-row>
          </b-card-text>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>
<script>
export default {
  name: "FundraisingComponent",
  props: {
    renderinmain: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    if (this.renderinmain === true) {
      this.items = this.items.splice(0, 1);
      this.showfeatured = true;
    }
    window.scrollTo(0, 0, "smooth");
  },
  data() {
    return {
      showfeatured: false,
      items: [
        {
          id: 1,
          title: "Please Help Me In Saving My Little One's Life",
          src: require("../assets/images/fund1.webp"),
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consequuntur, veniam eveniet maxime consequatur facilis tempora Sunt deserunt aperiam iure doloribus maxime reiciendis, natus accusantium. Ab asperiores repudiandae, exercitationem voluptas repellendus fugiat nostrum? Soluta?",
          currentamount: 2782582,
          totalmount: 10000000,
          startDate: "kdkd",
          endDate: "13/03/2025",
          likes: 10,
        },
        {
          id: 2,
          title: "Save Special Needs & Abused Animals in stray animals",
          src: require("../assets/images/fund3.webp"),
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consequuntur, veniam eveniet maxime consequatur facilis tempora Sunt deserunt aperiam iure doloribus maxime reiciendis, natus accusantium. Ab asperiores repudiandae, exercitationem voluptas repellendus fugiat nostrum? Soluta?",
          currentamount: 744217,
          totalmount: 1000000,
          startDate: "kdkd",
          endDate: "13/03/2025",
          likes: 95,
        },
        {
          id: 3,
          title: "Enable access to positive Childhood experience",
          src: require("../assets/images/fund2.webp"),
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consequuntur, veniam eveniet maxime consequatur facilis tempora Sunt deserunt aperiam iure doloribus maxime reiciendis, natus accusantium. Ab asperiores repudiandae, exercitationem voluptas repellendus fugiat nostrum? Soluta?",
          currentamount: 948057,
          totalmount: 1000000,
          startDate: "kdkd",
          endDate: "13/03/2025",
          likes: 50,
        },
      ],
      isliked: [false, false, false, false],
    };
  },
  methods: {
    redirect() {
      this.$router.push("/donate");
    },
    async sharefundraise(id) {
      const urll = window.location.origin + "/fundraising/" + id;
      const shareData = {
        title: "Asha Ki Kiran",
        text: "Fundraisings: Help the needy!",
        url: urll,
      };
      await navigator.share(shareData);
    },
  },
};
</script>
<style scoped>
.donatebtn {
  margin-right: 5px;
}
.formatheading {
  margin-top: 10px;
  /* max-height: 70px; */
}
h4 {
  font-family: math;
}
h6 {
  font-family: fantasy;
}
p {
  font-family: cursive;
}
.abc {
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
  cursor: pointer;
}
.likealign {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 20px;
}
.formatcardimg {
  max-height: 300px;
}
@media screen and (max-width: 485px) {
  .abc {
    display: flex;
    cursor: pointer;
    justify-content: space-evenly;
    margin-top: 5px;
  }
}
</style>
