import connectDB from "@/config/db";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connectDB();

    const products = await Product.find({}).lean();

    console.log("Backend images data:", products[0]?.images);

    return NextResponse.json({
      success: true,
      products: products.map((product) => ({
        _id: product._id,
        name: product.name,
        category: product.category,
        description: product.description,
        images: Array.isArray(product.images) ? product.images : [], // Ensure images is always an array
        price: product.price,
        offerPrice: product.offerPrice,
      })),
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
