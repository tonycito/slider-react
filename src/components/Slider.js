import React from "react";
import ImageOne from "../images/image1.jpg";
import ImageTwo from "../images/image2.jpg";
import ImageThree from "../images/image3.jpg";

const imagenes = [ImageOne, ImageTwo, ImageThree];
// const { 0: pt, 1: pt2, 2: pt3 } = imagenes;
// console.log(pt);
class Slider extends React.Component {
	// De esta manera ya no se pondria el constructor por el babel
	handleClick = (e) => {
		e.preventDefault();
		//con esto obtenemos todo y podriamos ocultar con la condicion.
		debugger;
		// const img = document.getElementsByClassName("hola");
		const car = e.target.getAttribute("id");
		if (car == "1") {
			car.setAttribute("id", "58");
			console.log(car);
			return null;
		} else {
			console.log("no funka");
		}
		console.log(car);
	};

	render() {
		// const imagenes = [ImageOne, ImageTwo, ImageThree];
		return (
			<div className="slides">
				<img
					id={1}
					src={imagenes[0]}
					alt='image1'
					onClick={this.handleClick}
					className='contenedor_slider hola'
				/>
				<img
					id={2}
					src={imagenes[1]}
					alt='image2'
					onClick={this.handleClick}
					className='contenedor_slider hola'
				/>
				<img
					id={3}
					src={imagenes[2]}
					alt='image3'
					onClick={this.handleClick}
					className='contenedor_slider hola'
				/>
			</div>
		);
	}
}
export default Slider;
