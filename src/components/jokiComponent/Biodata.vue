<template>
    <div class="card biodata">
        <h1>Lengkapi Informasi</h1>
        <hr>
        <div class="form">
            <input
                type="text"
                name="email"
                v-model="email"
                class="form-input"
                placeholder="Masukkan Email/No HP"
                required
            >
            <input
                type="password"
                name="password"
                v-model="password"
                class="form-input"
                placeholder="Masukkan Password"
                required
            >
            <input
                type="text"
                name="hero"
                v-model="hero"
                class="form-input"
                placeholder="Request Hero"
                required
            >
            <input
                type="text"
                name="note"
                v-model="note"
                class="form-input"
                placeholder="Catatan Untuk Penjoki"
                required
            >
            <input
                type="text"
                name="userID"
                v-model="userID"
                class="form-input"
                placeholder="User ID / Nick Name"
                required
            >
            <select
                name="akun"
                v-model="akun"
                class="form-select"
            >
                <option value="" selected hidden disabled>Login Via</option>
                <option
                    v-for="log in login"
                    :key="log"
                    :value="log"
                >
                    {{ log }}
                </option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            hero: '',
            note: '',
            userID: '',
            akun: '',
            login: [
                'Akun Moonton (Rekomendasi)',
                'Akun VK (Rekomendasi)',
                'Facebook',
                'TikTok'
            ]
        }
    }
}
</script>