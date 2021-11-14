import React from 'react'
import "../assets/Header.css"
import { Add, ExpandMore, Flag, Forum, Home, NotificationsActive, Search, StorefrontOutlined, SubscriptionsOutlined, SupervisedUserCircle } from '@material-ui/icons';
import { Avatar, IconButton } from '@material-ui/core';
import { useStateValue } from './StateProvider';

function Header() {
	const [{user}, ]=useStateValue()
	return (
		<div className="header">
			<div className="header__left">
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/225px-2021_Facebook_icon.svg.png" alt="facebook logo"></img>
				<div className="header__input">
					<Search/>
					<input type="text" placeholder="Search Facebook"/>
				</div>
			</div>
			<div className="header__center">
				<div className="header__option active">
					<Home fontSize="large"/>
				</div>
				<div className="header__option">
					<Flag fontSize="large"/>
				</div>
				<div className="header__option">
					<SubscriptionsOutlined fontSize="large"/>
				</div>
				<div className="header__option">
					<StorefrontOutlined fontSize="large"/>
				</div>
				<div className="header__option">
					<SupervisedUserCircle fontSize="large"/>
				</div>
			</div>
			<div className="header__right">
				<div className="header__info">
					<Avatar src={user.photoURL}/>
					<h4>{user.displayName}</h4>
				</div>
				<IconButton>
					<Add/>
				</IconButton>
				<IconButton>
					<Forum/>
				</IconButton>
				<IconButton>
					<NotificationsActive/>
				</IconButton>
				<IconButton>
					<ExpandMore/>
				</IconButton>
			</div>
		</div>
	);
}

export default Header
