import {Exercise} from "./exercise";
import {User} from "./User";

export interface Favorite{
  id:number,
  user:User,
  exercises:Exercise []
}
