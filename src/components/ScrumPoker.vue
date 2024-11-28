<template>
  <div>
    <h1 style="text-align: center;">Scrum Poker</h1>

    <!-- Join Session -->
    <div v-if="!sessionJoined" class="name-container">
      <input v-model="userName" placeholder="Enter Your Name" />
      <button @click="joinSession">Join Session</button>
    </div>

    <!-- Session Interface -->
    <div v-else>

      <div class="cards">
        <button v-for="card in cards" :key="card" @click="submitVote(card)"
          :class="{ selected: selectedCard === card }">
          {{ card }}
        </button>
      </div>

      <div class="results">
        <button @click="toggleVoteVisibility()">{{ areVotesVisible ? 'Show Votes' : 'Hide Votes' }}</button>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Story Points</th>
            </tr>
            <tr v-for="(vote, name, index) in sessionData.users" :key="index">
              <td>{{ name }}</td>
              <td>{{ areVotesVisible ? '?' : vote === '' ? 'No vote' : vote }}</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref as fbRef, onValue, set, update, onDisconnect } from "firebase/database";
// @ts-ignore
import { db } from "../firebase";
import { reactive, ref } from 'vue'

const userName = ref('');
let sessionData = reactive({} as Record<string, string | null>);
const sessionJoined = ref(false);
const cards = ['0', '1', '2', '3', '5', '8', '13', '21', '34', '55', '89', '?'];
const selectedCard = ref<string | null>(null);
const areVotesVisible = ref(false);

const joinSession = () => {
  if (!userName.value) {
    alert("Please enter a Name!");
    return;
  }

  // Listen to session updates
  const sessionRef = fbRef(db, `session`);
  onValue(sessionRef, (snapshot) => {
    console.log(snapshot.val());
    const data = snapshot.val() || {};
    sessionData.users = data.users || {};
    areVotesVisible.value = data.areVotesVisible || false;
  });

  const userRef = fbRef(db, `session/users/${userName.value}`);

  // Add user to session
  set(userRef, '')
    .then(() => {
      sessionJoined.value = true;
      // Remove user from session on disconnect
      onDisconnect(userRef).remove().catch((error) => {
        console.error("Error setting onDisconnect: ", error);
      });
    })
    .catch((error) => {
      console.error("Error adding user to session: ", error);
    });

}

const submitVote = (card: string) => {
  selectedCard.value = card;

  update(fbRef(db, `session/users/`), {
    [userName.value]: card,
  });
}

const toggleVoteVisibility = () => {
  update(fbRef(db, `session`), { areVotesVisible: !areVotesVisible.value });
}
</script>

<style>
.cards button {
  height: 100px;
  width: 70px;
  margin: 5px;
  padding: 10px;
  font-size: 16px;
}

.cards button.selected {
  background-color: #4caf50;
  color: white;
}

.name-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

input {
  text-align: center;
}

.results {
  margin-top: 40px;
}

table {
  width: 800px;
  margin: 20px auto;
  background-color: #1a1a1a;
  border-radius: 4px;
  border: 1px solid white;
  border-collapse: collapse;

}

tr {
  height: 56px;
}

td,
th {
  text-align: center;
  border: 1px solid white;
  width: 50%;

}

@media (prefers-color-scheme: light) {
  table {
    background-color: #f9f9f9;
    border-color: black;
  }
  th, td {
    border-color: black
  }
}
</style>