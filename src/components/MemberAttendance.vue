<template>
    <div class="attendance-container">
        <h2>Member Attendance</h2>
        <ul class="member-list">
            <li v-for="member in NAMES" :key="member">
                <label>
                    <input type="checkbox" v-model="present[member]" />
                    {{ member }}
                </label>
            </li>
        </ul>
        <button type="submit" @click="submitPresentPeople">Done</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { NAMES } from '../assets/teamMembers';

const present = ref<Record<string, boolean>>({});

NAMES.forEach(name => present.value[name] = true);

const emit = defineEmits<{
    (e: 'submit', presentPeople: string[]): void;
}>();

const submitPresentPeople = () => {
    const presentPeople = Object.entries(present.value)
        .filter(([_, isPresent]) => isPresent)
        .map(([name]) => name);

    emit('submit', presentPeople);
};
</script>

<style scoped>
.attendance-container {
    width: 100%;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.attendance-container h2 {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    color: var(--color-secondary);
}

.member-list {
    list-style: none;
    padding: 0;
    min-width: 240px;
    flex: 1;
}

label {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    cursor: pointer;
}

.member-list input[type="checkbox"] {
    margin-right: 0.75rem;
    accent-color: var(--color-secondary);
    transform: scale(1.2);
    cursor: pointer;
}

button {
    flex: 1;
    flex-grow: 0;
    align-self: flex-end;
}
</style>