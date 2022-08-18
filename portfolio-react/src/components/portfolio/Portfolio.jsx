import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


/*-------By Using Map Function------------*/
const data =[
  {
    id:1,
    Image:IMG1,
    title:'Charts templates & infographics in Figma',
    github:'https://github.com/',
    demo:'https://dribbble.com/shots/18543028-Orion-UI-kit-Charts-templates-infographics-in-Figma',
  },
  {
    id:2,
    Image:IMG2,
    title:'Charts templates & infographics in Figma',
    github:'https://github.com/',
    demo:'https://dribbble.com/shots/18436767-Orion-UI-kit-Charts-templates-infographics-in-Figma',
  },
  {
    id:3,
    Image:IMG3,
    title:' Figma dashboard UI kit for data design web apps',
    github:'https://github.com/',
    demo:'https://dribbble.com/shots/18418524-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
  },
  {
    id:4,
    Image:IMG4,
    title:'Figma dashboard UI kit for data design web apps',
    github:'https://github.com/',
    demo:'https://dribbble.com/shots/18381226-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
  },
  {
    id:5,
    Image:IMG5,
    title:'Figma dashboard UI kit for data design web apps',
    github:'https://github.com/',
    demo:'https://dribbble.com/shots/18936936-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
  },
  {
    id:6,
    Image:IMG6,
    title:' Charts templates & infographics in Figma',
    github:'https://github.com/',
    demo:'https://dribbble.com/shots/18881912-Orion-UI-kit-Charts-templates-infographics-in-Figma',
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio_container">
             {
             data.map(({id,Image,title,github,demo}) => {
               return(
                <article key={id} className="portfolio_item">
                   <div className="portfolio_item-image">
                       <img src={Image} alt={title}/>
                   </div>
                   <h3>{title}</h3>
                   <div className="portfolio_item-btns">
                        <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                        <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                   </div>
                </article>
               )
             })}
        </div>
    </section>
  )
}

export default Portfolio