import { Schema, model } from 'mongoose';

// Define a Variant schema
const variantSchema = new Schema({
  type: {
    type: String,
    required: [true, 'Variant type is required'],
    trim: true,
  },
  value: {
    type: String,
    required: [true, 'Variant value is required'],
    trim: true,
  },
});

// Define an Inventory schema
const inventorySchema = new Schema({
  quantity: {
    type: Number,
    required: [true, 'Inventory quantity is required'],
    min: [0, 'Quantity cannot be less than 0'],
  },
  inStock: {
    type: Boolean,
    required: [true, 'InStock status is required'],
  },
});

// Define the Product schema
const productSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Product description is required'],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'Product price is required'],
    min: [0, 'Price cannot be less than 0'],
  },
  category: {
    type: String,
    required: [true, 'Product category is required'],
    trim: true,
  },
  tags: {
    type: [String],
    required: [true, 'Product tags are required'],
    validate: [Array.isArray, 'Tags must be an array of strings'],
  },
  variants: {
    type: [variantSchema],
    required: [true, 'Product variants are required'],
  },
  inventory: {
    type: inventorySchema,
    required: [true, 'Inventory information is required'],
  },
});

// Create and export the Product model
const Product = model('Product', productSchema);
export default Product;
