import {Exercise} from "./exercise";

export interface Favorite{
  id:number,
  user_id:number,
  exercises:Exercise []
}
