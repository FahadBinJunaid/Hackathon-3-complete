// ../api/order/route.ts
import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
import { NextApiRequest, NextApiResponse } from 'next';

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

// API handler for POST request
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const orderData = req.body; // Extract order data from request body
      const savedOrder = await storeOrder(orderData); // Call storeOrder function
      return res.status(200).json(savedOrder); // Send back the saved order as a response
    } catch (error: unknown) {
      if (error instanceof Error) {
        // Check if error is an instance of Error
        return res.status(500).json({ message: 'Failed to store order', error: error.message });
      }
      return res.status(500).json({ message: 'Failed to store order', error: 'Unknown error' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' }); // Handle unsupported methods
  }
}
