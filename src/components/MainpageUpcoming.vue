<template>
  <div class="container mt-4" style="border: 0.5px solid rgb(0 0 0 / 18%)">
    <b-row>
      <b-col class="md-6">
        <h2>Upcoming Events</h2>
        <hr class="formathr" />
        <b-card
          no-body
          class="overflow-hidden m-2"
          v-for="event in events"
          :key="event.id"
        >
          <b-card-body>
            <h4 class="mb-2">{{ event.title }}</h4>
            <span class="styl">
              <font-awesome-icon
                icon="fa-solid fa-location-pin"
                style="color: #ff0003"
              />
              {{ event.venue }}</span
            >
            <span style="margin-left: 30px" class="styl">
              <font-awesome-icon
                icon="fa-solid fa-calendar-days"
                style="color: #ff0003"
              />
              {{ event.date }}</span
            >
            <h6 class="mt-2">{{ event.msg }}</h6>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col class="md-6">
        <h2>Featured Fundraise</h2>
        <hr class="formathr" />
        <FundraisingComponent :renderinmain="this.flag" />
      </b-col>
    </b-row>
  </div>
</template>
<script>
import FundraisingComponent from "./FundraisingComponent.vue";
export default {
  data() {
    return {
      flag: true,
      events: [
        {
          id: 1,
          title: "Fundraiser for children",
          date: "Dec 12",
          venue: "Kanpur",
          msg: "This is a wider card with supporting text as a natural lead-into additional content. This content is a little bit longer.",
        },
        {
          id: 2,
          title: "Donation for women",
          date: "Feb 2",
          venue: "Lucknow",
          msg: "This is a wider card with supporting text as a natural lead-into additional content. This content is a little bit longer.",
        },
        {
          id: 3,
          title: "Fundraiser for men",
          date: "Feb 2",
          venue: "Mumbai",
          msg: "This is a wider card with supporting text as a natural lead-into additional content. This content is a little bit longer.",
        },
        {
          id: 4,
          title: "Fundraiser for children",
          date: "Mar 2",
          venue: "Singapore",
          msg: "This is a wider card with supporting text as a natural lead-into additional content. This content is a little bit longer.",
        },
      ],
    };
  },
  components: {
    FundraisingComponent,
  },
};
</script>
<style scoped>
h2 {
  font-family: fantasy;
}
h4 {
  font-family: math;
  text-decoration: underline;
}
h6 {
  font-family: cursive;
}
.styl {
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
}
.formathr {
  height: 4px;
  width: 20%;
  border-width: 0;
  background-color: red;
}
.card:hover {
  background-color: #ffeaaf;
}
</style>
