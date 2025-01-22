// lib/storeOrder.ts
import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
import { NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER } from 'next/dist/lib/constants';

// Load environment variables
dotenv.config();

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-01-01',
  token:"skc2sOFlOweRmSKDLl1kSCkQ6RZNr1YS7GJbMXiZ0WQcY6UqubbBYt82YwzHVFWFcbt98dFDnnaCDsb3ml2F5qceRwxpuMgFef72JGsmKMCOo9B1oYljCCOaY21LoR7KD2nGI4ll0EP3JYG5O9djDv0OJtMeHsYhBJvbDlW0dwBQsuy8rhay" ,
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