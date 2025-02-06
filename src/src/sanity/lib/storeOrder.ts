// lib/storeOrder.ts
import { createClient } from '@sanity/client';
import dotenv from 'dotenv';


// Load environment variables
dotenv.config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-01-01',
  token: process.env.TOKEN,
  useCdn: false,
});



// Function to save the order
export const storeOrder = async (orderData: any) => {
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