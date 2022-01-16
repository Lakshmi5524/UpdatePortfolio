import React,{useState} from 'react'
import Title from '../componets/Title'
import {InnerLayout,  MainLayout} from '../Styles/Layout'
import styled from 'styled-components'
import portfoliodata from "../data/porfoliodata"
import Menu from '../componets/Menu'
import Button from '../componets/Button'
 

const allButtons=['All',  ...new Set(portfoliodata.map(item=>item.category),'All')]

function PorfolioProjects() {
  const [menuItem, setMenuItems] = useState(portfoliodata);
  const [button, setButton] = useState(allButtons);




  const filter = (button)=>{

	if(button === 'All'){
		setMenuItems(portfoliodata);
		return;
	}
	  const  filterData= portfoliodata.filter(item=>item.category===button);
	  setMenuItems(filterData);
  }

  return (
    <MainLayout>
        <Title title={"Projects"} span={"Projects"} button={button}/>

        <InnerLayout>
			      <Button filter={filter} button={button}/>
            <Menu menuItem={menuItem}/>
        </InnerLayout>
    </MainLayout>
  );
}

const PortfolioStyled= styled.section`

`
export default PorfolioProjects
