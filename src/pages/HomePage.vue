<template>
  <main class="px-4 py-5 my-5 text-center" style="min-height: 50vh">
    <h1 class="display-5 fw-bold mt-4">Stay Organized, be productive</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Organize your ideas, and be productive everyday.</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <template v-if="!store.isLoggedIn">
          <router-link :to="{ name: 'login' }" class="btn btn-outline-success btn-lg px-4"
            >Login</router-link
          >
          <router-link
            :to="{ name: 'register' }"
            class="btn btn-primary btn-lg px-4 gap-3"
            >Sign up</router-link
          >
        </template>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";

const store = useAuthStore();
</script>
