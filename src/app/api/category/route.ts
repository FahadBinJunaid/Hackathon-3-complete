import { NextResponse } from "next/server";
import sanity from '../../../../sanityClient'

export async function GET() {
    const query = `*[_type == "product"]{
        category{
            name,
            slug,
          },
    }`;
    const products = await sanity.fetch(query);
    return NextResponse.json(products)
}
