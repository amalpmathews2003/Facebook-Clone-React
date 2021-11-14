import { Avatar } from '@material-ui/core'
import React from 'react'
import '../assets/SidebarRow.css'
function SidebarRow({title,Icon,src}) {
      return (
            <div className="sidebarRow">
                  {src && <Avatar src={src}/>}
                  {Icon && <Icon/>}
                  <h4>{title}</h4>
            </div>
      )
}

export default SidebarRow
