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

const menu_settings = [
    { name: '' },
    { name: '' },
    { name: 'warm score' },
    { name: 'company name' },
    { name: 'primary selector' },
    { name: 'turnover' },
    { name: 'employees' },
    { name: 'products' },
    { name: 'country' },
    { name: 'on-scope' },
    { name: '' },
    { name: 'label' },
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