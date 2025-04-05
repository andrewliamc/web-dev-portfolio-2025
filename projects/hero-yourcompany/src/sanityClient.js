// src/sanityClient.js
import { createClient } from '@sanity/client';

export default createClient({
    projectId: '10ik31dc', // Replace with your actual project ID
    dataset: 'production', // Replace with your dataset if different
    useCdn: true,         // `false` if you want fresh data
    apiVersion: '2023-07-19', // Use a recent date as the API version
});