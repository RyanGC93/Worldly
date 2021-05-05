import React, { useEffect, useState, useRef } from "react";

import { useDetectOutsideClick } from "../../../services/detectOutsideClick";

import HTMLFlipBook from "react-pageflip";
import "./styles.css";
import * as userEventActions from "../../../store/userEvents";
import { useSelector, useDispatch } from "react-redux";
import { BsFillTrashFill } from "react-icons/bs";
import { deleteUserEvent } from "../../../store/userEvents";

import * as ambassadorEventActions from "../../../store/ambassadorEvents";

const PageCover = React.forwardRef((props, ref) => {
	return (
		<div
			className={"page page-cover page-cover-" + props.pos}
			ref={ref}
			data-density="hard"
		>
			<div className="page-content"></div>
		</div>
	);
});

const Page = React.forwardRef(({ page }, ref) => {
	const dispatch = useDispatch();
	// const [isActive, setIsActive] = useDetectOutsideClick(passportRef, false);
	const removeEvent = (id) => {
		dispatch(deleteUserEvent(id));
		// window.location.reload()
	};

	useEffect(() => {

		// if(props.sortedUpcomingEvents)
	}, []);

	return (
		<div ref={ref} className="page" >
			<div className="page-header">{page.header} Events </div>
			<div className="page-content">
				<div>
					<div className="content-section">
						<button onClick={() => console.log(page)}></button>

						<div className="page-carousel">
							<div className="page-event-info">
								<div className="page-title">{page.title}</div>
								<div className="page-location">
									<div className="page-country">
										{page.country}, {page.region}
									</div>
									<div className="page-region"></div>
								</div>
								<div className="page-date">
									{page.date.slice(5)}, {page.time}
								</div>
								<button onClick={() => removeEvent(page.booking_id)}>
									DELETE
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
});

export default function (props) {
	let userEvents = useSelector((state) => {
		return Object.values(state.userEvents);
		if (!props.isChecked) return Object.values(state.ambassadorEvents);
	});

	let dateNow = new Date();
	let pastEvents = userEvents.filter((ev) => ev.dateObj < dateNow);
	let upcomingEvents = userEvents.filter((ev) => ev.dateObj > dateNow);
	let sortedUpcomingEvents = upcomingEvents.sort(
		(a, b) => a.dateObj - b.dateObj
	);
	let sortedPastEvents = pastEvents.sort((a, b) => a.dateObj - b.dateObj);
	const contentDivider = (arr) => {
		let newarr = [];
		let i,
			j,
			temparray,
			chunk = 2;
		for (i = 0, j = arr.length; i < j; i += chunk) {
			temparray = arr.slice(i, i + chunk);
			newarr.push(temparray);
		}
		return newarr;
	};
	let upcomingBookEvents = contentDivider(sortedUpcomingEvents);
	let pastBookEvents = contentDivider(sortedPastEvents);
	useEffect(() => {
		// if(userEvents[0])return
		// dispatch(userEventActions.getUserEvents());
	}, [userEvents]);
	useEffect(() => console.log("this"));
	if(!sortedUpcomingEvents) return
	return (
		<div
			id="passport"
			className="container-md "
			style={{ position: "relative" }}
		>
			<div
				renderOnlyPageLengthChange={true}
				width={550}
				height={733}
				size="stretch"
				minWidth={115}
				maxWidth={2000}
				minHeight={100}
				maxHeight={2533}
				maxShadowOpacity={0.5}
				// showCover={true}
				mobileScrollSupport={true}
				className="flip-book html-book demo-book"
			>
				{sortedUpcomingEvents.map((page, i) => (
					<Page type={'page'} page={page} />
				))}
			</div>
		</div>
	);
}
