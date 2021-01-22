// NOTE: 상태의 타입과 액션의 타입을 준비
import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type TodosAction = ActionType<typeof actions>;

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export type TodosState = Todo[];
