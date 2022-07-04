<template>
    <div class="table-row">
        <td><input class="item-checkbox" type="checkbox" /> </td>
        <td><img class="item-image" :src="this.company.img" :alt="this.company.name" /> </td>
         <!-- maybe use this.score?? decide eventually -->
        <td><span class="item-label item-score">{{ this.company.score }}</span> </td>
        <td><span class="item-label item-name">{{ this.company.name }}</span> </td>
        <td><span class="item-label item-sector">{{ this.company.primary_sector }}</span> </td>
        <td><span class="item-label">{{ this.company.turnover }}</span> </td>
        <td><span class="item-label">{{ this.company.employees }}</span> </td>
        <td>
            <span class="item-label">{{ this.company.products[0] }} 
                <span v-show="this.company.products.length>1" 
                class="sub-label">+{{this.company.products.length-1}} More </span>
            </span> 
        </td>
        
        <td><span class="item-label">{{ this.company.country }}</span> </td> <!-- eventually an image maybe?? -->

        <td><IconButton class="item-scope" type="checkbox" icon="star" 
        :color="scoped? 'gold' : 'def'"
        @click="scoped? this.remove_scoped() : this.add_scoped()"/> </td>
        <td><SubmitButton 
        @click="clicked" text="SEE MORE" :active="this.selected"/> </td>
        <td><IconButton icon="label" style="transform: rotate(180deg)"/> </td>
    </div>
</template>

<script>
import SubmitButton from '../generics/SubmitButton.vue'
import IconButton from '../generics/IconButton.vue'

import store from '../../store/index.js';
import * as type from '../../store/mutationTypes/types.js';

import { company_data } from '@/assets/js/dinamicdata';

export default {
    name: 'ListItem',
    components: {
        SubmitButton,
        IconButton
    },
    props: {
        company: Object,
        score: {
            default: 0,
            tyle: Number
        },
        selected: Boolean
    },
    data() { return {
        company_data: company_data
    }},
    computed: {
        scoped() { return this.company_data.scoped_companies.includes(this.company) }
    },
    methods: {
        clicked() { store.dispatch({
            type: type.SetSelectedCompany,
            company: this.company
        }) },
        remove_scoped() {
            var index = this.company_data.scoped_companies.indexOf(this.company);
            if (index !== -1) { this.company_data.scoped_companies.splice(index, 1); }
        },
        add_scoped() {
            this.company_data.scoped_companies.push(this.company)
        }
    }
}
</script>

<style scoped lang="scss" src="../../assets/css/centerview/listitem_style.scss">
</style>