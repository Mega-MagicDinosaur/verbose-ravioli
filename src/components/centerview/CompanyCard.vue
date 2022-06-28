<template>
    <div class="company-card-wrapper" ref="card">
        <div class="company-card">
            <span>{{this.card.name}}</span>
        </div>
    </div>
</template>

<script>
import { mounted_card } from '../../animate.js'

export default {
    name: 'CompanyCard',
    props: {
        card: Object,
        card_index: Number,
        ring_index: Number,
    },
    mounted() {
        mounted_card(this.$refs.card, this.ring_index, this.card_index)
    }
}
</script>

<style scoped lang="scss" src="../../assets/css/centerview/companycard_style.scss">
</style>