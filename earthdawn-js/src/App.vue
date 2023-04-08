<script setup lang="ts">
import CharacterSheet from './components/CharacterSheet.vue';
</script>

<template>
  <v-app>
    <CharacterSheet :character="$data" />
  </v-app>
</template>


<script setup lang="ts">
export default {
  components: {
    CharacterSheet,
  },
  data() {
    return {
        "name": "Therandir",
        "race": "Elf",
        "discipline": "Swordmaster",
        "circle": 5,
        "attributes": {
          "dexterity": 16,
          "strength": 12,
          "toughness": 14,
          "perception": 14,
          "willpower": 12,
          "charisma": 16
        },
        "talents": {
          "base_talents": {
            "avoid_blow": 5,
            "maneuver": 4,
            "melee_weapons": 5,
            "riposte": 4,
            "taunt": 4
          },
          "optional_talents": {
            "acrobatic_defense": 3,
            "air_dance": 2,
            "first_impression": 3,
            "winning_smile": 2
          }
        },
        "skills": {
          "knowledge_skills": {
            "creature_lore": 2,
            "history": 2
          },
          "artisan_skills": {
            "wood_carving": 2
          },
          "general_skills": {
            "climbing": 2,
            "swimming": 2
          },
          "language_skills": {
            "dwarven": 1,
            "human": 1
          }
        },
        "equipment": {
          "weapons": {
            "broadsword": {
              "damage": "STR+4",
              "size": "2"
            }
          },
          "armor": {
            "leather_armor": {
              "physical_armor": 5,
              "mystic_armor": 3
            }
          },
          "adventuring_gear": {
            "backpack": 1,
            "bedroll": 1,
            "waterskin": 1
          }
        },
        "legend_points": 1200
      
    };
  },
  computed: {
    
          initiative(){
            return this.attributes.dexterity + this.circle;
          },
          physical_defense(){},
          spell_defense(){},
          social_defense(){},
          physical_armor(){},
          mystic_armor(){},
          death_rating(){},
          unconsciousness_rating(){},
          wound_threshold(){},
          recovery_tests(){},
      
  }
};
</script>