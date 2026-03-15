export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  specs: Record<string, string>;
  applications: string[];
  featured?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  department: string;
  bio: string;
  image: string;
  email: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  description: string;
  image: string;
}

export interface Client {
  id: string;
  name: string;
  industry: string;
  logo: string;
  description: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
  tags: string[];
}

export interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  salaryRange: string;
}

export interface Stat {
  label: string;
  value: string;
  unit: string;
  number?: string;
  description?: string;
}
