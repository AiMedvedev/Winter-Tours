<template>
  <div @click="onEmmit(card.id)">
    <div class="item-wrapper d-flex flex-column">
      <img :src="require(`@/assets/img/${card.image}`)" class="mb-3" alt="" />
      <h3>{{ card.title }}</h3>
      <div class="description">
        {{ card.text | descrLength(card.text) }}
        <br />
        <span>Читать далее ...</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onEmmit(id) {
      this.$emit("onNavigate", id);
    },
  },
};
</script>