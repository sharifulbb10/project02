import React from 'react'

export default function MiddleSection() {
	return (
		<>
		<div className="flex justify-center">
			<div className="w-1/3 ml-6 m-2 text-xl">
				<h2 className="mb-4 ml-2">Projects</h2>
				<div className="text-sm pl-2 py-2 mb-2 bg-green-200 hover:bg-yellow-200 cursor-pointer">HTML Only Porfolio</div>
				<div className="text-sm pl-2 py-2 mb-2 bg-green-200 hover:bg-yellow-200 cursor-pointer">Calculator</div>
				<div className="text-sm pl-2 py-2 mb-2 bg-green-200 hover:bg-yellow-200 cursor-pointer">Quiz App</div>
				<div className="text-sm pl-2 py-2 mb-2 bg-green-200 hover:bg-yellow-200 cursor-pointer">Countdown Timer</div>
				<div className="text-sm pl-2 py-2 mb-2 bg-green-200 hover:bg-yellow-200 cursor-pointer">Product Upcoming Page</div>
			</div>

			<div className="w-1/3 m-2">
				<h2 className="mb-4 ml-2 text-xl">Work Experience</h2>
				<div className="pl-2 py-1 text-sm mb-2">
					<p className="my-2">roadmap.sh</p>
					<p className="mb-2 text-lg">Solved all the frontend projects</p>
					<p className="mb-2 text-sm text-blue-500"><a href="#">Visit my Profile</a></p>
				</div>

				<div className="pl-2 py-1 text-sm mb-2">
					<p className="my-2">Open source work</p>
					<p className="mb-2 text-lg">Contributed to 50 opensource projects. Made my own projects with 200 GitHub stars</p>
					<p className="mb-2 text-sm text-blue-500"><a href="#">Visit my GitHub Profile</a></p>
				</div>
			</div>

			<div className="w-1/3 mr-6 m-2 text-xl">
				<h2 className="mb-4 ml-2 text-xl">Education</h2>
				<div className="pl-2 py-1 text-sm mb-2">
					<p className="my-2 text-sm">Graduated with 3.56 out of 4 CGPA. Won some competitions and gained recognition.<br/><br/>
					Courses I took:<br/><br/>
					&nbsp; - &nbsp;Computer Programming<br/>
					&nbsp; - &nbsp;Database Management<br/>
					&nbsp; - &nbsp;Introduction to Robotics<br/>
					&nbsp; - &nbsp;Control Engineering<br/>
					&nbsp; - &nbsp;Statistics
					</p>
				</div>
			</div>
		</div>

		<div className="flex flex-col justify-start ml-15 m-12">
			<h2 className="self-start mb-3">Lorem ipsum non quis nostrud nulla magna</h2>
			<div className="flex">

				<div className="flex flex-col w-80 h-50 border-2 rounded-3xl m-3 p-3">
					<p>Exercitation excepteur minim dolor excepteur laboris mollit deserunt pariatur dolore proident tempor consectetur ullamco minim.</p>
					<p className="mt-auto text-gray-500">Lorem ipsum ullamco exercitation eu.<br/>minim adipisicing.</p>
				</div>

				<div className="flex flex-col w-80 h-50 border-2 rounded-3xl m-3 p-3">
					<p>Exercitation excepteur minim dolor excepteur laboris mollit deserunt pariatur dolore proident tempor consectetur ullamco minim.</p>
						<p className="mt-auto text-gray-500">Lorem ipsum ullamco exercitation eu.<br/>minim adipisicing.</p>
				</div>

				<div className="flex flex-col w-80 h-50 border-2 rounded-3xl m-3 p-3">
					<p>Exercitation excepteur minim dolor excepteur laboris mollit deserunt pariatur dolore proident tempor consectetur ullamco minim.</p>
					<p className="mt-auto text-gray-500">Lorem ipsum ullamco exercitation eu.<br/>minim adipisicing.</p>
				</div>
			</div>
		</div>

		<div className="text-center mb-5">All Rights Reserved @{2025}</div>
		</>
	)
}