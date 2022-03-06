<template>
<div class="card">
<h3>{{ product.name }}</h3>
<h5 class="price">Price: $ {{ product.price }}</h5>
<p class="description">Description: {{ description }}</p>
<p class='text-muted'>{{ product.category }}</p>
<button class='view-product-button' @click.prevent="$emit('view-product', product)">View</button>
</div>
</template>

<script>

export default {
    name: 'ProductSummaryCard',
    props: ['product'],
    computed: {
        description() {
            return this.product.description.substring(0, 70);
        }
    }
}
</script>

<style lang="scss">
.card {
    background-color: white;
    border-radius: 6px;
    box-shadow: 0 0 5px gray;
    margin: 20px;
    padding: 10px;
    width: calc(50% - 40px * 2);

    h5.price {
        color: gray;
    }

    p.description {
        font-size: .85rem;
    }

    p.text-muted {
        color: rgba(70, 70, 70, .7);
    }

    button.view-product-button {
        background-color: rgba(79, 160, 187, .7);
        border-radius: 2px;
        border: none;
        color: white;
        cursor: pointer;
        font-weight: bold;
        font-size: 1.1rem;
        padding: 10px;
    }
}

@media (max-width: 500px) {
    .card {
        margin: 10px;
        width: 90%;
    }
}
</style>