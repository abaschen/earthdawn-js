<script setup lang="ts">
import { useStore } from 'vuex';
import { Character } from '@/types/Character';
import { Roll } from '@/types/Roll';
import { useI18n } from 'vue-i18n';
import DiceValued from './DiceValued.vue';
import { baseAttributes } from '@/types/Attributes';
import { ref } from 'vue';
// bind state to the template
const store = useStore().state
const t = useI18n().t;
const character: Character = store.character as Character
const baseAttributesRef = ref(baseAttributes);

</script>
<template>
  <v-app-bar app color="primary" dark>
    <v-container>
      <v-row align="center">
        <!-- a column for each base attribute -->

        <v-col cols="2" v-for="(key) in baseAttributesRef">
          <dice-valued :stat="key" :value="0"></dice-valued>
        </v-col>

      </v-row>
    </v-container>
  </v-app-bar>
</template>
  
<style scoped>
.stat {
  text-align: center;
}

.stat-label {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 500;
  color: #fff;
}
</style>
  