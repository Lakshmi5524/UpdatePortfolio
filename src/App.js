import React from 'react'
import styled from 'styled-components'
import Sidebar from './componets/Sidebar'
import HomePage from './page/HomePage'
import AboutPage from './page/AboutPage'
import BlogsPage from './page/BlogsPage'
import ContactPage from './page/ContactPage'
import ResumePage from './page/ResumePage'
import PorfolioProjects from './page/PorfolioProjects'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
	return (
		<div className='App'>
			<Router>
				<Sidebar />
				<MainContentStyle>
					<div className='lines'>
						<div className='line-1'></div>
						<div className='line-2'></div>
						<div className='line-3'></div>
						<div className='line-4'></div>
					</div>

					<Switch>
						<Route path="/" exact>
							<HomePage />
						</Route>
						<Route path="/about" exact>
							<AboutPage />
						</Route>
						<Route path="/resume" exact>
							<ResumePage />
						</Route>
						<Route path="/portfolios" exact>
							<PorfolioProjects />
						</Route>
						<Route path="/blogs" exact>
							<BlogsPage />
						</Route>
						<Route path="/contact" exact>
							<ContactPage />
						</Route>
					</Switch>
				</MainContentStyle>
			</Router>
		</div>
	)
}
const MainContentStyle = styled.main`
position:relative;
margin-left:16.3rem;
min-height:100vh;
/* background-color:red; */
.lines{
position: absolute;
min-height:100vh;
width: 100%;
display:flex;
opacity: 0.4;
z-index:-1;
justify-content:space-evenly;
.line-1,.line-2, .line-3, .line-4{
width: 1px;
min-height:100vh;
/* background-color:var(--border-color); */
}

}		`
export default App