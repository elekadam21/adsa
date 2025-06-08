<template>
    <div class="name-selector">
        <label for="name">Select your name:</label>

        <select name="name" id="name" v-model="selectedName">
            <option v-for="name in NAMES" :value=name>{{ name }}</option>
        </select>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { NAMES } from '../assets/teamMembers';

const selectedName = ref("");

// Load initial value from localStorage
const storedName = localStorage.getItem('selectedName');
if (storedName && NAMES.includes(storedName)) {
    selectedName.value = storedName;
}

// Watch for changes and update localStorage
watch(selectedName, () => {
    if (selectedName.value) {
        localStorage.setItem('selectedName', selectedName.value);
    }
});
</script>

<style scoped>
.name-selector {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding: 2rem;
    background-color: var(--color-background);
    color: var(--color-text);
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    width: 400px;
    height: 200px;
    margin: 4rem auto;
}

label {
    font-size: 1.2rem;
    font-weight: bold;
}

select {
    padding: 15px 30px;
    font-size: 24px;
    border: 1px solid var(--color-accent);
    border-radius: 8px;
    background-color: var(--color-primary);
    color: var(--color-text);
    outline: none;
    transition: border-color 0.3s ease, background-color 0.3s ease;
}

select:hover,
select:focus {
    border-color: var(--color-secondary);
}
</style>