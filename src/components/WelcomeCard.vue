<template>
  <div
    class="bg-gray-100 shadow rounded-lg p-20 flex justify-center flex-col items-center"
  >
    <h2 class="text-black text-2xl font-bold">Hello There !</h2>
    <p class="mt-4">
      Let's buy you some insurance. It is going to take only a few steps
    </p>
    <button
      class="text-white bg-black px-4 py-2 mt-10 w-3/12"
      @click="navigationHandler"
    >
      Start
    </button>
  </div>
</template>

<script>
export default {
  name: "WelcomeCardPage",
  methods: {
    navigationHandler() {
      this.$router.push("/introduction");
    },
  },
};
</script>

<style></style>
