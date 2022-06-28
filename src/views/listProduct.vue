<template>
  <div class="px-72 py-24">
    <h1 class="text-3xl font-bold pb-20">List Products</h1>
    <div class="grid grid-cols-4 gap-4">
      <div class="card" v-for="(product, index) in products" :key="index">
        <img :src="product.thumbnail" class="w-44" />
        <router-link :to="'/detail-product/' + index">{{
          product.title
        }}</router-link>
        <h3>${{ product.price }}</h3>
        <h3>{{ product.rating }}</h3>
        <a href="" class="underline text-blue-500">Ubah</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      products: [],
      productTitle: "",
      productPrice: "",
    };
  },
  methods: {
    // async tambahKomentar() {
    //   const res = await axios.post("http://localhost:3000/comments", {
    //     body: this.komentar,
    //   });
    //   this.items = [...this.items, res.data];
    //   this.komentar = "";
    //   this.$toast.success(`Komentar ditambahkan`);
    // },
    // async getId(index) {
    //   const res = await axios
    //     .get(`http://localhost:3000/comments/${index}`)
    //     .then();
    //   this.idData = res.data.id;
    //   this.komen = res.data.body;
    // },
  },
  async mounted() {
    await axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        this.products = response.data.products;
        console.log(this.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>