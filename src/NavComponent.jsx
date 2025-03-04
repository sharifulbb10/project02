import React from 'react'
import navIcon from './assets/navIcon.svg'

export default function NavComponent() {
	return (
		<nav className="mt-3 pl-4 p-2 bg-amber-100 flex justify-between">
			<div className="flex whitespace-nowrap">
				<img src={navIcon} className="m-2"/><h1 className="m-2">Shariful Islam</h1>
			</div>
			<div className="flex items-center mr-15">
				<a href="#" className="m-1 p-1">Home</a>
				<span>/</span>
				<a href="#" className="m-1 p-1">Products</a>
				<span>/</span>
				<a href="#" className="m-1 p-1">Articles</a>
				<span>/</span>
				<a href="#" className="m-1 p-1">Contact</a>
			</div>
		</nav>
	)
}