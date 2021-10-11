import { Link } from 'react-router-dom'
import React from 'react'
import styled from '@emotion/styled'

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  border-right: 1px solid #dadde1;
  padding: 8px;
`

const Ul = styled.ul`
  list-style-type: none;
`

interface SidebarProps {
  children: React.ReactNode
}
export const Sidebar = (props: SidebarProps) => {
  const { children } = props
  return (
    <SidebarContainer>
      <nav>
        <Ul>{children}</Ul>
      </nav>
    </SidebarContainer>
  )
}

export interface SidebarMenuItemProps {
  name: string
  path: string
}
export const SidebarMenuItem = (props: SidebarMenuItemProps) => {
  const { name, path } = props
  return (
    <li>
      <Link to={path}>{name}</Link>
    </li>
  )
}
