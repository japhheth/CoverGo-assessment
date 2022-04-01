<template>
  <div class="h-screen flex justify-center items-center">
    <SummaryCard :data="summary" />
  </div>
</template>

<script>
import SummaryCard from "../components/SummaryCard.vue";
export default {
  name: "SummaryPage",
  components: { SummaryCard },
  data() {
    return {
      summary: {},
    };
  },
  mounted() {
    this.summary = this.$store.getters.getTransactionSummary;
  },
};
</script>

<style></style>
