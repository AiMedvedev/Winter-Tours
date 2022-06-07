<template>
  <div class="wrapper mt-5">
    <div class="container">
      <div class="grid d-flex justify-content-between flex-wrap">
        <card-element
          v-for="card in cards"
          :key="card.id"
          :card="card"
          @onNavigate="navigate"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardElement from "../components/CardElement.vue";
import { navigate } from "../mixins/navigate";

export default {
  components: { CardElement },
  computed: {
    cards() {
      return this.$store.getters["getCards"];
    },
  },
  data() {
    return {
      name: "cards",
    };
  },
  methods: {
    navigate(id) {
      this.$router.push({
        name: "about",
        params: {
          id: id,
        },
      });
    },
  },
  mixins: [navigate],
};
</script>