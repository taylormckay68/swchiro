'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var filterData = exports.filterData = {
    rooms: ['Bedroom', 'Office', 'Bathroom', 'Outdoor', 'Dining Room', 'Kitchen', 'Living Room', 'Kids Bedroom', 'Entryway'],
    styleData: {
        'all-rooms': ['boho', 'coastal', 'colonial', 'contemporary', 'eclectic', 'farmhouse', 'french-country', 'glam', 'hygge', 'industrial', 'mid-century', 'minimalist', 'modern', 'rustic', 'scandinavian', 'shabby-chic', 'southwestern', 'traditional', 'transitional', 'updated-global', 'urban-industrial'],

        'bedroom': ['coastal', 'farmhouse', 'transitional', 'french-country', 'traditional', 'scandinavian', 'urban-industrial', 'industrial', 'contemporary', 'modern', 'mid-century', 'glam', 'shabby-chic', 'rustic', 'southwestern', 'boho', 'hygge'],

        'office': ['transitional', 'glam', 'traditional', 'scandinavian', 'mid-century', 'rustic', 'boho'],

        'bathroom': ['transitional', 'boho', 'farmhouse', 'modern'],

        'outdoor': ['transitional', 'farmhouse'],

        'dining-room': ['transitional', 'french-country', 'minimalist', 'scandinavian', 'farmhouse', 'boho', 'rustic', 'mid-century', 'modern', 'traditional', 'contemporary', 'hygge', 'coastal'],

        'kitchen': ['farmhouse', 'transitional', 'scandinavian', 'modern', 'rustic', 'glam'],

        'living-room': ['transitional', 'scandinavian', 'modern', 'boho', 'eclectic', 'minimalist', 'updated-global', 'farmhouse', 'glam', 'mid-century', 'contemporary', 'colonial', 'traditional']
    }
};
var styleData = exports.styleData = {
    'bedroom': ['coastal', 'farmhouse', 'transitional', 'french-country', 'traditional', 'scandinavian', 'urban-industrial', 'industrial', 'contemporary', 'modern', 'mid-century', 'glam', 'shabby-chic', 'rustic', 'southwestern', 'boho', 'hygge'],
    'office': ['transitional', 'glam', 'traditional', 'scandinavian', 'mid-century', 'rustic', 'boho'],
    'bathroom': ['transitional', 'boho', 'farmhouse', 'modern'],
    'outdoor': ['transitional', 'farmhouse'],
    'dining-room': ['transitional', 'french-country', 'minimalist', 'scandinavian', 'farmhouse', 'boho', 'rustic', 'mid-century', 'modern', 'traditional', 'contemporary', 'hygge', 'coastal'],
    'kitchen': ['farmhouse', 'transitional', 'scandinavian', 'modern', 'rustic', 'glam'],
    'living-room': ['transitional', 'scandinavian', 'modern', 'boho', 'eclectic', 'minimalist', 'updated-global', 'farmhouse', 'glam', 'mid-century', 'contemporary', 'colonial', 'traditional']
};

