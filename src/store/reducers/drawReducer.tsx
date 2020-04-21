import * as actionTypes from '../actions/actionTypes';

import { Action, DrawState } from '../../types/State';
import { DrawInterface } from '../../types/Draw';

export default (state: DrawState = { usersDraws: [] }, action: Action) => {
	switch (action.type) {
		case actionTypes.CREATE_DRAW:
			const newDraw: DrawInterface = action.payload;
			return {
				...state,
				usersDraws: state.usersDraws
					? [...state.usersDraws, newDraw]
					: [newDraw],
			};
		case actionTypes.DELETE_DRAW:
			return {
				...state,
				usersDraws: [
					...state.usersDraws.filter(
						draw => draw._id !== action.payload.drawId
					),
				],
				lastDeletedDraw: action.payload.drawId,
			};
		case actionTypes.SET_DRAWS_LIST:
			return {
				...state,
				usersDraws: action.payload.drawsList,
			};
		case actionTypes.EXIT_DRAW:
			return {
				...state,
				usersDraws: [...state.usersDraws!].filter(
					draw => draw._id !== action.payload.drawId
				),
			};
		case actionTypes.UPDATE_DRAW:
			const updatedDraw = action.payload;
			return {
				...state,
				usersDraws: [...state.usersDraws!].map(draw => {
					if (draw._id !== updatedDraw._id) {
						return draw;
					} else {
						return updatedDraw;
					}
				}),
			};
		case actionTypes.SET_CREATOR_RESULTS:
			const { drawId, results } = action.payload;
			return {
				...state,
				usersDraws: [...state.usersDraws].map(draw => {
					if (draw._id === drawId) {
						return {
							...draw,
							results: results,
						};
					}
					return draw;
				}),
			};
		case actionTypes.SET_DRAW_ARCHIVED:
			return {
				...state,
				usersDraws: [...state.usersDraws].map(draw => {
					if (draw._id === action.payload.drawId) {
						return {
							...draw,
							status: 'archived',
						};
					}
					return draw;
				}),
			};
		default:
			return state;
	}
};
