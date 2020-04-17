import React from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

// Types
import { StateInterface } from '../../types/State';

// MUI
import { Box, Typography, Button, SvgIcon } from '@material-ui/core';

// Components
import WishesList from '../../components/WishesList/WishesList';
import PageWrapper from '../../components/PageWrapper/PageWrapper';

const Wishlist: React.FC = () => {
	const history = useHistory();
	const usersWishes = useSelector(
		(state: StateInterface) => state.usersWishes
	);

	const navigateToUserWishes = () => {
		history.push('/nowe-zyczenie');
	};
	return (
		<PageWrapper>
			<Typography variant="h4" component="h2" align="center">
				Lista życzeń
			</Typography>
			{usersWishes && usersWishes.length > 0 ? (
				<>
					<WishesList wishesList={usersWishes} viewMode="creator" />
					<Box display="flex" justifyContent="center" margin="1rem 0">
						<Button
							color="primary"
							variant="contained"
							onClick={navigateToUserWishes}
						>
							Dodaj nowe życzenie
						</Button>
					</Box>
				</>
			) : (
				<Box
					margin="2rem"
					minHeight="10rem"
					display="flex"
					justifyContent="space-around"
					alignItems="center"
					flexDirection="column"
					textAlign="center"
				>
					<SvgIcon
						color="disabled"
						style={{
							width: '60px',
							height: '60px',
							margin: '1rem',
						}}
					>
						<svg
							height="24px"
							viewBox="-2 0 481 481.87474"
							width="24px"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="m59.347656 352.972656c.804688.792969 1.773438 1.40625 2.839844 1.789063v119.113281c0 4.417969 3.582031 8 8 8h368c4.417969 0 8-3.582031 8-8v-192c0-4.417969-3.582031-8-8-8h-40.0625c8.109375-10.578125 16.0625-23.34375 16.0625-32-.007812-13.304688-8.25-25.214844-20.695312-29.914062-12.449219-4.699219-26.503907-1.207032-35.304688 8.769531-8.800781-9.976563-22.855469-13.46875-35.304688-8.769531-12.445312 4.699218-20.6875 16.609374-20.695312 29.914062 0 8.65625 7.953125 21.421875 16.0625 32h-168.496094l34.035156-34.03125 56.566407-56.570312 113.144531-113.144532c3.121094-3.121094 3.121094-8.1875 0-11.308594l-56.566406-56.570312c-3.175782-3-8.140625-3-11.3125 0l-74.546875 74.542969c-26.125-20.453125-57.261719-33.238281-72.535157-17.972657-10.023437 10.023438-7.910156 26.925782.503907 44.742188l-34.941407 34.953125c-17.824218-8.410156-34.730468-10.527344-44.753906-.496094-15.257812 15.246094-2.472656 46.398438 17.984375 72.519531l-74.550781 74.535157c-3.125 3.125-3.125 8.1875 0 11.3125zm258.839844-111.097656c0-8.835938 7.164062-16 16-16s16 7.164062 16 16v2.160156c0 4.417969 3.582031 8 8 8s8-3.582031 8-8v-2.160156c0-8.835938 7.164062-16 16-16s16 7.164062 16 16c-4.589844 12.03125-11.695312 22.941406-20.847656 32h-38.304688c-9.148437-9.058594-16.257812-19.96875-20.847656-32zm-24 48h136v176h-136zm-64 0h48v176h-48zm-16 0v176h-136v-120h-.441406l56.441406-56.433594v.433594zm-36.046875-67.007812-45.257813-45.257813 45.257813-45.253906 45.253906 45.253906zm113.136719-203.648438 45.253906 45.257812-101.824219 101.820313-45.253906-45.222656zm-141.425782 50.910156c1.914063-1.539062 4.351563-2.273437 6.800782-2.054687 8.917968 0 24.488281 5.832031 43.03125 20.105469l-27.199219 27.199218-4.578125 4.582032c-19.320312-25.078126-23.175781-44.710938-18.054688-49.832032zm-2.703124 48c2.863281 4.496094 6 8.945313 9.375 13.257813l-24.648438 24.648437c-4.3125-3.375-8.757812-6.511718-13.246094-9.382812zm-76.488282 31.203125c1.910156-1.539062 4.339844-2.277343 6.785156-2.058593 8.925782 0 24.503907 5.824218 43.046876 20.105468l-4.578126 4.574219-27.199218 27.203125c-19.328125-25.082031-23.175782-44.714844-18.054688-49.824219zm50.910156 39.589844 45.257813 45.257813-101.824219 101.824218-45.214844-45.257812zm0 0" />
							<path d="m422.1875 108.730469c-8.800781-9.976563-22.855469-13.46875-35.304688-8.769531-12.445312 4.699218-20.6875 16.609374-20.695312 29.914062 0 17.375 37.777344 64 56 64s56-46.625 56-64c-.007812-13.304688-8.25-25.214844-20.695312-29.914062-12.449219-4.699219-26.503907-1.207032-35.304688 8.769531zm40 21.144531c-.175781 10.03125-30.9375 46.824219-39.871094 48-9.191406-1.183594-39.953125-37.976562-40.128906-48 0-8.835938 7.164062-16 16-16s16 7.164062 16 16v2.160156c0 4.417969 3.582031 8 8 8s8-3.582031 8-8v-2.160156c0-8.835938 7.164062-16 16-16s16 7.164062 16 16zm0 0" />
							<path d="m422.1875 25.875c-4.417969 0-8 3.582031-8 8v8h-8c-4.417969 0-8 3.582031-8 8s3.582031 8 8 8h8v8c0 4.417969 3.582031 8 8 8s8-3.582031 8-8v-8h8c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8h-8v-8c0-4.417969-3.582031-8-8-8zm0 0" />
							<path d="m318.1875 153.875c0 4.417969-3.582031 8-8 8s-8-3.582031-8-8 3.582031-8 8-8 8 3.582031 8 8zm0 0" />
							<path d="m246.1875 257.875c4.417969 0 8-3.582031 8-8v-8h8c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8h-8v-8c0-4.417969-3.582031-8-8-8s-8 3.582031-8 8v8h-8c-4.417969 0-8 3.582031-8 8s3.582031 8 8 8h8v8c0 4.417969 3.582031 8 8 8zm0 0" />
							<path d="m462.1875 233.875c0 4.417969-3.582031 8-8 8s-8-3.582031-8-8 3.582031-8 8-8 8 3.582031 8 8zm0 0" />
						</svg>
					</SvgIcon>
					<Typography style={{ margin: '1rem 0' }}>
						Nie posiadasz jeszcze żadnych życzeń.
					</Typography>
					<Button
						color="primary"
						variant="contained"
						onClick={navigateToUserWishes}
					>
						Dodaj pierwsze życzenie
					</Button>
				</Box>
			)}
		</PageWrapper>
	);
};
export default Wishlist;
