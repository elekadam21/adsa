<template>
    <div class="bet-page-container">
        <h2>🎯 Bet on someone</h2>

        <ul class="name-list">
            <li v-for="entry in entries" :key="entry.name" class="name-entry" @click="selectPersonToBetOn(entry.name)"
                :class="{ active: selectedPerson === entry.name }">
                <span class="name">{{ entry.name }}</span>
                <span class="chance">Chance: {{ entry.chance }}%</span>
            </li>
        </ul>

        <div class="bet-form">
            <label for="bet">Place your bet:</label>
            <input type="text" placeholder="Amount" v-model="betAmount" />
            <button type="submit" @click="submitBet">Place Bet</button>
        </div>

    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

interface Entry {
    name: string;
    weight: number;
}

const props = defineProps<{
    people: string[];
}>();

const emit = defineEmits<{
    (e: 'submit', bet: { person: string, amount: number }): void;
}>();

const participants = ref<Entry[]>(
    props.people.map(name => ({ name, weight: 1 }))
);

const entries = computed(() => calculateChances(participants.value));

const selectedPerson = ref('');
const betAmount = ref(0)

const calculateChances = (entries: Entry[]): { name: string; chance: number }[] => {
    const totalWeight = entries.reduce((sum, entry) => sum + entry.weight, 0);
    return entries.map(entry => ({
        name: entry.name,
        chance: Math.round((entry.weight / totalWeight) * 100)
    }));
};

const selectPersonToBetOn = (name: string) => {
    selectedPerson.value = name;
};

const submitBet = () => {
    emit('submit', { person: selectedPerson.value, amount: betAmount.value });
}
</script>

<style scoped>
.bet-page-container {
    width: 100%;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.bet-page-container h2 {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    color: var(--color-secondary);
}

.name-list {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex: 1
}

.name-entry {
    display: flex;
    justify-content: space-between;
    padding: 12px 16px;
    border: 1px solid var(--color-secondary);
    border-radius: 8px;
    background-color: var(--color-primary);
    color: var(--color-text);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
    transition: background-color 0.2s ease;
    cursor: pointer;
}

li.active {
    background-color: var(--color-secondary);
}

.name-entry:hover {
    background-color: var(--color-secondary);
    color: white;
}

.name {
    font-weight: 600;
}

.chance {
    font-style: italic;
    opacity: 0.8;
}

.bet-form {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    justify-content: space-between;
}

.bet-form label {
    font-weight: bold;
    color: var(--color-text);
    margin-right: 8px;
}

.bet-form select,
.bet-form input {
    padding: 6px 10px;
    border: 1px solid var(--color-secondary);
    border-radius: 6px;
    font-size: 1rem;
    background-color: var(--color-primary);
    color: var(--color-text);
}
</style>