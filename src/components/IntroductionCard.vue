<template>
  <div class="bg-gray-100 shadow rounded-lg p-20 w-5/12 mx-auto">
    <h2 class="text-black text-2xl font-bold">Tell us about yourself</h2>
    <form @submit.prevent="submitHandler">
      <div class="flex flex-col mt-4">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="userDetails.name" class="mt-2" />
      </div>
      <div class="flex flex-col mt-4">
        <label for="age">Age</label>
        <input type="number" id="age" v-model="userDetails.age" />
      </div>
      <div class="flex flex-col mt-4">
        <label for="country">Where do you live</label>
        <select id="country" v-model="userDetails.country" class="mt-2">
          <option value="">Select Country</option>
          <option :value="item" v-for="(item, i) in countries" :key="i">
            {{ item }}
          </option>
        </select>
      </div>
      <div class="flex flex-col mt-4">
        <div>
          <input
            type="radio"
            name="standard"
            id="standard"
            value="standard"
            v-model="userDetails.package"
          />
          <label for="standard" class="ml-2">Standard</label>
        </div>
        <div>
          <input
            type="radio"
            name="safe"
            id="safe"
            value="safe"
            v-model="userDetails.package"
          />
          <label for="safe" class="ml-2">Safe (50%)</label>
        </div>
        <div>
          <input
            type="radio"
            name="superSafe"
            id="superSafe"
            value="superSafe"
            v-model="userDetails.package"
          />
          <label for="superSafe" class="ml-2">Super Safe (75%)</label>
        </div>
      </div>
      <div class="mt-16">
        <p class="text-2xl font-bold text-black" v-if="userDetails.premium">
          Your Premium is {{ userDetails.premium }}{{ userDetails.currency }}
        </p>
      </div>
      <div class="mt-10 flex justify-center items-center">
        <button
          class="text-white bg-black px-4 py-2 mt-10"
          @click.prevent="$router.push('/')"
        >
          Back
        </button>
        <button class="text-white bg-black px-4 py-2 mt-10 ml-3" type="submit">
          Next
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "IntroductionCard",
  data() {
    return {
      userDetails: {
        name: "",
        age: "",
        country: "Hong Kong",
        package: "",
        premium: "",
        currency: "",
      },

      rate: "",
      countries: ["Hong Kog", "USA", "Australia"],
    };
  },
  methods: {
    submitHandler() {
      if (this.userDetails.age && this.userDetails.age > 100) {
        this.$router.push("/ageError");
      } else {
        this.$store.commit("setUserDetails", this.userDetails);
        setTimeout(() => {
          this.$router.push("/summary");
        }, 2000);
      }
    },
    setCurrencyAndRate(country) {
      switch (country) {
        case "Hong Kong":
          this.userDetails.currency = "HKD";
          this.rate = 1;
          break;
        case "USA":
          this.userDetails.currencyy = "USD";
          this.rate = 2;
          break;
        case "Australia":
          this.userDetails.currency = "AUD";
          this.rate = 3;
          break;
      }
    },
    calculatePremium() {
      this.userDetails.premium =
        10 * this.userDetails.age * this.rate * this.getPackageRate();
    },
    getPackageRate() {
      if (this.userDetails.package) {
        switch (this.userDetails.package) {
          case "standard":
            return 1;
          case "safe":
            return 1 + 0.5;
          case "superSafe":
            return 1 + 0.75;
        }
      }
      return 1;
    },
  },
  watch: {
    "userDetails.country": {
      immediate: true,
      deep: true,
      handler(val) {
        if (val) {
          this.setCurrencyAndRate(val);
          this.calculatePremium();
        }
      },
    },
    "userDetails.age": {
      handler(val) {
        if (val) {
          this.calculatePremium();
        }
      },
    },
    "userDetails.package": {
      handler(val) {
        if (val) {
          this.calculatePremium();
        }
      },
    },
  },
};
</script>

<style></style>
