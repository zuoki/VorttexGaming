'use client';
import './panelAdmin.css';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/clerk-react';
import { FaUser, FaThList } from 'react-icons/fa';
import { BiSolidCategory } from 'react-icons/bi';
import { MdDiscount, MdBuild } from 'react-icons/md';
import { LuLayoutPanelLeft } from 'react-icons/lu';
import { useOrganization, useOrganizationList } from '@clerk/nextjs';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { GrLicense } from 'react-icons/gr';
import Loader from '@/components/loader/Loader';

const Page = () => {
	const { organizationList, isLoaded } = useOrganizationList();
	const router = useRouter();
	const [count, setCount] = useState(0);
	useEffect(() => {
		if (isLoaded) {
			const adminOrganization = organizationList.find(
				(org) => org.membership.role === 'admin'
			);
			if (!adminOrganization || adminOrganization.membership.role !== 'admin') {
				router.push('/about');
			}
		}
		setTimeout(() => {
			setCount(1);
		}, 1500);
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
			data: 'LICENSE',
		},
	];

	const iconMapping = {
		1: FaThList,
		2: BiSolidCategory,
		3: FaUser,
		4: MdDiscount,
		5: GrLicense,
	};
	{
		if (count < 1) {
			return <Loader></Loader>;
		}
	}
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

					return (
						<div key={option.icon} className={clase}>
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
