/** @format */

import React, { Component } from "react"
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import { Link } from "react-router-dom"
import { RoomContext } from "../context"
import StyledHero from "../components/StyledHero"

export default class SingleRoom extends Component {
	constructor(props) {
		super(props)
		this.state = {
			slug: this.props.match.params.slug,
		}
	}

	static contextType = RoomContext
	// componentDidMount(){}
	render() {
		const { getRoom } = this.context
		const room = getRoom(this.state.slug)
		if (!room) {
			return (
				<div>
					<Hero>
						<Banner subtitle="No such room could be found">
							<Link to="/rooms" className="btn-primary">
								{" "}
								Back to Rooms
							</Link>
						</Banner>
					</Hero>
				</div>
			)
		}

		const {
			name,
			description,
			size,
			capacity,
			price,
			extras,
			breakfast,
			pets,
			images,
		} = room
		const [mainImg, ...defaultImg] = images
		return (
			<>
				<StyledHero img={mainImg}>
					<Banner title={`${name} room`}>
						<Link to="/rooms" className="btn-primary">
							Back to rooms
						</Link>
					</Banner>
				</StyledHero>
				<section className="singleRoom">
					<div className="singleRoom__images">
						{defaultImg.map((item, index) => {
							return <img key={index} src={item} alt={name} />
						})}
					</div>
					<div className="singleRoom__information">
						<article className="singleRoom__desc">
							<h3>details</h3>
							<p>{description}</p>
						</article>
						<article className="singleRoom__info">
							<h3>info</h3>
							<h6>price : ${price}</h6>
							<h6>size : {size} SQFT</h6>
							<h6>
								max capacity :{" "}
								{capacity > 1 ? `${capacity} people` : `${capacity} person`}{" "}
							</h6>
							<h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
							<h6>{breakfast && "free breakfast included"}</h6>
						</article>
					</div>
				</section>
				<section className="singleRoom__extraContainer">
					<h6>extras</h6>
					<ul className="singleRoom__extras">
						{extras.map((item, index) => {
							return <li key={index}> - {item}</li>
						})}
					</ul>
				</section>
			</>
		)
	}
}
