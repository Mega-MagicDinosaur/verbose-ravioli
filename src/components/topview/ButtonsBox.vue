<template>
    <div class="buttons-box-wrapper">
        <div class="button-wrapper"  v-for="(button, index) in this.buttons" :key="button">
            <IconButton :class="(index != selected_button)? 'button-unfocused':'button-focused'"
            @click="this.select_button(index)" :icon="button.icon" />
            <p class="button-text">{{button.name}}</p>
        </div>
    </div>
</template>

<script>
import IconButton from '../generics/IconButton.vue'

export default {
    name: 'ButtonsBox',
    data() { return {
        selected_button: 0,
    }},
    components: {
        IconButton
    },
    props: {
        buttons: Array,
    },
    methods: {
        select_button(index) {
            this.selected_button = index
            this.$emit('button_selected', index)
        }
    },
}
</script>

<style scoped lang="scss" src="../../assets/css/topview/buttonsbox_style.scss">
</style>