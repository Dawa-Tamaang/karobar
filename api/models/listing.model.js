import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    propertytype: {
      type: String,
      required: true,
    },
    propertycategory: {
      type: String,
      required: true,
    },
    propertytitle: {
        type: String,
        required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    roadsize: {
      type: Number,
      required: true,
    },
    roadmeasuretype: {
        type: String,
        required: true,
      },
    roadtype: {
    type: String,
    required: true,
    },
    dis_from_mr: {
      type: Number,
      required: true,
    },
    disfrommainroadtype: {
      type: String,
      required: true,
    },
    buildyear: {
      type: String,
      required: true,
    },
    totalfloor: {
      type: String,
      required: true,
    },
    furnishing: {
      type: String,
      required: true,
    },
    totalpropertyarea: {
      type: String,
      required: true,
    },
    propertyareameasurement: {
      type: String,
      required: true,
    },
    builduparea: {
      type: String,
      required: true,
    },
    buildupareameasurement: {
      type: String,
      required: true,
    },
    propertyface: {
      type: String,
      required: true,
    },
    bedrooms: {
      type: String,
      required: true,
    },
    bathrooms: {
      type: String,
      required: true,
    },
    livinghall: {
      type: String,
      required: true,
    },
    kitchen: {
      type: String,
      required: true,
    },
    parking: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    ownername: {
      type: String,
      required: true,
    },
    owneremail: {
      type: String,
      required: true,
    },
    ownercontact: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: Array,
      required:true
    },
    userRef: {
      type: String,
      required: true,
    },
  },{ timestamps: true }
);

const Listing = mongoose.model('Listing', listingSchema);

export default Listing;