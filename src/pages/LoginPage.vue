<template>
    <main class="auth-wrapper">
        <form class="auth-form px-4" @submit.prevent="handleSubmit">
            <h1>
                <span>Toddo</span>
                <strong>List</strong>
            </h1>
            <h2 class="h3 mb-4 fw-normal">Please login</h2>
            <div class="form-floating mb-2">
                <input type="email" class="form-control" :class="{ 'is-invalid': errors.email && errors.email[0] }" id="email" v-model="form.email" placeholder="name@example.com" />
                <label for="email">Email</label>
                <div class="invalid-feedback" v-if="errors.email && errors.email[0]">
                    {{ errors.email && errors.email[0] }}
                </div>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control" :class="{ 'is-invalid': errors.password && errors.password[0] }" id="password" v-model="form.password" placeholder="Password" />
                <label for="password">Password</label>
                <div class="invalid-feedback" v-if="errors.password && errors.password[0]">
                    {{ errors.password && errors.password[0] }}
                </div>
            </div>
            <button class="w-100 btn btn-lg btn-success" type="submit">Login</button>
            <div class="mt-5 text-muted">
                <div class="mt-5 text-muted" style="text-align: center;">
                    <table style="display: inline-block;">
                        <tr>
                            <td style="text-align: right;">Test Account:</td>
                            <td style="text-align: left; padding-left: 10px">test@mail.com</td>
                        </tr>
                        <tr>
                            <td style="text-align: right;">Password:</td>
                            <td style="text-align: left; padding-left: 10px">test1234</td>
                        </tr>
                    </table>
                </div>
            </div>
        </form>

        
    </main>
</template>

<script setup>
import { reactive } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth";

const router = useRouter();
const store = useAuthStore()
const { isLoggedIn, errors } = storeToRefs(store)
const { handleLogin } = store

const form = reactive({
    email: '',
    password: '' 
})

const handleSubmit = async () => {
    await handleLogin(form)
    if (isLoggedIn.value) {
        router.push({ name: 'tasks' })
    }
};
</script>

<style scoped>
.auth-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 60vh;
    margin-top: 2rem;
}
.auth-form {
    width: 400px;
}
</style>