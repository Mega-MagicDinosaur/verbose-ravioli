<template>
    <div class="list-item-wrapper">
        <tr>
        <td><input class="item-checkbox" type="checkbox" />                             </td>
        <td><img class="item-image" :src="this.company.img"/>                           </td>
        <td><span class="item-label item-score">{{this.score}}</span>                   </td>
        <td><span class="item-label item-name">{{this.company.name}}</span>             </td>
        <td><span class="item-label item-sector">{{this.company.primary_sector}}</span> </td>
        <td><span class="item-label">{{this.company.turnover}}</span>                   </td>
        <td><span class="item-label">{{this.company.employees}}</span>                  </td>
        <td><span class="item-label">{{this.company.products}}</span>                   </td> <!-- add all side products label -->
        <td><span class="item-label">{{this.company.country}}</span>                    </td> <!-- eventually an image maybe?? -->

        <td><input class="item-scope" type="checkbox" />                                </td> <!-- this should be a star!! -->
        <td><button>SEE MORE</button>                                                   </td>
        <td><button>icon</button>                                                       </td>

        </tr>
    </div>
</template>

<script>
export default {
    name: 'ListItem',
    props: {
        company: Object,
        score: {
            default: 1,
            type: Number
        },
    },
}
</script>

<style scoped lang="scss" src="../../assets/css/centerview/listitem_style.scss">
</style>