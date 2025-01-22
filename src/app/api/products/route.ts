import { NextResponse } from "next/server";
import sanity from '../../../../sanityClient'

export async function GET() {
    const query = `*[_type == "product"]{
          _id,
          name,
          slug,
          price,
          category->{
            name,
            slug,
          },
          description,
          tags,
          image{
            asset->{
              url
            }
          },
          features,
        }`;
    const products = await sanity.fetch(query);
    return NextResponse.json(products)
}
