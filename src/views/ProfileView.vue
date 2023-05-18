<template>
  <div>
    <b-row>
      <b-col>
        <div>
          <ul>
            <li @click="func(1)">Users</li>
            <li @click="func(2)">Events</li>
            <li @click="func(3)">Fundraisings</li>
            <li @click="func(4)">Messages</li>
          </ul>
        </div>
      </b-col>
      <b-col cols="10">
        <div v-if="this.selected === `user`" class="format"><AllUsers /></div>
        <div v-if="this.selected === `event`" class="format"><AllEvent /></div>
        <div v-if="this.selected === `msg`" class="format"><AllMessages /></div>
        <div v-if="this.selected === `fund`" class="format">
          <AllFundraisings />
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import AllUsers from "@/components/AllUsers.vue";
import AllEvent from "@/components/AllEvent.vue";
import AllFundraisings from "@/components/AllFundraisings.vue";
import AllMessages from "@/components/AllMessages.vue";
export default {
  data: function () {
    return {
      selected: "user",
    };
  },
  components: {
    AllUsers,
    AllEvent,
    AllMessages,
    AllFundraisings,
  },
  methods: {
    func(id) {
      if (id === 1) {
        this.selected = "user";
      } else if (id === 2) {
        this.selected = "event";
      } else if (id === 3) {
        this.selected = "fund";
      } else if (id === 4) {
        this.selected = "msg";
      }
    },
  },
};
</script>
<style scoped>
li {
  list-style-type: none;
}
ul li {
  font-family: fantasy;
  font-size: larger;
  color: red;
  margin-top: 30px;
  margin-bottom: 30px;
  cursor: pointer;
}
ul li:hover {
  background-color: yellow;
}
.format {
  margin-top: 30px;
}
</style>
