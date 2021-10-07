import React from 'react'
import styled from '@emotion/styled'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const NavBar = styled.nav`
  display: flex;
  height: 60px;
  background: #fff;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
`

const Page = styled.div`
  display: flex;
  flex: 1 0 auto; // flex-grow flex-shrink flex-basis shorthand
`

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  border-right: 1px solid #dadde1;
`

const MainContainer = styled.div`
  flex-grow: 1;
`

function App() {
  return (
    <Router>
      <NavBar>Navbar: React common components</NavBar>
      <Page>
        <SidebarContainer>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
        </SidebarContainer>
        <MainContainer>
          <Switch>
            <Route path="/about">
              <h1>About</h1>
            </Route>
            <Route path="/users">
              <h1>Users</h1>
            </Route>
            <Route path="/">
              <h1>Home</h1>
            </Route>
          </Switch>
        </MainContainer>
      </Page>
    </Router>
  )
}

export default App
