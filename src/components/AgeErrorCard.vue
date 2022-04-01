<template>
  <div class="text-center bg-gray-100 shadow rounded-lg p-20 w-5/12">
    <h3 class="text-3xl font-bold mb-4">Ooops</h3>
    <p>
      Your age is over our accepted limit We are sorry but we cannot insure you
      now
    </p>
    <button
      class="text-white bg-black px-4 py-2 mt-10 ml-3"
      @click.prevent="navigationToHomeHander"
    >
      Ok :(
    </button>
  </div>
</template>

<script>
export default {
  name: "AgeErrorPage",
  methods: {
    navigationToHomeHander() {
      this.$router.replace("/");
    },
  },
};
</script>

<style></style>
