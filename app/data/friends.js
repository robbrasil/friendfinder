// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [
    {
        "name": "Putin",
        "photo": "http://i.telegraph.co.uk/multimedia/archive/03491/Vladimir_Putin_1_3491835k.jpg",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },
    {
        "name": "Trump",
        "photo": "http://www.thewrap.com/wp-content/uploads/2015/11/Donald-Trump.jpg",
        "scores": [
            3,
            2,
            5,
            3,
            2,
            1,
            2,
            3,
            2,
            2
        ]
    },
    {
        "name": "Obama",
        "photo": "http://cyclicom.typepad.com/.a/6a00d8341d74dc53ef01310f38a565970c-800wi",
        "scores": [
            1,
            3,
            4,
            5,
            4,
            3,
            2,
            1,
            2,
            3
        ]
    },
    {
        "name": "Hillary",
        "photo": "http://www.thewomenseye.com/wp-content/uploads/2013/02/Hillary_Clinton_official_Secretary_of_State_portrait_crop-479x386-300x241.jpg",
        "scores": [
            1,
            2,
            3,
            2,
            3,
            2,
            1,
            4,
            3,
            3
        ]
    },
    {
        "name": "Arnold",
        "photo": "http://www.planetc1.com/n/images/governor-schwarzenegger.jpg",
        "scores": [
            4,
            5,
            5,
            5,
            4,
            4,
            3,
            4,
            5,
            4
        ]
    },
    {
        "name": "Justin",
        "photo": "http://tibet.net/wp-content/uploads/2015/10/trudeau-aboriginal-women-102015.jpg",
        "scores": [
            1,
            2,
            2,
            1,
            2,
            3,
            3,
            3,
            2,
            1
        ]
    }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;