import React from 'react';
import { useDispatch } from 'react-redux';

// Types
import { WishesListProps } from '../../interfaces/WishTypes';

// MUI
import { List } from '@material-ui/core';

// Components
import WishBox from '../WishBox/WishBox';

const WishesList: React.FC<WishesListProps> = ({ wishesList, viewMode }) => {
	const dispatch = useDispatch();
	const handleDeleteWish = (wishId: string) => {
		console.log(wishId);
		dispatch({ type: 'DELETE_WISH_WATCHER', payload: { wishId: wishId } });
	};
	return (
		<List style={{ maxWidth: '600px', margin: 'auto' }}>
			{wishesList.map(wish => (
				<WishBox
					wish={wish}
					key={wish._id}
					view={viewMode === 'creator' ? 'full' : 'simple'}
					deleteWish={_ => handleDeleteWish(wish._id)}
				/>
			))}
		</List>
	);
};

export default WishesList;
