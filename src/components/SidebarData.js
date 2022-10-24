import React from 'react';
import { 
	HomeIcon, 
	MailOutlineIcon, 
	AnalyticsIcon, 
	DashboardIcon,
	PeopleIcon 
} from '@mui/icons-material';

export const SidebarData = () => [
	{
		title: 'Home',
		icon: <HomeIcon />,
		link: "/home"
	},
	{
		title: 'Mailbox',
		icon: <MailOutlineIcon />,
		link: "/Mailbox"
	},
	{
		title: 'Analytics',
		icon: <AnalyticsIcon />,
		link: "/Analytics"
	},
	{
		title: 'Dashboard',
		icon: <DashboardIcon />,
		link: "/Dashboard"
	},
	{
		title: 'Friend',
		icon: <PeopleIcon />,
		link: "/Friend"
	},
]
