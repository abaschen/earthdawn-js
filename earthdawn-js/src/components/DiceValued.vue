<script setup lang="ts">
import { useStore } from 'vuex';
import { Attribute, BaseAttribute } from '@/types/Attributes';
import { Roll } from '@/types/Roll';
import { computed, reactive } from 'vue';
import { useI18n } from 'vue-i18n';

const props = defineProps<{
    stat: BaseAttribute;
    value: number;
}>();
const t = useI18n().t;
const state = useStore().state;

const attribute = state.character.attributes[props.stat] as Attribute;
const stats = reactive({
  wounds: useStore().state.character.wounds,
  statValue: attribute.value()
})


const trueValue = computed(() => {
    return stats.statValue - (stats.wounds > 1 ? stats.wounds - 1 : 0);
});

const roll = computed(() => {
    return new Roll(trueValue.value).toString();
});

</script>

<template>
   <v-card :title="t(`stats_short.${stat}`).toUpperCase()" :text=" trueValue + ' ' + roll"></v-card>
</template>