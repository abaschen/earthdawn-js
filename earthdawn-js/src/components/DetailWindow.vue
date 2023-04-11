<script setup lang="ts">
import { defineComponent, computed } from 'vue'
import Talents from '@/views/Talents.vue'
import Skills from '@/views/Skills.vue'
import Spells from '@/views/Spells.vue'
import Inventory from '@/views/Inventory.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

defineComponent({
    name: 'MainView',
    components: {
        Talents,
        Skills,
        Spells,
        Inventory
    },
})
const items = [
    { label: 'Talents', component: 'Talents' },
    { label: 'Skills', component: 'Skills' },
    { label: 'Spells', component: 'Spells' },
    { label: 'Inventory', component: 'Inventory' }
];
const activeTab = computed(() => {
    const routeName = route.name
    const itemIndex = items.findIndex(item => item.label.toLowerCase() === routeName)
    return itemIndex >= 0 ? itemIndex : 0
})
</script>


<template>
    <v-window v-model="activeTab" class="main">
        <v-window-item v-for="(item, index) in items" :key="index" :value="index">
            <component :is="item.component" />
        </v-window-item>
    </v-window>
</template>
  

<style scoped>
.main {
    height: calc(100% - 64px);
    /* Subtract the height of the app bar */
}
</style>
  