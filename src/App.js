import {useState ,useEffect} from 'react'
import styled from 'styled-components'
import Sidebar from './componets/Sidebar'
import HomePage from './page/HomePage'
import AboutPage from './page/AboutPage'
import BlogsPage from './page/BlogsPage'
import ContactPage from './page/ContactPage'
import ResumePage from './page/ResumePage'
import PorfolioProjects from './page/PorfolioProjects'
import { Route, Switch as Switching } from "react-router";
import  MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core'
import Switch from '@material-ui/core/Switch'
import Brightness4Icon from '@material-ui/icons/Brightness4';


function App() {

	const [theme, setTheme] = useState('dark-theme');
	const [checked, setChecked] = useState(false);
	const [navToggle, setNavToggle] = useState(false);


	useEffect(()=>{
		document.documentElement.className = theme;
	  }, [theme]);


	  const themeToggler = () =>{
		if(theme === 'light-theme'){
		  setTheme('dark-theme');
		  setChecked(false)
		}else{
		  setTheme('light-theme');
		  setChecked(true)
		}
	  }


	return (
    <div className="App">
      <Sidebar navToggle={navToggle} />

	<div className='theme'>
		<div className="light-dark-mode">
			<div className="left-content">
			<Brightness4Icon />
			</div>
			<div className="right-content">
			<Switch
				value=""
				checked={checked}
				inputProps={{ 'aria-label': '' }}
				size="medium"
				onClick={themeToggler}
			/>
			</div>
		</div>
		</div>

      <div className="ham-burger-menu">
        <IconButton onClick={() => setNavToggle(!navToggle)}>
          <MenuIcon />
        </IconButton>
      </div>

      <MainContentStyle>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>

        

        <Switching>
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
        </Switching>
      </MainContentStyle>
    </div>
  );
}
const MainContentStyle = styled.main`
position:relative;
margin-left:16.3rem;
min-height:100vh;

@media screen and (max-width:1200px){
    margin-left: 0;
  }
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

}

.ham-burger-menu{
	position:absolute;
	right:10%;
	top:10%;
	z-index:15;
}


@media screen and (max-width:1200px){


  }



`
export default App