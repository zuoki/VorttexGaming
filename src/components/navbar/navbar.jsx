'use client';
import Link from 'next/link';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { MdDashboardCustomize } from 'react-icons/md';
import './navbar.css';
import { UserButton, useUser } from '@clerk/nextjs';
import vLogo from './vortexLogo.png';
import Image from 'next/image';
import { useStoreCart } from '@/zustand/store';

const NavBar = () => {
	const user = useUser();
	const isLogin = user?.isSignedIn;
	const { gamesInCart } = useStoreCart();
	return (
		<div className="navBar">
			<Link href={'/'}>
				<Image className="imgLogoNavbar" src={vLogo} />
			</Link>
			<div className="sections">
				<Link href={'/'}>
					<h2 className="inicioNavBar">HOME</h2>
				</Link>
				<div className="pointerNone"></div>
				<ul>
					<Link href={'/cart'}>
						{gamesInCart.length === 0 ? (
							<li>
								<FaShoppingCart />
							</li>
						) : (
							<li style={{ display: 'flex', flexDirection: 'row' }}>
								<FaShoppingCart /> <p>({gamesInCart.length})</p>
							</li>
						)}
					</Link>
					{isLogin ? (
						<li>
							<UserButton afterSignOutUrl="/" />
						</li>
					) : (
						<Link href={'/sign-in'}>
							<li>
								<FaUser />
							</li>
						</Link>
					)}
					<Link href={'/panelAdmin'}>
						<li>
							<MdDashboardCustomize />
						</li>
					</Link>
				</ul>
			</div>
		</div>
	);
};

export default NavBar;
