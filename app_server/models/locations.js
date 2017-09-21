var mongoose = require('mongoose');

// We are going to add the openingTimesSchema and reviewSchema which is
// part of the locationSchema.

// In a relational database we would put this in a separate table and
// locationSchema would link to it using a foreign key.  That is not how
// Document databases work.  the Opening Times will be a sub-document of
// locationsSchema.

var openingTimeSchema = new mongoose.Schema({
    days: {
        type: String,
        required: true,
    },
    opening: String,
    closing: String,
    closed: {
        type: Boolean,
        required: true
    }
});

var reviewSchema = new mongoose.Schema({
    author: String,
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    reviewText: String,
    createdOn: {
        type: Date,
        "default": Date.now
    }
});


// MongoDB supports datatypes for dealing with geospatial coordinates.
// Indexing helps find what you are looking for easier in a db.
// We use the index type, '2dsphere' to index geo coordinates.
// It allows MongoDB to calculate geometries based on a spherical object.
var locationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: String, 
    rating: {
        type: Number,
        'default': 0,
        min: 0,
        max: 5
    },
    facilities: [String],
    coords: {type: [Number], index: '2dsphere'},
    // Here we map the openingTimeSchema to be a sub-document of locationsSchema
    openingTimes: [openingTimeSchema],
    reviews: [reviewSchema]
});

// This creates a model in the actual MongoDB database
mongoose.model('Location', locationSchema);

