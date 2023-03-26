<template>
  <div class="container mt-2">
    <div class="mt-2 mb-1">
      <h3>Make your day memorable with us!</h3>
      <hr class="formathr" />
    </div>
    <div class="mt-2">
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
              <b-btn style="font-family: fantasy" variant="danger"
                >Book <font-awesome-icon icon="fa-solid fa-arrow-right"
              /></b-btn>
            </div>
          </b-card>
        </b-card-group>
      </b-row>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      clubs: [
        {
          id: 1,
          description: "Ocassions in orphanage",
          src: require("../assets/images/Celebrate1.webp"),
        },
        {
          id: 2,
          description: "Ocassions in old age home",
          src: require("../assets/images/Celebrate2.webp"),
        },
        {
          id: 3,
          description: "Organizing medical camps",
          src: require("../assets/images/MedicalCamps.webp"),
        },
        {
          id: 4,
          description: "Donating for needy",
          src: require("../assets/images/dtn.webp"),
        },
        {
          id: 5,
          description: "Food Distribution Camps",
          src: require("../assets/images/PDS.webp"),
        },
        {
          id: 6,
          description:
            "Fund a Asha ki Kiran Education Center for needy children",
          src: require("../assets/images/educationcamps.webp"),
        },
        {
          id: 7,
          description: "Adopt a child's education",
          src: require("../assets/images/adopt.webp"),
        },
        {
          id: 8,
          description: "Happiness Spreading Camps",
          src: require("../assets/images/Happiness.webp"),
        },
      ],
    };
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
