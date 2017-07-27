// GET 'home' page
module.exports.homelist = (req, res, next) => {
    res.render('locations-list', {
        title: 'Home',
        pageHeader: {
            title: 'Llamas on the Loose',
            strapline: 'Find places to get your llamas'
        },
        locations: [
            {
                name: 'Starcups',
                address: '124 High Street, Reading Railroad, GA',
                rating: '3',
                facilities: ['Hot drinks', 'food', 'Premium Wifi'],
                distance: '100m'
            },
            {
                name: 'Cafe Hero',
                address: '124 High Street, Reading Railroad, GA',
                rating: '4',
                facilities: ['Hot drinks', 'food', 'Premium Wifi'],
                distance: '200m'
            },
            {
                name: 'Burger Queen',
                address: '124 High Street, Reading Railroad, GA',
                rating: '2',
                facilities: ['Hot drinks', 'food', 'Premium Wifi'],
                distance: '250m'
            },
            {
                name: 'The Farm',
                address: '200 Bivins Rd. Villa Rica, GA 30180',
                rating: '5',
                facilities: ['Eggs', 'Fruit', 'Llama whool'],
                distance: '10m'
            },
        ]
    });
}

module.exports.locationInfo = (req, res, next) => {
    res.render('location-info', {
        title: 'Starcups',
        info: {
            rating: 4,
            address: '200 Bivins Rd. Villa Rica, GA 30180',
            openingHours: [
                'Monday - Friday : 7:00 am - 5:00 pm',
                'Saturday : 8:00 am - 5:00 pm',
                'Sunday : Open all day long.'
            ],
            facilities: ['Eggs', 'Fruit', 'Llama whool'],
            map: {
                lat: 51.455041,
                long: -0.9690884
            },
            reviews: [
                {
                    rating: 3,
                    name: 'Simon Says',
                    timestamp: '16 July 2017',
                    review: 'What a great awesome place.  It don\'t get much better than this'
                },
                {
                    rating: 1,
                    name: 'Roger Doger',
                    timestamp: '16 July 2015',
                    review: 'The food was terrible.  Never ever ever ever go to this place'
                }
            ]
        }
        
    });
}

module.exports.addReview = (req, res, next) => {
    res.render('location-review-form', {
        title: 'Add Review',
        location: 'Starcups'
    });
}
