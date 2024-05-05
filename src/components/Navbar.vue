<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div class="container py-2">
            <a href="#" class="navbar-brand">
                <router-link :to="{ name: 'home' }" class="nav-link text-decoration-none text-dark">
                    <span>Toddo</span>
                    <strong>List</strong>
                </router-link>
                
            </a>
            <button class="navbar-toggler" :class="menuToggleClass" @click.prevent="menuToggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse px-4" :class="menuToggleClass" id="navbarNav">
                <ul class="navbar-nav" v-if="store.isLoggedIn">
                    <li class="nav-item">
                        <router-link :to="{ name: 'tasks' }" class="nav-link">Tasks</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'summary' }" class="nav-link">Summary</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto">
                    <template v-if="!store.isLoggedIn">
                        <li class="nav-item">
                            <router-link :to="{ name: 'login' }" class="nav-link">Login</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'register' }" class="nav-link ml-10">Sign up</router-link>
                        </li>
                    </template>
                    <template v-else>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" :class="toggleClass" @click.prevent="logoutToggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {{ store.user.name }}
                            </a>
                            <div class="ps-3">
                                <ul class="dropdown-menu" :class="toggleClass">
                                    <li>
                                        <a href="#" class="dropdown-item" @click.prevent="logout">Logout</a>
                                    </li>
                                </ul>

                            </div>
                            
                        </li>
                    </template>
                    
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const router = useRouter()
const store = useAuthStore()
const logoutToggleIsOpen = ref(false)
const menuToggleIsOpen = ref(false)

const logout = async () => {
    await store.handleLogout()
    isOpen.value = false
    router.push({ name: 'login'})
}

const logoutToggle = () => logoutToggleIsOpen.value = !logoutToggleIsOpen.value
const menuToggle = () => menuToggleIsOpen.value = !menuToggleIsOpen.value

const toggleClass = computed(() => logoutToggleIsOpen.value === true ? 'show' : '')
const menuToggleClass = computed(() => menuToggleIsOpen.value === true ? 'show' : '')

const closeDropdown = () => {
    logoutToggleIsOpen.value = false
    menuToggleIsOpen.value = false
}
router.afterEach(() => {
  closeDropdown()
})
</script>

<style scoped>
/* .dropdown-menu {
  width: 160px;
} */
</style>