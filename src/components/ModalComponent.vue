<template>
  <div class="modal-backdrop" @click="close">
    <div class="modal">
      <header class="modal-header" style="border-bottom: 2px solid black">
        <span class="modal__title">{{ title }}</span>
        <!-- <img
          class="btn-close"
          @click="close"
          src="@/assets/images/close.svg"
          alt=""
        /> -->
        <font-awesome-icon
          icon="fa-solid fa-circle-xmark"
          @click="close"
          class="btn-close"
          style="opacity: 10"
        />
      </header>
      <section class="modal-body">
        <h6 style="font-family: cursive; font-weight: bolder">
          Donate a minimum of INR {{ this.amount }}/- to organize this event
        </h6>
        <h4 class="text-center" style="font-family: fantasy">Or</h4>
        <h6 style="font-family: cursive; font-weight: bolder">
          You can also customize this event according to your requirements and
          for a wider audience as well, Feel free to reach us for support and
          coordination.
        </h6>
      </section>
      <footer class="modal-footer" style="border-top: 2px solid black">
        <!-- <slot name="footer" /> -->
        <b-btn
          style="font-family: fantasy; color: black; border: 2px solid black"
          >Cancel</b-btn
        >
        <b-btn
          style="font-family: fantasy; color: black; border: 2px solid black"
          href="/donate"
          >Pay</b-btn
        >
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalComponent",
  props: {
    title: {
      type: String,
      required: false,
    },
    content: {
      type: String,
      required: false,
    },
    amount: {
      type: String,
      required: false,
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.modal-backdrop {
  position: fixed;
  z-index: 999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.85 !important;
}
.modal {
  position: relative;
  padding: 30px 30px 40px 30px;
  width: 630px;
  max-height: 450px;
  z-index: 1000;
  color: black;
  font-family: cursive;
  font-weight: bolder;
  background: #ff0003;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
}
.modal__title {
  font-weight: 600;
  font-size: 24px;
  display: block;
  color: black;
  font-family: fantasy;
  margin-bottom: 30px;
}
.modal-footer {
  margin-top: 30px;
  display: flex;
  align-items: center;
}
.btn-close {
  position: absolute;
  top: 17px;
  right: 17px;
  border: none;
  background: none !important;
}
</style>
