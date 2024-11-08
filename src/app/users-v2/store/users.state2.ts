import { EntityState } from "@ngrx/entity";
import { IUser } from "./users.state";

export interface State extends EntityState<IUser>{
    selectedId : number;
}


