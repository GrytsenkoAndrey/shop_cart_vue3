<template>
  <h2>Main view (component)</h2>
  <main>
    <ProductSummaryCard
      v-for="product in items"
      :key="product.id"
      :product="product"
    ></ProductSummaryCard>
  </main>
</template>

<script>
import items from "../data/items.js";
import ProductSummaryCard from "../components/products/ProductSummaryCard.vue";

export default {
  name: "Home",
  components: {
    ProductSummaryCard,
  },
  data() {
    return {
      items: items,
    };
  },
};
</script>
