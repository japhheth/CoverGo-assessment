<template>
  <div class="bg-gray-100 shadow rounded-lg p-20 w-5/12 text-center">
    <h3 class="font-bold text-2xl mb-6">Summary</h3>
    <p class="mb-2">Name: {{ data.name }}</p>
    <p class="mb-2">Age: {{ data.age }}</p>
    <p class="mb-2">Where do you live: {{ data.country }}</p>
    <p class="mb-2">Package: {{ data.package }}</p>
    <p class="mb-2">Premium: {{ data.premium }}{{ data.currency }}</p>
    <div class="mt-10 flex justify-center items-center">
      <button class="text-black border border-black px-4 py-2 mt-10 w-2/12">
        Back
      </button>
      <button
        class="text-white bg-black px-4 py-2 mt-10 ml-3 w-2/12"
        @click.prevent="$router.push('/')"
      >
        Buy
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SummaryPage",
  props: {
    data: { type: Object },
  },
};
</script>

<style></style>
