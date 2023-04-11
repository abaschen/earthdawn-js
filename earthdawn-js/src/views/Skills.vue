
<template>
    <v-layout>
        
    </v-layout>
</template>

<script lang="ts">
import { Character } from '../types/Character.js';
import { useStore } from 'vuex';


export default {
  setup () {
    const store = useStore()
    return {
        character: store.state.character as Character
    }
  }
}
</script>
