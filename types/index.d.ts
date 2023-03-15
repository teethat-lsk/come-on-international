import { List } from 'postcss/lib/list';

export {};

declare global {
  export interface ICategory {
    name: string;
    icon: string;
    examples: List<string>;
  }

  export interface IProduct {
    title: string;
    details: List<string>;
    image: string;
  }
}
