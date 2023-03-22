<template>
  <div class="container mt-4">
    <div v-show="hideornot()">
      <div class="mt-2 mb-1">
        <b-card no-body class="text-center stl">
          <h2>Upcoming Events</h2>
          <b-btn class="stlbtn" @click="showlist()" v-show="!showevents()"
            >Show <font-awesome-icon icon="fa-solid fa-arrow-down"
          /></b-btn>
          <b-btn class="stlbtn" @click="showlist()" v-show="showevents()"
            >Hide <font-awesome-icon icon="fa-solid fa-arrow-up"
          /></b-btn>
        </b-card>
      </div>
      <div>
        <b-list-group
          v-for="event in events"
          :key="event.id"
          class="text-center"
          v-show="showevents()"
        >
          <b-list-group-item
            ><strong>{{ event.title }}</strong> in
            <strong>{{ event.venue }}</strong> @
            <strong>{{ event.date }}</strong>
          </b-list-group-item>
        </b-list-group>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: false,
      events: [
        {
          id: 1,
          title: "Fundraiser for children",
          date: "12/02/2023",
          venue: "Kanpur",
        },
        {
          id: 2,
          title: "Donation for women",
          date: "12/02/2023",
          venue: "Lucknow",
        },
        {
          id: 3,
          title: "Fundraiser for men",
          date: "12/02/2023",
          venue: "Mumbai",
        },
        {
          id: 4,
          title: "Fundraiser for children",
          date: "12/02/2023",
          venue: "Singapore",
        },
      ],
      fundraising: [
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
          likes: 10,
        },
      ],
    };
  },
  methods: {
    showevents() {
      return this.flag;
    },
    showlist() {
      this.flag = !this.flag;
    },
    hideornot() {
      return this.events.length > 0;
    },
  },
};
</script>
<style scoped>
.stl {
  display: flex;
  flex-direction: row;
  align-content: center;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.stlbtn {
  background-color: #dc3545;
  margin-left: 10px;
}
.stlbtn:hover {
  background-color: #dc3545;
  margin-left: 10px;
}
</style>
