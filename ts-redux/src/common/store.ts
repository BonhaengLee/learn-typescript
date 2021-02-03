import { createStore } from "redux";
import { combineReducers } from "redux";
import person, { StatePerson } from "../person/state/reducer";
import product, { StateProduct } from "../product/state/reducer";
// @ : 1) 모든 리듀서의 상탯값을 모은다.
export interface ReduxState {
    person: StatePerson;
    product: StateProduct;
}
// @ : 2) combineReducers의 제네릭으로 ReduxState 입력 
const reducer = combineReducers<ReduxState>({
    person,
    product,
});
export const store = createStore(reducer);
