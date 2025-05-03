import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    offerPrice: { type: Number, required: true },
    images: { type: [String], required: true }, // This defines an array of strings
    category: { type: String, required: true },
    date: { type: Number, required: true },
}, { collection: 'products' }); // Explicit collection name

// Clear any existing model
delete mongoose.connection.models['product'];

const Product = mongoose.models.Product || mongoose.model('product', productSchema);

export default Product