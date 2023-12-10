'use client';
import './panelAdmin.css';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/clerk-react';
import { FaUser, FaThList } from 'react-icons/fa';
import { BiSolidCategory, BiSupport } from 'react-icons/bi';
import { MdDiscount, MdBuild } from 'react-icons/md';
import { LuLayoutPanelLeft } from 'react-icons/lu';
import { useOrganization, useOrganizationList } from '@clerk/nextjs';
import Link from 'next/link';
import { useEffect } from 'react';

const Page = () => {
	// const { roles } = useUser();
	const user = useUser();
	// const {
	//   isLoaded,
	//   organization,
	//   membership,
	//   invitations,
	//   memberships,
	//   membershipRequests,
	//   domains,
	// } = ;
	// const { organizationMembership } = useOrganization();
	const { organizationList, isLoaded, setActive } = useOrganizationList();

	// const role = organizationMembership;
	// console.log(role);
	const router = useRouter();

	useEffect(() => {
		if (isLoaded) {
			// Find the admin organization from the loaded organization list
			const adminOrganization = organizationList.find(
				(org) => org.membership.role === 'admin'
			);

			// If the user is not an admin, redirect to the homepage
			if (!adminOrganization || adminOrganization.membership.role !== 'admin') {
				router.push('/'); // Replace '/' with the homepage URL
			} else {
				// If the user is an admin, no need to wait for the organization list; render the admin page directly
				setShowLoader(false);
			}
		}
	}, [isLoaded, organizationList]);

	// const roles = user?.publicMetadata;
	// console.log("llllllllll", user?.publicMetadata);
	// console.log(useUser);

	// Redirige a los usuarios que no son administradores a la página de inicio
	// if (!roles.includes("Admin")) {
	//   router.push("/");
	// }
	const options = [
		{
			icon: 1,
			data: 'GAMES',
		},
		{
			icon: 2,
			data: 'CATEGORIES',
		},
		{
			icon: 3,
			data: 'USERS',
		},
		{
			icon: 4,
			data: 'DISCOUNTS',
		},
		{
			icon: 5,
			data: 'SUPPORT',
		},
	];

	// Mapeo de valores de icon a componentes de íconos correspondientes
	const iconMapping = {
		1: FaThList,
		2: BiSolidCategory,
		3: FaUser,
		4: MdDiscount,
		5: BiSupport,
	};

	return (
		<div className="panelAdminContainer">
			<div className="iconAndTittlePanel">
				<span>
					<LuLayoutPanelLeft />
				</span>
				<h1>DASHBOARD ADMIN</h1>
			</div>

			<div className="optionsPanelContainer">
				{options.map((option) => {
					const IconComponent = iconMapping[option.icon];
					let clase = 'optionPanel';
					if (option.icon == 4 || option.icon == 5) clase = 'optionPanel last';
					return (
						<div key={option.icon} className={clase}>
							<Link href={`/panelAdmin/${option.data.toLowerCase()}`}>
								<div>
									{IconComponent && (
										<span className="iconPanel">
											<IconComponent />
										</span>
									)}
									<p>{option.data}</p>
								</div>
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Page;
