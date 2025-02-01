// ../api/order/route.ts
import { createClient } from '@sanity/client';
import { NextResponse } from 'next/server';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-01-01',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: false,
});

// Function to save the order
const storeOrder = async (orderData: any) => {
  try {
    const order = await client.create({
      _type: 'order',
      name: orderData.name,
      email: orderData.email,
      address: orderData.address,
      city: orderData.city,
      postalCode: orderData.postalCode,
      country: orderData.country,
      phoneNumber: orderData.phoneNumber,
      cartItems: orderData.cartItems.map((item: any) => ({
        productId: item.productId,
        productName: item.productName, // Include the product name
        quantity: item.quantity,
      })),
      subtotal: orderData.subtotal,
    });
    return order;
  } catch (error) {
    console.error('Error storing order:', error);
    throw new Error('Failed to store order');
  }
};

// API Route Handler for POST request
export async function POST(req: Request) {
  try {
    const orderData = await req.json(); // Extract order data from request body
    const savedOrder = await storeOrder(orderData); // Store order in Sanity
    return NextResponse.json(savedOrder, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ message: 'Failed to store order', error: error.message }, { status: 500 });
    }
    return NextResponse.json({ message: 'Failed to store order', error: 'Unknown error' }, { status: 500 });
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
}
