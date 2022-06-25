<template>
    <div class="view-title-wrapper">
        <h2 class="title">{{title}}</h2>
        <span class="subtitle">{{subtitle}}</span>
    </div>
</template>

<script>
export default {
    name: 'ViewTitle',
    props: {
        title: String,
        subtitle: String,
    }
}
</script>

<style scoped lang="scss" src="../../assets/css/topview/viewtitle_style.scss">
</style>