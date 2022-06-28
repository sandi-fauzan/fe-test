<template>
  <div class="px-72 py-24">
    <h1 class="text-3xl font-bold pb-20">Detail Products</h1>
    <div class="grid grid-cols-4 gap-4">
      <div class="card">
        <img :src="this.prd.thumbnail" class="w-44" />
        <h1>{{ this.prd.title }}</h1>
        <h3>${{ this.prd.price }}</h3>
        <h3>{{ this.prd.rating }}</h3>
        <h3>{{ this.prd.stock }}</h3>
        <h3>{{ this.prd.brand }}</h3>
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
      prd: [],
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
    async fetchProduct(index) {
      const res = await axios.get("https://dummyjson.com/products/" + index);
      //   this.products = res.data;
      console.log(res.data);
      this.prd = res.data;
    },
  },
  //   async mounted() {
  //     await axios
  //       .get("https://dummyjson.com/products/1")
  //       .then((response) => {
  //         this.products = response.data.products;
  //         console.log(this.data.products);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   },

  mounted() {
    this.fetchProduct(this.$route.params.id);
  },
};
</script>