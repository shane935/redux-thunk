import { Middleware, Dispatch, Action } from "redux";


export type ThunkAction<A extends Action, R, S, E> = (dispatch: Dispatch<A>, getState: () => S,
  extraArgument: E) => R;

declare module "redux" {
  export interface Dispatch<A extends Action> {
    <R, S, E>(asyncAction: ThunkAction<A, R, S, E>): R;
  }
}


declare const thunk: Middleware & {
  withExtraArgument(extraArgument: any): Middleware;
};

export default thunk;
