<template>
    <div class="submit-button-wrapper">
        <button type="button" class="btn submit-button" 
        :class="(this.active == true)? 'btn-primary active' : 'btn-outline-primary inactive'">{{text}}</button>
    </div>
</template>

<script>
export default {
    name: 'SubmitButton',
    props: {
        text: String,
        active: {
            type: Boolean,
            default: true
        }
    },
}
</script>

<style scoped lang="scss" src="../../assets/css/generics/submitbutton_style.scss">
</style>