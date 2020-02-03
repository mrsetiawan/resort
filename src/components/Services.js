import React, { Component } from 'react'
import Title from './Title'
import { FaBeer,FaCocktail,FaHiking,FaShuttleVan } from 'react-icons/fa'

export default class Services extends Component {
  state = {
    services: [
      { icon:<FaCocktail />, 
        title:"free cocktail",
        info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      },
      { icon:<FaBeer />, 
        title:"free cocktail",
        info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      },
      { icon:<FaHiking />, 
        title:"free cocktail",
        info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      },
      { icon:<FaShuttleVan />, 
        title:"free cocktail",
        info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      },
    ]
  }

  render() {
    const { services } = this.state

    return (
      <section className='services'>
        <Title title='Services '/>
        <div className='services-center'>
          {services.map((item,idx) => {
            return (
              <article key={idx} className='service'>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            )
          })}
        </div>
      </section>
    )
  }
}

