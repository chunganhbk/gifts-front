import { put, select } from "redux-saga/effects";
import axios from "axios";
import * as actionTypes from "../../actions/actionTypes";

// Utils
import { getLoggedUser } from "../utils/selectors";

export function* fetchShoppingList() {
    const grapghqlQuery = {
        query: `{getShoppingList {_id title link imageUrl description price forDraw creator {_id username email}}}`,
    };
    try {
        const response = yield axios.post("graphql", grapghqlQuery);
        if (!response.data.data) {
            throw new Error();
        }
        yield put({
            type: actionTypes.SET_SHOPPING_LIST,
            payload: {
                shoppingList: response.data.data.getShoppingList,
                loggedUser: yield select(getLoggedUser),
            },
        });
    } catch (error) {
        yield put({
            type: actionTypes.SET_ERROR,
            payload: {
                category: "wishes",
                message:
                    "Wystąpił błąd podczas pobierania listy zakupów, spróbuj ponownie później",
            },
        });
    }
}