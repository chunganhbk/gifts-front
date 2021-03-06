import { put } from 'redux-saga/effects';
import axios from 'axios';
import * as actionTypes from '../../actions/actionTypes';
import * as actionCreators from '../../actions/actionCreators';

export function* deleteDraw(action: {
	type: string;
	payload: { drawId: string; drawTitle: string };
}) {
	const graphqlQuery = {
		query: `
            mutation {
                deleteDraw(drawId: "${action.payload.drawId}") {success}
            }
        `,
	};
	yield put(
		actionCreators.setLoading({
			loading: true,
			category: 'draws',
			type: 'edited-record',
			recordId: action.payload.drawId,
			operationType: 'cancel',
		})
	);
	try {
		const response = yield axios.post('graphql', graphqlQuery);
		if (response.data.data.deleteDraw.success) {
			yield put({
				type: actionTypes.DELETE_DRAW,
				payload: action.payload,
			});
			yield put(
				actionCreators.setSuccess({
					page: 'draws',
					id: 'delete-draw',
					message: `Poprawnie usunięto losowanie "${action.payload.drawTitle}"`,
				})
			);
		} else {
			throw new Error();
		}
	} catch (err) {
		yield put({
			type: actionTypes.SET_ERROR,
			payload: {
				category: 'draws',
				message:
					'Wystąpił błąd podczas usuwania losowania, spróbuj ponownie później',
			},
		});
	}
	yield put(actionCreators.setLoading({ loading: false }));
}
