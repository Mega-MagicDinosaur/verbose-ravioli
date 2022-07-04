<template>
  <div class="address-label">
    <span class="label-title">Address</span><br />
    <div class="address-containers">
    <div class="address-container" v-for="(address) in this.company.addresses" :key="address">
      <div class="address">
        <span class="address-title">{{address.country}}</span>

        <div class="address-line">
            <span class="address-attribute">address: </span>
            <span class="address-content">{{address.address}}</span>
        </div>
        <div class="address-line">
            <span class="address-attribute">postal code: </span>
        <span class="address-content">{{address.postal_code}}</span>
        </div>
        <div class="address-line">
            <span class="address-attribute">city: </span>
            <span class="address-content">{{address.city}}</span>
        </div>
        <div class="address-line">
            <span class="address-attribute">state/region: </span>
            <span class="address-content">{{address.region}}</span>
        </div>
        <div class="address-line">
            <span class="address-attribute">country: </span>
            <span class="address-content">{{address.country}}</span>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideAddress",
  props: {
    company: Object,
  },
};
</script>

<style scoped lang="scss" src="../../assets/css/navbar/sideaddress_style.scss"></style>