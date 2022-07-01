<template>
    <div class="company-card-wrapper" ref="card" @click="clicked">
        <div class="company-card">
            <img class="image" :src="this.card.img" :alt="this.card.name"/>
        </div>
    </div>
</template>

<script>
import { mounted_card } from '../../animate.js'
import store from '../../store/index.js';
import * as type from '../../store/mutationTypes/types.js';

export default {
    name: 'CompanyCard',
    props: {
        card: Object,
        card_index: Number,
        ring_index: Number,
    },
    methods: {
        clicked() { store.dispatch({
            type: type.SetSelectedCompany,
            company: this.card
        }) }
    },
    mounted() {
        mounted_card(this.$refs.card, this.ring_index, this.card_index)
    }
}
</script>

<style scoped lang="scss" src="../../assets/css/centerview/companycard_style.scss">
</style>