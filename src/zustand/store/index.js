import { create } from 'zustand';
import Swal from 'sweetalert2';

export const useStoreCart = create((set) => ({
	data: [],
	userId: null,
	gamesInCart: [],

	setUserId: (id) =>
		set((state) => {
			const storedGamesInCart =
				typeof window !== 'undefined'
					? JSON.parse(localStorage.getItem('gamesInCart' + id))
					: [];
			return { userId: id, gamesInCart: storedGamesInCart || [] };
		}),

	//Storage
	addGamesToCart: (games) => {
		const baseURL =
			process.env.NODE_ENV === 'development'
				? process.env.NEXT_PUBLIC_URL_REQUESTS_SEND_CART_LOCAL
				: process.env.NEXT_PUBLIC_URL_REQUESTS_SEND_CART_DEPLOY;
		set((state) => {
			for (let i = 0; i < state.gamesInCart.length; i++) {
				if (state.gamesInCart[i].title === games.title) {
					Swal.fire({
						icon: 'warning',
						iconColor: '#FF9500',
						background: '#333',
						html: '<span style="color: orange;"></span>',
						footer: `<p>You have already this game in you cart!.</p>`,
						color: '#FF9500',
					});
					return state.gamesInCart;
				}
			}

			if (state.gamesInCart.length < 4) {
				const newGamesInCart = [...state.gamesInCart, games];
				Swal.fire({
					icon: 'success',
					iconColor: 'green',
					titleText: 'GAME ADD TO CART',
					background: '#333333',
					color: '#FF9500',
					html: '<span style="color: orange;"></span>',
					footer: `<a href="${baseURL}">Success! The game has been added to your shopping cart.</a>`,
				});
				if (typeof window !== 'undefined') {
					localStorage.setItem(
						'gamesInCart' + state.userId,
						JSON.stringify(newGamesInCart)
					);
				}
				return { gamesInCart: newGamesInCart };
			} else {
				Swal.fire({
					icon: 'warning',
					iconColor: 'yellow',
					titleText: 'WARNING...',
					background: '#333333',
					color: '#FF9500',
					html: '<span style="color: orange;">No more than 4 games can be added in a single purchase</span>',
					footer: `<a href="${baseURL}">Complete your cart purchase or remove the games.</a>`,
					confirmButtonColor: '#3333;',
				});

				return state;
			}
		});
	},

	removeGameFromCart: (gameID) => {
		set((state) => {
			const newGamesInCart = state.gamesInCart.filter(
				(game) => game.id !== gameID
			);
			if (typeof window !== 'undefined') {
				localStorage.setItem(
					'gamesInCart' + state.userId,
					JSON.stringify(newGamesInCart)
				);
			}
			return { gamesInCart: newGamesInCart };
		});
	},

	emptyCart: () => {
		set((state) => {
			if (typeof window !== 'undefined') {
				localStorage.removeItem('gamesInCart' + state.userId);
			}
			return { gamesInCart: [] };
		});
	},

	getGames: (games) => {
		if (typeof window === 'undefined') return;
		set((state) => {
			return { ...state, data: games };
		});
	},
}));
