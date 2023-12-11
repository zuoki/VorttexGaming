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
import { useEffect, useState } from 'react';

const Page = () => {
	const { organizationList, isLoaded } = useOrganizationList();
	const router = useRouter();

	useEffect(() => {
		if (isLoaded) {
			const adminOrganization = organizationList.find(
				(org) => org.membership.role === 'admin'
			);
			if (!adminOrganization || adminOrganization.membership.role !== 'admin') {
				router.push('/');
			}
		}
	}, [isLoaded, organizationList]);
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

					let route = `/panelAdmin/${option.data.toLowerCase()}`;
					const IconComponent = iconMapping[option.icon];
					let clase = 'optionPanel';
					let claseSpan = 'iconPanel';
					if (option.icon === 2) {
						clase = 'optionPanel comingSoon';
						claseSpan = 'iconPanel comingSoonIcon';
						route = '/panelAdmin';
					}
					if (option.icon == 4 || option.icon == 5) {
						clase = 'optionPanel last comingSoon';
						claseSpan = 'iconPanel comingSoonIcon';
						route = '/panelAdmin';
					}


					return (
						<div key={option.icon} className={clase}>
							{option.icon === 2 || option.icon === 4 || option.icon === 5 ? <p className='comingSoonText' >COMING SOON</p> : <p></p>}
							<Link href={route}>
								<div>
									{IconComponent && (
										<span className={claseSpan}>
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
