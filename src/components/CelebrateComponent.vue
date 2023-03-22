<template>
  <div class="container mt-2">
    <div class="mt-2 mb-1">
      <b-card no-body class="text-center">
        <h2>Celebrate with us!</h2>
      </b-card>
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
              <b-btn variant="danger">Book</b-btn>
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
          src: require("../assets/images/Celebrate1.jpg"),
        },
        {
          id: 2,
          description: "Ocassions in old age home",
          src: require("../assets/images/Celebrate2.jpg"),
        },
        {
          id: 3,
          description: "Organizing medical camps",
          src: require("../assets/images/MedicalCamps.jpg"),
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
          src: require("../assets/images/adopt.jpg"),
        },
        {
          id: 8,
          description: "Happiness Spreading Camps",
          src: require("../assets/images/Happiness.jpg"),
        },
      ],
    };
  },
};
</script>
<style scoped>
img {
  /* border: 2px solid black; */
  height: 230px;
  max-height: 230px;
}
</style>
