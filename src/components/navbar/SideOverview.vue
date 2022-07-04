<template>
  <div class="overview-label">
    <span class="label-title">Overview</span><br />
    <div class="info-container">
      <div class="info-left">
        <span class="info-title">name</span>
        <span class="info">{{ this.company.name }}</span>
        <span class="info-title">country</span>
        <span class="info">{{ this.company.country }}</span>
        <span class="info-title">website</span>
        <span class="info"><a :href="this.company.website">{{ this.company.website }}</a></span>
        <span class="info-title">primary sector</span>
        <span class="info">{{ this.company.primary_sector }}</span>
        <span class="info-title">turnover</span>
        <span class="info">{{ this.company.turnover }}</span>
        <span class="info-title">n employees</span>
        <span class="info">{{ this.company.employees }}</span>
        <span class="info-title">foundation year</span>
        <span class="info">{{ this.company.foundation_year }}</span>
      </div>
      <div class="info-right">
        <span class="info-title">other industries</span>
        <span class="info" v-for="industry in this.company.other_sectors" :key="industry" >{{ industry }},
        </span>
        <span class="info-title">product & services</span>
        <span class="info" v-for="product in this.company.products" :key="product">{{ product }}</span>
        <span class="info-title">about</span>
        <span class="info">{{ this.company.about }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideOverview",
  props: {
    company: Object,
  },
};
</script>

<!-- later divide styles -->
<style scoped lang="scss" src="../../assets/css/navbar/sideoverview_style.scss"></style>