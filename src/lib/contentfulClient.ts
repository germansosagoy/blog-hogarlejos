// import { createClient } from "contentful";
// import {Post} from '@types/types';

// const client = createClient({
//     space: import.meta.env.VITE_CONTENTFUL_SPACE_ID as string,
//     accessToken: import.meta.env.VITE_CONTENTFUL_DELIVERY_TOKEN as string,
//     environment: import.meta.env.VITE_CONTENTFUL_ENVIRONMENT || 'master'
// });

// export const fetcher: () => Promise<Post[]> = async () => {
//   try {
//     const response = await client.getEntries<Post>({ content_type: 'blog' });
//     return response.items.map((item: any) => {
//       const { sys, fields } = item;
//       const { title, slug, content, coverImage, datePublished, author, tags } = fields || {};

//       if (!sys?.id || !title || !slug || !content || !coverImage?.fields?.file?.url || !datePublished || !author || !tags) {
//         console.warn('Missing fields for item:', item);
//         return null;
//       }

//       return {
//         id: sys.id,
//         title,
//         slug,
//         content,
//         coverImage: coverImage.fields.file.url,
//         datePublished,
//         author: { name: author },
//         tags,
//       };
//     }).filter((post: Post | null): post is Post => post !== null); // Filtrar posts inválidos
//   } catch (error) {
//     console.error('Error fetching posts:', error);
//     throw error;
//   }
// };

// export default client;
