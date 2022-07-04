<template>
    <span class="center-button"><img class="image" alt="company prophile image" :src="this.company_data.image"></span>
</template>

<script>
import { company_data } from '@/assets/js/dinamicdata'

export default {
  name: 'CenterButton',
  components: {},
  data() { return  {
    company_data: company_data
  }}
  
}
</script>

<style scoped lang="scss">
@import '../../assets/css/main_style.scss';
.center-button {
  background-color: $background-color;
}
.image {
  width: 100%;
  height:100%;

  object-fit: scale-down;

  transform: scale(0.8); // fit into circle

  border-radius: 50%;
}
</style>
