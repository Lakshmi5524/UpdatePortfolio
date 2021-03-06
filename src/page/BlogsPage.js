import React from 'react'
import blogs from '../data/blogs'
import styled from 'styled-components'
import Title from '../componets/Title'
import { MainLayout, InnerLayout } from '../Styles/Layout'

function BlogsPage() {
	return (
		<MainLayout>
			<BlogStyled>
				<Title title={'Blogs'} span={'Blogs'} />
				<InnerLayout className={'blog'}>
					{
						blogs.map((blog) => {
							return <div key={blog.id} className={'blog-item'}>
								<div className='image'>
									<img src={blog.image} alt="" />
								</div>
								<div className='title'>
									<a herf={blog.link}>
										{blog.title}
									</a>
								</div>
							</div>
						})
					}
				</InnerLayout>
			</BlogStyled>
		</MainLayout >
	)
}
const BlogStyled = styled.div`
.blog{
display: grid;
grid-template-columns:repeat(2,1fr);
grid-column-gap:2rem;
grid-row-gap:3rem;


.blog-item{
background-color:var(--background-dark-gray);
padding: 2rem 1rem;
overflow:hidden;
}

.image{
width: 100%;
height: 90%;
overflow:hidden;
img{
width: 100%;
height: 90%;
object-fit:cover;

  transition: all .4s ease-in-out;
                &:hover{
                    cursor: pointer;
                    transform: rotate(3deg) scale(1.1);
}
}
}
.title{
         a{
                font-size: 1.8rem;
                padding: 2rem 0;
                color: var(--white-color);
                cursor: pointer;
                transition: all .4s ease-in-out;
                &:hover{
                    color: var(--primary-color);
                }
            }
        }
    }
`;
export default BlogsPage
