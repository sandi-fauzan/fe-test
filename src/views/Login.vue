<template>
  <div class="px-80 py-32">
    <h1 class="text-3xl font-semibold pb-12">Login</h1>
    <form
      class="border border-gray-200 rounded-3xl px-20 py-24"
      @submit.prevent="login()"
    >
      <div class="mb-6">
        <label
          for="username"
          class="
            block
            mb-2
            text-sm
            font-medium
            text-gray-900
            dark:text-gray-300
          "
          >Masukan Username</label
        >
        <input
          v-model="username"
          type="text"
          id="username"
          class="
            bg-gray-50
            border border-gray-300
            text-gray-900 text-sm
            rounded-lg
            focus:ring-blue-500 focus:border-blue-500
            block
            w-full
            p-2.5
            dark:bg-gray-700
            dark:border-gray-600
            dark:placeholder-gray-400
            dark:text-white
            dark:focus:ring-blue-500
            dark:focus:border-blue-500
          "
          placeholder="Username"
          required
        />
      </div>
      <div class="mb-6">
        <label
          for="password"
          class="
            block
            mb-2
            text-sm
            font-medium
            text-gray-900
            dark:text-gray-300
          "
          >Masukan password</label
        >
        <input
          type="password"
          v-model="password"
          id="password"
          class="
            bg-gray-50
            border border-gray-300
            text-gray-900 text-sm
            rounded-lg
            focus:ring-blue-500 focus:border-blue-500
            block
            w-full
            p-2.5
            dark:bg-gray-700
            dark:border-gray-600
            dark:placeholder-gray-400
            dark:text-white
            dark:focus:ring-blue-500
            dark:focus:border-blue-500
          "
          required
        />
      </div>

      <button
        type="submit"
        class="
          text-white
          bg-blue-700
          hover:bg-blue-800
          focus:ring-4 focus:outline-none focus:ring-blue-300
          font-medium
          rounded-lg
          text-sm
          w-full
          sm:w-auto
          px-5
          py-2.5
          text-center
          dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
        "
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    username: "",
    password: "",
    // error: null,
    // success: false,
  }),
  methods: {
    // async login() {
    //   const auth = { username: this.username, password: this.password };
    //   const url = "https://dummyjson.com/auth/login";
    //   try {
    //     await axios
    //       .post(url, {
    //         auth,
    //         // params: {
    //         //   token:
    //         //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZyIsImlhdCI6MTY1NjM4NjEyMiwiZXhwIjoxNjU2Mzg5NzIyfQ.JR_JpAEeIK77KhF3d0pdkw8zuednFd4ERN4vb7eBkew",
    //         // },
    //       })
    //       .then((res) => res.data);
    //     // this.success = true;
    //     alert("sukses login");
    //   } catch (err) {
    //     this.error = err.message;
    //     alert("gagal login");
    //   }
    // },

    login: async function () {
      const auth = { username: this.username, password: this.password };
      const url = "https://dummyjson.com/auth/login";
      //   this.success = false;
      //   this.error = null;

      try {
        await axios.get(url, { auth }).then((res) => res.data);
        // this.success = true;
        alert("sukses login");
      } catch (err) {
        this.error = err.message;
        alert("gagal login");
      }
    },
  },
};
</script>