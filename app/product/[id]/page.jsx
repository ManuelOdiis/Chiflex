"use client";
import { useEffect, useState } from "react";
import { assets } from "@/assets/assets";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useParams } from "next/navigation";
import Loading from "@/components/Loading";
import { useAppContext } from "@/context/AppContext";
import React from "react";
import Menubar from "@/components/Menubar";

const Product = () => {
  const { id } = useParams();

  const { products, router, addToCart } = useAppContext();

  const [mainImage, setMainImage] = useState(null);
  const [productData, setProductData] = useState(null);
  

  const fetchProductData = async () => {
    try {
      const productFromContext = products.find((p) => p._id === id);
      if (productFromContext) {
        setProductData({
          ...productFromContext,
          images: productFromContext.images || [] // Ensure images exists
        });
      } else {
        const res = await fetch(`/api/product/${id}`);
        const data = await res.json();
        setProductData({
          ...data.product,
          images: data.product.images || [] // Ensure images exists
        });
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  

  useEffect(() => {
    fetchProductData();
  }, [id, products]);

  if (!productData || !productData._id) {
    return <Loading />;
  }
  

  return productData ? (
    <>
      <Menubar />
      <div className="px-6 md:px-16 lg:px-32 pt-14 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="px-5 lg:px-16 xl:px-20">
          <div className="rounded-lg overflow-hidden bg-gray-500/10 dark:bg-slate-100 mb-4">
              <Image
                src={
                  mainImage || 
                  productData.images?.[0] || 
                  '/default-product-image.png'
                }
                alt={productData.name || "Product image"}
                className="w-full h-auto object-cover mix-blend-multiply"
                width={1280}
                height={720}
                onError={(e) => {
                  e.target.src = '/default-product-image.png';
                }}
              />
            </div>

            <div className="grid grid-cols-4 gap-4">
              {productData.images?.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setMainImage(image)}
                  className="cursor-pointer rounded-lg overflow-hidden bg-gray-500/10 dark:bg-slate-100"
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-auto object-cover mix-blend-multiply"
                    width={300}
                    height={300}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="text-3xl font-medium text-gray-800/90 dark:text-slate-200 mb-4">
              {productData.name}
            </h1>
            <div className="flex items-center gap-2 dark:text-slate-200">
              <div className="flex items-center gap-0.5">
                <Image
                  className="h-4 w-4"
                  src={assets.star_icon}
                  alt="star_icon"
                />
                <Image
                  className="h-4 w-4"
                  src={assets.star_icon}
                  alt="star_icon"
                />
                <Image
                  className="h-4 w-4"
                  src={assets.star_icon}
                  alt="star_icon"
                />
                <Image
                  className="h-4 w-4"
                  src={assets.star_icon}
                  alt="star_icon"
                />
                <Image
                  className="h-4 w-4"
                  src={assets.star_dull_icon}
                  alt="star_dull_icon"
                />
              </div>
              <p>(4.5)</p>
            </div>
            <p className="text-gray-600 dark:text-slate-300 mt-3">{productData.description}</p>
            <p className="text-3xl font-medium mt-6 dark:text-slate-200">
              ${productData.offerPrice}
              <span className="text-base font-normal text-gray-800/60 dark:text-slate-400 line-through ml-2">
                ${productData.price}
              </span>
            </p>
            <hr className="bg-gray-600 my-6" />
            <div className="overflow-x-auto">
              <table className="table-auto border-collapse w-full max-w-72">
                <tbody>
                  <tr>
                    <td className="text-gray-600 font-medium dark:text-slate-200">Brand</td>
                    <td className="text-gray-800/50 dark:text-slate-200">Generic</td>
                  </tr>
                  <tr>
                    <td className="text-gray-600 font-medium dark:text-slate-200">Color</td>
                    <td className="text-gray-800/50 dark:text-slate-200">Multi</td>
                  </tr>
                  <tr>
                    <td className="text-gray-600 font-medium dark:text-slate-200">Category</td>
                    <td className="text-gray-800/50 dark:text-slate-200">{productData.category}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex items-center mt-10 gap-4">
              <button
                onClick={() => addToCart(productData._id)}
                className="w-full py-3.5 bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition"
              >
                Add to Cart
              </button>
              <button
                onClick={() => {
                  addToCart(productData._id);
                  router.push("/cart");
                }}
                className="w-full py-3.5 bg-orange-500 text-white hover:bg-orange-600 transition"
              >
                Buy now
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center mb-4 mt-16">
            <p className="text-3xl font-medium dark:text-slate-200">
              Featured{" "}
              <span className="font-medium text-orange-600">Products</span>
            </p>
            <div className="w-28 h-0.5 bg-orange-600 mt-2"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6 pb-14 w-full">
            {products.slice(0, 5).map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
          <button
          onClick={() => {
            router.push("/all-products");
          }}
          className="px-8 py-2 mb-16 border rounded text-gray-500/70 dark:text-slate-400 hover:bg-slate-50/90 transition">
            See more
          </button>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <Loading />
  );
};

export default Product;