var config = exports.config = {
    // title: 'Test3',
    loop: true,
    completeGrid: true,
    margins: {
        outer: [24, 24, 24, 80, 80],
        XS: [12, 12],
        S: [16, 16],
        M: [16, 16],
        L: [16, 16],
        XL: [16, 16],
        XXL: [16, 16]
    },
    verticalAspectRatio: 1.25,
    sameHeight: true,
    globalStyles: {
        slideStyle: {},
        textStyle: {
            // color: 'blue',
            fontFamily: 'Times New Roman'
        },
        imageMask: {
            // color: 'lightgray',
            opacity: 0.3
        },
        large: {
            imageMask: {
                // color: 'blue',
                // opacity: 0.7
            },
            textStyle: {
                // color: 'green',
            }
        },
        small: {
            imageMask: {
                // color: 'red'
            },
            textStyle: {
                // color: 'brown'
            }
        }
    },
    grid: {
        "XS": {
            order: ['S', 'S', 'L'],
            length: 3
        },
        "S": {
            order: ['L', 'S', 'S', 'S', 'S', 'S', 'L'],
            length: 7
        },
        "M": {
            order: ['L', 'S', 'S', 'S', 'S', 'L'],
            length: 6
        },
        "L": {
            order: ['L', 'S', 'S', 'S', 'S', 'L'],
            length: 6
        },
        "XL": {
            order: ['L', 'S', 'S', 'S', 'S', 'L', 'S', 'S'],
            length: 8
        },
        "XXL": {
            order: ['L', 'S', 'S', 'S', 'S', 'L', 'S', 'S', 'L'],
            length: 9
        }
    },
    data: [{
        imageUrl: 'https://ak1.ostkcdn.com/img/mxc/09102018_deals_department_silo4_arearugs.jpg',
        redirectUrl: 'https://www.overstock.com/Home-Garden/Area-Rugs/244/cat.html?TID=SALESDEALS:04:04:AreaRugs',
        text: 'Hello'
    }, {
        imageUrl: 'https://ak1.ostkcdn.com/img/mxc/09102018_deals_department_silo1_livingroom.jpg',
        redirectUrl: 'https://www.overstock.com/Home-Garden/Living-Room-Furniture/713/cat.html?TID=SALESDEALS:04:01:LivingRoomFurniture',
        text: 'Hello'
    }, {
        imageUrl: 'https://ak1.ostkcdn.com/img/mxc/09102018_deals_department_silo7_beddingbath.jpg',
        redirectUrl: 'https://www.overstock.com/Bedding-Bath/43/store.html?TID=SALESDEALS:04:07:BedBath',
        text: 'Hello'
    }, {
        imageUrl: 'https://ak1.ostkcdn.com/img/mxc/09102018_deals_department_silo3_bedroom.jpg',
        redirectUrl: 'https://www.overstock.com/Home-Garden/Bedroom-Furniture/710/cat.html?TID=SALESDEALS:04:03:BedroomFurniture',
        text: 'Hello'
    }, {
        imageUrl: 'https://ak1.ostkcdn.com/img/mxc/09102018_deals_department_silo17_officefurniture.jpg',
        redirectUrl: 'https://www.overstock.com/Home-Garden/Home-Office-Furniture/712/cat.html?TID=SALESDEALS:04:17:OfficeFurniture',
        text: 'Hello'
    }, {
        imageUrl: 'https://ak1.ostkcdn.com/img/mxc/09102018_deals_department_silo2_diningroom.jpg',
        redirectUrl: 'https://www.overstock.com/Home-Garden/Dining-Room-Bar-Furniture/711/cat.html?TID=SALESDEALS:04:02:DiningRoomFurniture',
        text: ''
    }, {
        imageUrl: 'https://ak1.ostkcdn.com/img/mxc/09102018_deals_department_silo8_lighting.jpg',
        redirectUrl: 'https://www.overstock.com/Home-Garden/Lighting-Ceiling-Fans/300/cat.html?TID=SALESDEALS:04:08:Lighting',
        text: ''
    }, {
        imageUrl: 'https://ak1.ostkcdn.com/img/mxc/09102018_deals_department_silo5_mattress.jpg',
        redirectUrl: 'https://www.overstock.com/Mattresses-and-Memory-Foam,/products,/results.html?TID=SALESDEALS:04:05:Mattresses',
        text: ''
    }, {
        imageUrl: 'https://ak1.ostkcdn.com/img/mxc/09102018_deals_department_silo6_homedecor.jpg',
        redirectUrl: 'https://www.overstock.com/Home-Garden/Home-Decor/3/dept.html?TID=SALESDEALS:04:06:Decor',
        text: ''
    }, {
        imageUrl: 'https://ak1.ostkcdn.com/img/mxc/09102018_deals_department_silo16_storageorganization.jpg',
        redirectUrl: 'https://www.overstock.com/Home-Garden/Storage-Organization/950/cat.html?TID=SALESDEALS:04:16:StorageOrganization',
        text: ''
    }]
};