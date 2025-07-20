export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  author: string;
  authorImage: string;
  content: string;
};

export type GalleryImage = {
  src: string;
  title: string;
};