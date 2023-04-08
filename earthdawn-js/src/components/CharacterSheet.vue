
<script setup lang="ts">
import { Character } from '../types/Character';

defineProps<{ character: Character }>()
  </script>
<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="6">
                <v-text-field label="Name" :value="character.name" readonly></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                <v-text-field label="Race" :value="character.race" readonly></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="6">
                <v-text-field label="Discipline" :value="character.discipline" readonly></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                <v-text-field label="Circle" :value="character.circle" readonly></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-subheader>Attributes</v-subheader>
            </v-col>
        </v-row>
        <v-row>
            <v-col v-for="(value, key) in character.attributes" :key="key" cols="12" sm="6" md="4">
                <v-text-field :label="key" :value="value" readonly></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-subheader>Talents</v-subheader>
            </v-col>
        </v-row>
        
    </v-container>
</template>
  