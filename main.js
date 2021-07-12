/*
NOTES:
	Theres a bug when the check button pops up but a portion of it is cut off. (fixed)
  
  -- made from Textastic on Iphone 7.
  
*/

"use strict";

let plusToCheck = document.getElementById("plusToCheck");
let plusBtn = document.querySelector(".plusBtn");
let box = document.querySelector(".box");
let pic = document.querySelector(".pic");
let description = document.querySelector(".description");
let coupon = document.querySelector(".coupon");
let blockFromClickingAgain = document.querySelector(".blockFromClickingAgain");



const flipBack = () => {
	box.style.transform = "scaleY(1)";
	box.style.transition = "0.2s";
	console.log("spinned");
}


const flipForward = () =>{
	document.querySelector(".plusBtn").onclick = () =>{
		console.log("clicked");
		
		//this ID changes into a check symbol.
		plusToCheck.innerHTML = "&#10003";
		plusToCheck.style.color = "yellow";
		plusToCheck.style.backgroundColor = "black";
		plusBtn.style.backgroundColor = "black";
		
		box.style.transform = "scaleY(-1)";
		box.style.transition = "0.2s";
		
		description.style.display = "none";
		pic.style.display = "none";
		
		
		let openCoupon = setInterval(function() {
			coupon.style.display = "block";
		}, 400);
		
		let flipper = setInterval(flipBack, 200);
		
		setInterval(function() {
			clearInterval(flipper);
		}, 1000);
		
		setInterval(function() {
			clearInterval(openCoupon);
		}, 500);
		
		
		// flip the card again to show the item
		setTimeout(function() {
			const flipForwardAgain = () =>{
					
				
					//this ID changes into a check symbol.
					plusToCheck.innerHTML = "&#10003";
					
					box.style.transform = "scaleY(-1)";
					box.style.transition = "0.2s";
					
					
					let bringBackPicAndDescription = setInterval(function() {
						description.style.display = "block";
						pic.style.display = "block";
						
						description.style.transition = "1s";
					}, 200);
					
					
					
					let closeCoupon = setInterval(function() {
						coupon.style.display = "none";
					}, 1);
					
					let flipper = setInterval(flipBack, 200);
					
					setInterval(function() {
						clearInterval(flipper);
						clearInterval(closeCoupon);
						
					}, 400);
					
				
				} // flipFordwardAgain function
				
				flipForwardAgain();
				blockFromClickingAgain.style.display = "block";
			
			}, 2000);
		
	}// onclick
	
} // flipForward function

flipForward();





