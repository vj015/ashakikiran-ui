<template>
  <div class="container mt-4">
    <div class="mt-2 mb-1">
      <b-card no-body class="text-center">
        <h2>Our Causes</h2>
      </b-card>
    </div>
    <div>
      <b-card-group>
        <b-card v-for="item in this.items" :key="item.id">
          <b-card-img :src="item.src" class="formatcardimg"></b-card-img>
          <b-card-text>
            <div class="d-flex justify-content-center mt-2">
              <h4>{{ item.title }}</h4>
            </div>
            <b-progress
              :value="item.currentamount"
              :max="item.totalmount"
              variant="danger"
              animated="true"
              class="mt-3 mb-2"
            ></b-progress>
            <h6>
              Raised {{ item.currentamount }} of
              {{ item.totalmount }}
            </h6>
            <p>{{ item.message }}</p>
            <div class="row">
              <div class="col-6">
                <b-btn lg variant="outline-danger">Donate</b-btn>
              </div>
              <div class="col-6 abc">
                <div class="likealign">
                  <font-awesome-icon
                    icon="fa-regular fa-heart"
                    color="red"
                    size="lg"
                    @click="handleLike(item.id)"
                    v-show="!verifyliked(item.id)"
                  />
                  <font-awesome-icon
                    :icon="['fas', 'heart']"
                    size="lg"
                    color="red"
                    @click="handleunLike(item.id)"
                    v-show="verifyliked(item.id)"
                  />
                  <p>{{ item.likes }}</p>
                </div>
                <div class="sharealign">
                  <font-awesome-icon
                    :icon="['fas', 'share-from-square']"
                    color="red"
                    size="lg"
                  />
                </div>
              </div>
            </div>
          </b-card-text>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>
<script>
export default {
  name: "FundraisingComponent",
  data() {
    return {
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
          title: "Save Special Needs & Abused Animals",
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
    handleLike(id) {
      this.isliked[id - 1] = true;
      this.items[id - 1].likes += 1;
    },
    handleunLike(id) {
      this.isliked[id - 1] = false;
      if (this.items[id - 1].likes != 0) {
        this.items[id - 1].likes -= 1;
      }
    },
    verifyliked(id) {
      return this.isliked[id - 1];
    },
  },
};
</script>
<style scoped>
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
</style>
