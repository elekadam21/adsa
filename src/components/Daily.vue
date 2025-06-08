<template>
    <MemberAttendance v-if="!arePresentPeopleSubmitted" @submit="handleSubmittedPeople" />
    <BettingSelector v-if="arePresentPeopleSubmitted && !isBetSubmitted" :people="presentPeople"
        @submit="handleSubmittedBet" />
    <Wheel v-if="isBetSubmitted" />
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';
import MemberAttendance from './MemberAttendance.vue';
import BettingSelector from './BettingSelector.vue';
import Wheel from './Wheel.vue';

const arePresentPeopleSubmitted = ref(false)
const presentPeople: Ref<string[]> = ref([])

const isBetSubmitted = ref(false)

const handleSubmittedPeople = (people: string[]) => {
    arePresentPeopleSubmitted.value = true
    presentPeople.value = people
};

const handleSubmittedBet = (bet: { person: string, amount: number }) => {
    isBetSubmitted.value = true
    console.log(bet);

}
</script>

<style scoped></style>