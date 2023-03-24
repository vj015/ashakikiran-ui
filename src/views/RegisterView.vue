<template>
  <div class="container mt-4">
    <RegisterMember v-if="this.user" />
    <RegisterIntern v-if="this.intern" />
  </div>
</template>
<script>
import RegisterMember from "@/components/RegisterMember.vue";
import RegisterIntern from "@/components/RegisterIntern.vue";
export default {
  data() {
    return {
      user: false,
      intern: false,
    };
  },
  components: {
    RegisterMember,
    RegisterIntern,
  },
  mounted() {
    this.user = this.$route.query.member ? this.$route.query.member : false;
    this.intern = this.$route.query.intern ? this.$route.query.intern : false;
  },
};
</script>
