import React from 'react'
import styled from '@emotion/styled'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { Sidebar, SidebarMenuItem } from './components/Sidebar/Sidebar'
import { menuItems } from './components/Sidebar/menuItems'

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  height: 60px;
  box-sizing: border-box;
  background: #fff;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
`

const Page = styled.div`
  display: flex;
  flex: 1 0 auto; // flex-grow flex-shrink flex-basis shorthand
`

const MainContainer = styled.div`
  flex-grow: 1;
`

function App() {
  return (
    <Router>
      <NavBar>Navbar: React common components</NavBar>
      <Page>
        <Sidebar>
          {menuItems.map((menuItem, index) => (
            <SidebarMenuItem
              key={index}
              name={menuItem.name}
              path={menuItem.path}
            />
          ))}
        </Sidebar>
        <MainContainer>
          <Switch>
            <Route path="/select">
              <h1>select</h1>
            </Route>
            <Route path="/multi-select">
              <h1>Multi select</h1>
            </Route>
            <Redirect to="/select" />
          </Switch>
        </MainContainer>
      </Page>
    </Router>
  )
}

export default App
