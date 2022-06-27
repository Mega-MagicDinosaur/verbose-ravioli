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
    new Button('geographical',  'public',       'text1', filters[0], 0),
    new Button('trends',        'trending_up',  'text2', filters[1], 1),
    new Button('BOM',           'lan',          'text3', filters[2], 2),
    new Button('other?',        'battery_saver','text4', filters[3], 3),
]

const nav_icons = [
    {icon: 'radar',     url: '/round-menu'},
    {icon: 'list',      url: '/company-list'},
    {icon: 'save',      url: '#'},
    {icon: 'feed',      url: '#'},
    {icon: 'newspaper', url: '#'},
]

const menu_settings = [
    {name: ''},
    {name: ''},
    {name: 'warm score'},
    {name: 'company name'},
    {name: 'primary selector'},
    {name: 'turnover'},
    {name: 'employees'},
    {name: 'products'},
    {name: 'country'},
    {name: 'on-scope'},
    {name: ''},
    {name: 'label'},
]

export { buttons }
export { nav_icons }
export { menu_settings }