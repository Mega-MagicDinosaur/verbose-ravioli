<template>
<div class="card-ring-wrapper">
    <TransitionGroup name="card-ring">
        <CompanyCard v-for="(card) in this.ring" :key="card" :card="card" 
        :class="'size-'+this.ring.length+'-'+this.index"/>
    </TransitionGroup>
</div>
</template>

<script>
import CompanyCard from './CompanyCard.vue';

export default {
    name: "CardRing",
    components: { CompanyCard },
    props: {
        ring: Array,
        index: Number
    },
}
</script>

<style scoped lang="scss" src="../../assets/css/centerview/cardring_style.scss"></style>
