import {Category} from "./category";

export interface Exercise{
  id : number;
  name : string;
  categoryId : number
  description: string;
  url : string;
}
