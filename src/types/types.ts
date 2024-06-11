//types.ts
export interface Post {
    id: string;
    title: string;
    slug: string;
    content: string;
    coverImage: string;
    datePublished: string;
    author: {
      name: string;
    };
    tags: string[];
  }