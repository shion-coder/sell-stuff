import client from './client';

import { Category } from 'types';

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

export interface ListingPost {
  title: string;
  price: string;
  category: Category;
  description: string;
  images: string[];
  location?: { latitude: number; longitude: number };
}

export const getListings = () => client.get<ListingItem[]>(endpoint);

export const addListing = (listing: ListingPost, onUploadProgress: (percent: number) => void) => {
  const data = new FormData();

  data.append('title', listing.title);
  data.append('price', listing.price);
  data.append('categoryId', listing.category.id.toString());
  data.append('description', listing.description);

  listing.images.forEach((image, index) =>
    data.append('images', {
      name: 'image' + index,
      type: 'image/jpeg',
      uri: image,
    })
  );

  if (listing.location) {
    data.append('location', JSON.stringify(listing.location));
  }

  return client.post(endpoint, data, {
    onUploadProgress: (progress) => onUploadProgress(progress.loaded / progress.total),
  });
};
