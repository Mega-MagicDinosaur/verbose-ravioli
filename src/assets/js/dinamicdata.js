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
        about, img, score
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
        this.score = score
    }
}

/* - COMPANIES - */

const companies = [
    new Company('name1', 'country1', 'https://web1',
        'sector1', ['sector_1o', 'sector_2o'], ['product_1', 'product_2'],
        100, 10, 1950,
        'some_text_here! 1', 'https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2021/08/Screenshot-2021-08-06-at-1.00.49-PM-960x363.jpg', 50),

    new Company('name2', 'country2', 'https://web2',
        'sector2', ['sector_1o', 'sector_2o'], ['product_1', 'product_2'],
        100, 10, 1950,
        'some_text_here! 2', 'https://www.djangoproject.com/m/img/logos/django-logo-negative.svg', 25),

    new Company('name3', 'country3', 'https://web3',
        'sector3', ['sector_1o', 'sector_2o'], ['product_1', 'product_2'],
        100, 10, 1950,
        'some_text_here! 3', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png', 75),

    new Company('name4', 'country4', 'https://web4',
        'sector4', ['sector_1o', 'sector_2o'], ['product_1', 'product_2'],
        100, 10, 1950,
        'some_text_here! 4', 'https://www.begear.it/wp-content/uploads/2015/11/java-logo.jpg', 12),

    new Company('name5', 'country5', 'https://web5',
        'sector5', ['sector_1o', 'sector_2o'], ['product_1', 'product_2'],
        100, 10, 1950,
        'some_text_here! 5', 'https://www.geekandjob.com/uploads/wiki/50394d09226db485fac65bfa45529b52617b054b.png', 15),

    new Company('name6', 'country6', 'https://web6',
        'sector6', ['sector_1o', 'sector_2o'], ['product_1', 'product_2'],
        100, 10, 1950,
        'some_text_here! 6', 'https://upload.wikimedia.org/wikipedia/commons/7/73/Javascript-736400_960_720.png', 14),

    new Company('name7', 'country7', 'https://web7',
        'sector7', ['sector_1o', 'sector_2o'], ['product_1', 'product_2'],
        100, 10, 1950,
        'some_text_here! 7', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/1200px-Ruby_logo.svg.png', 18),

    new Company('name9', 'country8', 'https://web8',
        'sector8', ['sector_1o', 'sector_2o'], ['product_1', 'product_2'],
        100, 10, 1950,
        'some_text_here! 8', 'https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg', 1),

    new Company('name10', 'country9', 'https://web9',
        'sector9', ['sector_1o', 'sector_2o'], ['product_1', 'product_2'],
        100, 10, 1950,
        'some_text_here! 9', 'https://1.bp.blogspot.com/-YIfQT6q8ZM4/Vzyq5z1B8HI/AAAAAAAAAAc/UmWSSMLKtKgtH7CACElUp12zXkrPK5UoACLcB/s1600/image00.png', 99)
]

/* - GRAPH STRUCTURE - */

const rings = [ 
    [
        companies[0],
        companies[1],
        companies[2],
    ], [
        companies[3],
        companies[4],
        companies[5],
    ], [
        companies[6],
        companies[7],
        companies[8],
    ] 
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

export { Company }

export { filters }
export { companies }
export { rings }
