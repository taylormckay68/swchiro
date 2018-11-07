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
    linkSamePage: true,
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
    data: []
};