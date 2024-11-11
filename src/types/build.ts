import { Hero } from "./hero";
import { ItemSet } from "./itemSet";

export type Build = {
   name: String;
   description: String;
   createdAt: Date;
   itemSets: ItemSet[]
   hero: Hero; 
}