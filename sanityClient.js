import createClient from '@sanity/client';


const sanity = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: '2025-01-13',
  useCdn: true,
});

export default sanity;