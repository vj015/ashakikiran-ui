<template>
  <div class="container">
    <b-card no-body class="overflow-hidden" style="border: none">
      <b-row no-gutters>
        <b-col md="4">
          <b-card-img
            :src="item.src"
            alt="Image"
            class="rounded-0"
          ></b-card-img>
        </b-col>
        <b-col md="8">
          <b-card-body>
            <b-card-text>
              <h4>{{ item.title }}</h4>
              <p>{{ item.message }}</p>
              <div>
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
              </div>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      item: {
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
</style>
