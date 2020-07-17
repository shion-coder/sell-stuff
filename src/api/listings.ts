import client from './client';

/* -------------------------------------------------------------------------- */

const endpoint = '/listings';

export interface ListingItem {
  id: number;
  title: string;
  price: number;
  images: { url: string; thumbnailUrl: string }[];
  categoryId: number;
  userId: number;
  location: { latitude: number; longitude: number };
}

export const getListings = () => client.get<ListingItem[]>(endpoint);
