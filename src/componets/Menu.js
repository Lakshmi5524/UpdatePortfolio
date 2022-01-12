import styled from 'styled-components'
import GitHubIcon from '@material-ui/icons/GitHub';
import PinterestIcon from '@material-ui/icons/Pinterest';
import './menu.css'
function Menu({menuItem}) {
 
    return (
        <MenuItemStyled>
           {
               menuItem.map((item)=>{
                   return <div className="grid-iem" key={item.id}>
                           <div className="portfolio-content">
                               <div className="portfolio-image">
                                   <img src={item.image} alt=""/>
                                   <ul>
                                            <li>
                                                <a herf={item.link}>
                                                    <GitHubIcon/>
                                                </a>
                                            </li>

                                            <li>
                                                <a herf={item.link}>
                                                    <PinterestIcon/>
                                                </a>
                                            </li>
                                      </ul>
                               </div>

                               <h6>{item.title}</h6>
                               <p>{item.text}</p>
                           </div>
                   </div>
               })
           }
        </MenuItemStyled>
    )
};

const MenuItemStyled = styled.div`

display:grid;
grid-template-columns:repeat(3, 1fr);
grid-gap:2rem;
color:white;

.grid-iem{
    .portfolio-content{
        dispaly:block;
        position:relative;
        h6{
            font-size:1.5rem;
        }
        img{
            width:100%;
            height:30vh;
            object-fit:cover;
        }
        ul{
            display:none;
        }
        .portfolio-image{
            &::before {

                content:"",
                position:absolute;
                left:2%;
                top:4%;
                height:0;
                width:0;
                transition:all .4s ease-in-out;
               
            }
        }

        .portfolio-image:hover{
            &::before{

                height:calc(100%-32%);
                width:calc(100%-4%);
                background-color:rgb(250,240,230);
                opacity:0.9;
                transform-origin:left;
                transform:scale(0);
            }
        }


    }
}
`;
export default Menu
