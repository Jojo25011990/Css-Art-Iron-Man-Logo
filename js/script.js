"use strict";

const ironManPart = document.querySelectorAll(".ironMan__part");
const headingPrimary = document.querySelector(".content__heading-primary");
const headingSecondary = document.querySelector(".content__heading-secondary");
const headingTertiary = document.querySelector(".content__heading-tertiary");

/*** Animation of Iron Man parts ***/
gsap.to(ironManPart, { opacity: 1, stagger: 0.25 }).delay(2.55);

/*** Animation of the main heading (Heading Primary) ***/
gsap.fromTo(
	headingPrimary,
	{
		opacity: 0,
		scale: 0,
		rotation: 15,
		duration: 1,
	},
	{
		opacity: 1,
		scale: 1,
		rotation: 0,
		duration: 1,
	}
);

/*** Animation of the secondary heading (Heading Secondary) ***/
gsap.fromTo(
	headingSecondary,
	{
		opacity: 0,
		scale: 0,
		rotation: -15,
		duration: 1,
	},
	{
		opacity: 1,
		scale: 1,
		rotation: 0,
		duration: 1,
	}
).delay(1);

/*** Animation of the tertiary heading (Heading Tertiary) ***/
gsap.fromTo(
	headingTertiary,
	{
		opacity: 0,
		scale: 0,
		duration: 1,
	},
	{
		opacity: 1,
		scale: 1,
		duration: 1,
	}
).delay(2);
