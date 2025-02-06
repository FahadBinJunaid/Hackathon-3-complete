import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";


interface Product {
  slug: any;
  description: string ;
  _id: string;
  name: string;
  price: number;
  image: string;
  category: {
    name: string;
    slug: { current: string };
  };
}

interface Props {
  params: {
    slug: string;
  };
}

async function getProductsByCategory(slug: string) {
  const query = groq`*[_type == "product" && category.slug.current == $slug]{
    _id,
    name,
    price,
    description,
    "image": image.asset->url,
    category
  }`;

  return client.fetch(query, { slug });
}

export default async function CategoryPage({ params }: Props) {
  const products = await getProductsByCategory(params.slug);

  return (
    
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8 pt-16 mt-16">
        <h1 className="text-3xl font-bold mb-8 capitalize">{params.slug} Products</h1>
        
        {products.length === 0 ? (
          <div className="text-xl text-gray-600 text-center">
            No products found in this category
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {products.map((product: Product) => (
              <div key={product._id} className="group cursor-pointer border p-4 rounded-lg">
                
                <Link
                    href={{
                      pathname: `/product/${product._id && product.slug?.current}`,
                      query: {
                        name: product.name,
                        price: product.price,
                        image: product.image,
                        description: product.description,
                      },
                    }}
                  >
                  <div className="aspect-square mb-4 bg-neutral-100 relative overflow-hidden">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-200">
                        No Image
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                  <p className="text-lg text-neutral-600">£{product.price}</p>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
