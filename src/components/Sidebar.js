import { Chat, ExpandMoreOutlined, LocalHospital, People, Storefront, VideoLibrary } from '@material-ui/icons'
import React from 'react'
import '../assets/Sidebar.css'
import SidebarRow from './SidebarRow'
import { useStateValue } from './StateProvider';

function Sidebar() {
      const [{user}, ]=useStateValue()
      return (
            <div className="sidebar">
                  <SidebarRow src={user.photoURL} title={user.displayName}/>
                  <SidebarRow Icon={LocalHospital} title="Covid-19 Info"/>
                  <SidebarRow Icon={People} title="Friends"/>
                  <SidebarRow Icon={Chat} title="Messeger"/>
                  <SidebarRow Icon={Storefront} title="Marketplace"/>
                  <SidebarRow Icon={VideoLibrary} title="Videos"/>
                  <SidebarRow Icon={ExpandMoreOutlined} title="More"/>
            </div>
      )
}

export default Sidebar
