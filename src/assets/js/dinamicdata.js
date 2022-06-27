class Box {
    constructor(text) {
        this.text = text
        this.checked = false
    }
}
class Filter {
    constructor(name, icon, boxes) {
        this.name = name
        this.icon = icon
        this.boxes = boxes
    }

    getBoxesChecked() {
        return this.boxes.filter(box => box.checked == true).length
    }
}
class Company { // make employees a tuple
    constructor(
        name, country, website,
        primary_sector, other_sectors, products,
        turnover, employees, foundation_year,
        about, img
    ) {
        this.name = name
        this.country = country
        this.website = website
        this.primary_sector = primary_sector
        this.other_sectors = other_sectors
        this.products = products
        this.turnover = turnover
        this.employees = employees
        this.foundation_year = foundation_year
        this.about = about
        this.img = img
    }
}

/* - COMPANIES - */

const companies = [
    new Company('name1', 'country1', 'https://web1',
        'sector1', ['sector_1o', 'sector_2o'], ['product_1', 'product_2'],
        100, 10, 1950,
        'some_text_here! 1', 'https://img'),

    new Company('name2', 'country2', 'https://web2',
        'sector2', ['sector_1o', 'sector_2o'], ['product_1', 'product_2'],
        100, 10, 1950,
        'some_text_here! 2', 'https://img'),

    new Company('name3', 'country3', 'https://web3',
        'sector3', ['sector_1o', 'sector_2o'], ['product_1', 'product_2'],
        100, 10, 1950,
        'some_text_here! 3', 'https://img'),

    new Company('name4', 'country4', 'https://web4',
        'sector4', ['sector_1o', 'sector_2o'], ['product_1', 'product_2'],
        100, 10, 1950,
        'some_text_here! 4', 'https://img'),

    new Company('name5', 'country5', 'https://web5',
        'sector5', ['sector_1o', 'sector_2o'], ['product_1', 'product_2'],
        100, 10, 1950,
        'some_text_here! 5', 'https://img'),

    new Company('name6', 'country6', 'https://web6',
        'sector6', ['sector_1o', 'sector_2o'], ['product_1', 'product_2'],
        100, 10, 1950,
        'some_text_here! 6', 'https://img'),

    new Company('name7', 'country7', 'https://web7',
        'sector7', ['sector_1o', 'sector_2o'], ['product_1', 'product_2'],
        100, 10, 1950,
        'some_text_here! 7', 'https://img'),

    new Company('name9', 'country8', 'https://web8',
        'sector8', ['sector_1o', 'sector_2o'], ['product_1', 'product_2'],
        100, 10, 1950,
        'some_text_here! 8', 'https://img'),

    new Company('name10', 'country9', 'https://web9',
        'sector9', ['sector_1o', 'sector_2o'], ['product_1', 'product_2'],
        100, 10, 1950,
        'some_text_here! 9', 'https://img')
]

/* - GRAPH STRUCTURE - */

const rings = [ 
        companies[0],
        companies[1],
        companies[2],
        companies[4],
        companies[5],
        companies[3],
        companies[6],
        companies[7],
        companies[8],
        companies[0],
        companies[1],
        companies[2],
        companies[4],
        companies[5],
        companies[3],
        companies[6],
        companies[7],
        companies[8],
    ]

/* - FILTERS - */

const filters = [
    [
        new Filter('filter1', 'vpn_key', [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter2', 'travel_explore', [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter3', 'currency_exchange', [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter4', 'interests', [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter5', 'hub', [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter6', 'group', [new Box('box1'), new Box('box2'), new Box('box3')]),
    ],
    [
        new Filter('filter7', 'vpn_key', [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter8', 'travel_explore', [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter9', 'currency_exchange', [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter10', 'interests', [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter11', 'hub', [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter12', 'group', [new Box('box1'), new Box('box2'), new Box('box3')]),
    ],
    [
        new Filter('filter13', 'vpn_key', [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter14', 'travel_explore', [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter15', 'currency_exchange', [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter16', 'interests', [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter17', 'hub', [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter18', 'group', [new Box('box1'), new Box('box2'), new Box('box3')]),
    ],
    [
        new Filter('filter19', 'vpn_key', [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter20', 'travel_explore', [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter21', 'currency_exchange', [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter22', 'interests', [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter23', 'hub', [new Box('box1'), new Box('box2'), new Box('box3')]),
        new Filter('filter24', 'group', [new Box('box1'), new Box('box2'), new Box('box3')]),
    ],
]

/* EXPORT */

export { filters }
export { companies }
export { rings }
