<template>
  <div class="h-screen flex justify-center items-center">
    <WelcomeCard />
  </div>
</template>

<script>
import WelcomeCard from "../components/WelcomeCard.vue";
export default {
  name: "HomeView",
  components: { WelcomeCard },
};
</script>
