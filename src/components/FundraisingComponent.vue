<template>
  <div class="mt-4">
    <div class="mt-2 mb-1">
      <b-card no-body class="text-center">
        <h3>Fundraisings: No one has ever become poor from giving</h3>
      </b-card>
    </div>
    <div>
      <b-card-group>
        <b-card v-for="item in this.items" :key="item.id">
          <b-card-img :src="item.src"></b-card-img>
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
              <div class="col-8">
                <b-btn lg variant="outline-danger">Donate</b-btn>
              </div>
              <div class="col-3">
                <font-awesome-icon
                  :icon="['fas', 'heart']"
                  shake
                  size="lg"
                  color="red"
                  class="m-2"
                />
                <font-awesome-icon
                  icon="fa-regular fa-heart"
                  size="lg"
                  color="red"
                  class="m-2"
                />

                <font-awesome-icon
                  :icon="['fas', 'share-from-square']"
                  beat
                  size="lg"
                  color="red"
                  class="m-2"
                />
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
          src: require("../assets/images/fund1.jpg"),
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consequuntur, veniam eveniet maxime consequatur facilis tempora Sunt deserunt aperiam iure doloribus maxime reiciendis, natus accusantium. Ab asperiores repudiandae, exercitationem voluptas repellendus fugiat nostrum? Soluta?",
          currentamount: 2782582,
          totalmount: 10000000,
          startDate: "kdkd",
          endDate: "13/03/2025",
          likes: 0,
        },
        {
          id: 2,
          title: "Save Special Needs & Abused Animals",
          src: require("../assets/images/fund3.jpg"),
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consequuntur, veniam eveniet maxime consequatur facilis tempora Sunt deserunt aperiam iure doloribus maxime reiciendis, natus accusantium. Ab asperiores repudiandae, exercitationem voluptas repellendus fugiat nostrum? Soluta?",
          currentamount: 744217,
          totalmount: 1000000,
          startDate: "kdkd",
          endDate: "13/03/2025",
          likes: 0,
        },
        {
          id: 3,
          title: "Enable access to positive Childhood experience",
          src: require("../assets/images/fund2.jpg"),
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consequuntur, veniam eveniet maxime consequatur facilis tempora Sunt deserunt aperiam iure doloribus maxime reiciendis, natus accusantium. Ab asperiores repudiandae, exercitationem voluptas repellendus fugiat nostrum? Soluta?",
          currentamount: 948057,
          totalmount: 1000000,
          startDate: "kdkd",
          endDate: "13/03/2025",
          likes: 0,
        },
        {
          id: 4,
          title: "Donate to oldage home of 20 poor oldage people in India",
          src: require("../assets/images/fund4.jpg"),
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consequuntur, veniam eveniet maxime consequatur facilis tempora Sunt deserunt aperiam iure doloribus maxime reiciendis, natus accusantium. Ab asperiores repudiandae, exercitationem voluptas repellendus fugiat nostrum? Soluta?",
          currentamount: 6188577,
          totalmount: 9000000,
          startDate: "kdkd",
          endDate: "13/03/2025",
          likes: 0,
        },
      ],
    };
  },
};
</script>
