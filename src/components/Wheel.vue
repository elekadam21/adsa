<template>
    <WheelOfFortune :entries="players" />
</template>

<script setup lang="ts">
import { NAMES } from '../assets/teamMembers';
import WheelOfFortune from './WheelOfFortune.vue';

const players = NAMES.map(name => { return { name: name, weight: 1 } });
</script>