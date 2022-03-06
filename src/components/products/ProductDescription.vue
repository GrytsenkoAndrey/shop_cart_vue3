<template>
    <div class='drawer' :class="{ show: active }" @click="$emit('closeProductDesc')"> <!-- drawer -->
      <div class="close" @click="$emit('closeProductDesc')">X</div> <!-- drawer-close -->
      <div v-if="product" class="details">
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <h4>$ {{ product.price }}</h4>
        <h4>Category: {{ product.category }}</h4>

        <div class="cart-total" v-if="product_total">
          <h3>In Cart: {{ product_total }}</h3>
        </div>

        <div class="button-container">
          <button class="remove">Remove</button>
          <button class="add">Add</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "ProductDescription",
  props: ["product", 'active'],
  computed: {
      product_total() {
          return 13;
      }
  }
};
</script>

<style lang="scss">
.show {
    display: block;
}
.drawer {
    background: lightgray;
    width: 95vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: -105vw;
    padding: 15px;
    transition: left .5s;
    z-index: 101;
    overflow-y: scroll;

    &.show {
        left: 0;
    }
}
.close {
    font-size: 1.5rem;
    padding: 6px;
    border-radius: 6px;
    color: brown;
    width: 15px;
    cursor: pointer;

    &:hover {
        background-color: lightgray;
    }
}
.details {
    display: flex;
    justify-content: center;
    flex-direction: column;

    p {
        padding: 20px;
        line-height: 1.5rem;
    }

    .button-container {
        button {
            width: 150px;
            border: none;
            padding: 10px;
            border-radius: 5px;
            margin: 0 5px 50px 5px;
            cursor: pointer;
        }
    }
}

@media (max-width: 500px) {
    .drawer {
        width: 450px;
    }
}
</style>