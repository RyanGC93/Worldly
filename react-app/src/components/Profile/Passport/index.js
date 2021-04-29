import React, { useEffect, useState,useRef } from "react";
import {useDetectOutsideClick} from "../../../services/detectOutsideClick"

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



const Passport = (props) => {
	const dispatch = useDispatch();
	const passportRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(passportRef, false);
	const removeEvent = async(id) => {
		await dispatch(deleteUserEvent(id));
		window.location.reload()
	};

	return (
		<>
			<div
				id="passport"
				className="container-md "
				style={{ position: "relative" }}
			>
				<HTMLFlipBook
					width={550}
					height={733}
					size="stretch"
					minWidth={115}
					maxWidth={2000}
					minHeight={100}
					maxHeight={2533}
					maxShadowOpacity={0.5}
					showCover={true}
					mobileScrollSupport={true}
					className="flip-book html-book demo-book"
				>
					<PageCover key={0} pos="top"></PageCover>

					{props.upcomingBookEvents &&
						props.upcomingBookEvents.map((page, i) => (
							<div className="page" data-density="soft">
								<div className="page-header">{page.header} Events </div>
								<div className="page-content">
									{page && (
										<>
											<div className="content-section">
												<button onClick={() => console.log(page)}></button>

												<div className="page-carousel">
													<div className="page-event-info">
														<div className="page-title">{page[0].title}</div>
														<div className="page-location">
															<div className="page-country">
																{page[0].country}, {page[0].region}
															</div>
															<div className="page-region"></div>
														</div>
														<div className="page-date">
															{page[0].date.slice(5)}, {page[0].time}
														</div>
														<button
															onClick={() => removeEvent(page[0].booking_id)}
														>
															DELETE
														</button>
														{/* <BsFillTrashFill onClick={} className='trash'/> */}
													</div>
												</div>
											</div>
											{/* Next Section */}
											{page[1] && (<div className="content-section">
												<button onClick={() => console.log(page)}></button>

												<div className="page-carousel">
													<div className="page-event-info">
														<div className="page-title">{page[1].title}</div>
														<div className="page-location">
															<div className="page-country">
																{page[1].country}, {page[1].region}
															</div>
															<div className="page-region"></div>
														</div>
														<div className="page-date">
															{page[1].date.slice(5)}, {page[1].time}
														</div>
														<button
															onClick={() => removeEvent(page[1].booking_id)}
														>
															DELETE
														</button>
														{/* <BsFillTrashFill onClick={} className='trash'/> */}
													</div>
												</div>
											</div>
											)}
										</>
									)}
								</div>
							</div>
						))}
					{/* 
					{props.upcomingBookEvents &&
						props.upcomingBookEvents.map((page, i) => (
							<Page
								key={`pastBookPage-${i}`}
								header={"Upcoming"}
								content={page}
							/>
						))} */}
				</HTMLFlipBook>
			</div>
			{/* <div className="container mt-3">
					<div className="row">
						<div className="col-md-6">
							<button
								type="button"
								className="btn btn-info btn-sm btn-prev"
								onClick={this.prevButtonClick}
							>
								Previous page
							</button>
							[<span>{this.state.page + 1}</span> of{" "}
							<span>{this.state.totalPage}</span>]
							<button
								type="button"
								className="btn btn-info btn-sm btn-next"
								onClick={this.nextButtonClick}
							>
								Next page
							</button>
						</div>
						<div className="col-md-6">
							State: <i>{this.state.state}</i>, orientation:{" "}
							<i>{this.state.orientation}</i>
						</div>
					</div>
				</div> */}
		</>
	);
};

export default function (props) {
	const [isLoading, setIsLoading] = useState(true);
	let userEvents = useSelector((state) => {
		if (props.isChecked) return Object.values(state.userEvents);
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
		if (!upcomingBookEvents) return;
		if (userEvents[0]) setIsLoading(false);
		console.log(userEvents, upcomingBookEvents, pastBookEvents);
	}, [isLoading, upcomingBookEvents, pastBookEvents, userEvents]);
	return (
		<>
			{upcomingBookEvents && (
				<Passport
					upcomingBookEvents={upcomingBookEvents}
					pastBookEvents={pastBookEvents}
				/>
			)}
		</>
	);
}
