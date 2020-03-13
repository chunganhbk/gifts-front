import React from 'react';
import { Drawer, List } from '@material-ui/core';

// Components
import NavigationItem from '../NavigationItem/NavigationItem';

// Icons
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ListIcon from '@material-ui/icons/List';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import PeopleIcon from '@material-ui/icons/People';

interface NavigationDrawerProps {
	opened: boolean;
	toggleNavigationDrawer: () => void;
}

const NavigationDrawer = ({
	opened,
	toggleNavigationDrawer,
}: NavigationDrawerProps) => {
	return (
		<Drawer anchor="left" open={opened} onClose={toggleNavigationDrawer}>
			<List>
				<NavigationItem
					target="/nowe-losowanie"
					icon={<AddCircleIcon />}
					text="Stwórz nowe losowanie"
				/>
				<NavigationItem
					target="/moje-losowania"
					icon={<ListIcon />}
					text="Moje losowania"
				/>
				<NavigationItem
					target="/lista-zyczen"
					icon={<CardGiftcardIcon />}
					text="Lista życzeń"
				/>
				<NavigationItem
					target="/znajomi"
					icon={<PeopleIcon />}
					text="Znajomi"
				/>
			</List>
		</Drawer>
	);
};
export default NavigationDrawer;
