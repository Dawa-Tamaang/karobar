import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema(
  {
    want: {
      type: String,
      required: true,
    },
    propertytype: {
      type: String,
      required: true,
    },
    propertyCategory: {
      type: String,
      required: true,
    },
    propertytile: {
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
    floor: {
        type: Number,
        required: true,
      },
    parking: {
    type: Number,
    required: true,
    },
    furnished: {
      type: Boolean,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    offer: {
      type: Boolean,
      required: true,
    },
    imageUrls: {
      type: Array,
      required: true,
    },
    userRef: {
      type: String,
      required: true,
    },
  },{ timestamps: true }
);

const Listing = mongoose.model('Listing', listingSchema);

export default Listing;