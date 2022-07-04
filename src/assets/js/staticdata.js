import { filters } from './dinamicdata.js'

class Button {
    constructor(name, icon, text, filters, id, is_first) {
        this.icon = icon
        this.name = name;
        this.text = text;
        this.filters = filters
        this.id = id
    }
}

const buttons = [
    new Button('geographical', 'public', 'text1', filters[0], 0),
    new Button('trends', 'trending_up', 'text2', filters[1], 1),
    new Button('BOM', 'lan', 'text3', filters[2], 2),
    new Button('other?', 'battery_saver', 'text4', filters[3], 3),
]

const nav_icons = [
    { icon: 'radar', url: '/round-menu' },
    { icon: 'list', url: '/company-list' },
    { icon: 'save', url: '#' },
    { icon: 'feed', url: '#' },
    { icon: 'newspaper', url: '#' },
]

// SORT SETTINGS
const order_by_score = companies => companies.sort((a,b) => b.score-a.score)
const order_by_name = companies => companies.sort((a,b) => ('' + a.name).localeCompare(b.name))
const order_by_turnover = companies => companies.sort((a,b) => b.turnover-a.turnover)
const order_by_employees = companies => companies.sort((a,b) => b.employees-a.employees) // eventually change to a[1]
const order_by_products = companies => companies.sort((a,b) => b.products.length-a.products.length)

// SETTINGS
const menu_settings = [
    { name: '', sortable: [false, null] },
    { name: '', sortable: [false, null] },
    { name: 'warm score', sortable: [true, order_by_score] },
    { name: 'company name', sortable: [true, order_by_name] },
    { name: 'primary selector', sortable: [false, null] },
    { name: 'turnover', sortable: [true, order_by_turnover] },
    { name: 'employees', sortable: [true, order_by_employees] },
    { name: 'products', sortable: [true, order_by_products] },
    { name: 'country', sortable: [false, null] },
    { name: 'on-scope', sortable: [false, null] },
    { name: '', sortable: [false, null] },
    { name: 'label', sortable: [false, null] },
]

const side_menu_icons = [
    [ // title icons
        { icon: 'star', label: 'On Scope' },
        { icon: 'label', label: 'Label' },
        { icon: 'list', label: 'Add to List' },
        { icon: 'compare', label: 'Compare' },
    ],
    [ // score icons
        { icon: 'network_check', label: 'TOTAL Score' },
        { icon: 'lan', label: 'BOM Score' },
        { icon: 'public', label: 'GEO Score' },
        { icon: 'crop_landscape', label: 'Size Score' },
        { icon: 'battery_saver', label: '??? Score' },
    ],
]

export { buttons }
export { nav_icons }
export { menu_settings }
export { side_menu_icons }