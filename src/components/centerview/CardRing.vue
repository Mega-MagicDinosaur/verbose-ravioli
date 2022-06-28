<template>
    <div class="card-ring-wrapper" ref="ring">
        <CompanyCard v-for="(card, card_index) in this.ring" :key="card" 
        :card="card" :ring_index="this.index" :card_index="card_index"
        :class="'size-' + this.ring.length + '-' + this.index" />
    </div>
</template>

<script>
import CompanyCard from './CompanyCard.vue';

import { mounted_ring } from '../../animate';

export default {
    name: "CardRing",
    components: { CompanyCard },
    props: {
        ring: Array,
        index: Number
    },
    mounted() {
        mounted_ring(this.$refs.ring, this.index);

    }
}
</script>

<style scoped lang="scss" src="../../assets/css/centerview/cardring_style.scss">
</style>
