<template>
  <h2>Main view (component)</h2>

  <ProductDescription :product="product" :active="active.product_desc"></ProductDescription>

  <main>   
    <ProductSummaryCard
      v-for="product in items"
      :key="product.id"
      :product="product"
      @view-product="viewProduct($event)"
    ></ProductSummaryCard>
  </main>
</template>

<script>
import items from "../data/items.js";
import ProductSummaryCard from "../components/products/ProductSummaryCard.vue";
import ProductDescription from '../components/products/ProductDescription.vue';

export default {
  name: "Home",
  components: {
    ProductSummaryCard,
    ProductDescription
  },
  data() {
    return {
      items: items,
      product: null,
      active: {
        product_desc: false
      }
    };
  },
  methods: {
    viewProduct(product) {
      this.product = product;
      this.active.product_desc = true;
      
      console.log(this.product);
    }
  }
};
</script>
