import React, { Component } from 'react'
import Title from '../components/Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
export default class Services extends Component {
    state={
        services : [
            {
            icon : <FaCocktail/>,
            title: "free-cocktails",
            info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, consequuntur ipsum."
            },
            {
            icon : <FaHiking/>,
            title: "up walking",
            info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, consequuntur ipsum."
            },
            {
            icon : <FaShuttleVan/>,
            title: "free-delivery",
            info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, consequuntur ipsum."
            },
            {
            icon : <FaBeer/>,
            title: "Strongest Beer",
            info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, consequuntur ipsum."
            },
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Services"/>
                <div className="services__center">
                    {this.state.services.map((item,index) =>{
                        return <article key={index} className="services__item">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>

        )
    }
}
