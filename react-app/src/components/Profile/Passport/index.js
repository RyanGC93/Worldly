import React from "react";
import HTMLFlipBook from "react-pageflip";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import Slider from "infinite-react-carousel";
import { BsFillTrashFill } from "react-icons/bs";
import {deleteUserEvent} from '../../../store/userEvents'

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

const Page = React.forwardRef((props, ref) => {
	const dispatch = useDispatch()
	let imagesOne, imagesTwo, contentOne, contentTwo;

	if (props.content) {
		contentOne = props.content[0];
		contentTwo = props.content[1];
	}
	if (contentOne) {
		imagesOne = useSelector((state) => {
			return Object.values(state.photoGallery).filter(
				(photo) => photo.event_id === contentOne.event_id
			);
		});
	}
	if (contentTwo) {
		imagesTwo = useSelector((state) => {
			return Object.values(state.photoGallery).filter(
				(photo) => photo.event_id === contentTwo.event_id
			);
		});
	}
	const removeEvent = (e, id) => {
		alert(id)
		// e.preventDefault()
		console.log(contentOne.event_id)
		alert(id)

		dispatch(deleteUserEvent(id))
	}



	return (
		<div className="page" ref={ref} data-density={props.density | "soft"}>
			<div className="page-header">{props.header} Events </div>
			<div className="page-content">
				{contentOne && (
					<div className="content-section">
						<button onClick={() => console.log(props.content)}></button>

						<div className="page-carousel">
							<div className="page-event-info">
								<div className="page-title">{contentOne.title}</div>
								<div className="page-location">
									<div className="page-country">
										{contentOne.country}, {contentOne.region}
									</div>
									<div className="page-region"></div>
								</div>
								<div className="page-date">
									{contentOne.date.slice(5)}, {contentOne.time}
								</div>
								<button onClick={(e) => removeEvent(e,contentOne.booking_id)} >DELETE
								</button>
								<button onClick={(e) => removeEvent(e,contentOne.booking_id)} >EDIT
								</button>
							</div>
						</div>
					</div>
				)}
				
				{contentOne && (
					<div className="content-section">
						<button onClick={() => console.log(props.content)}></button>

						<div className="page-carousel">
							<div className="page-event-info">
								<div className="page-title">{contentOne.title}</div>
								<div className="page-location">
									<div className="page-country">
										{contentOne.country}, {contentOne.region}
									</div>
									<div className="page-region"></div>
								</div>
								<div className="page-date">
									{contentOne.date.slice(5)}, {contentOne.time}
								</div>
								<button onClick={(e) => removeEvent(e,contentOne.event_id)} >DELETE
								</button>
								<button onClick={(e) => removeEvent(e,contentOne.event_id)} >EDIT
								</button>
							</div>
						</div>
					</div>
				)}

			</div>
		</div>
	);
});
class Passport extends React.Component {
	constructor(props) {
		super(props);

		const pages = [<PageCover key={0} pos="top"></PageCover>];

		pages.push(
			<PageCover key={101} pos="bottom">
				THE END
			</PageCover>
		);

		this.state = {
			page: 0,
			totalPage: 0,
			orientation: "landscape",
			state: "read",
			pages: pages,
		};
	}

	nextButtonClick = () => {
		this.flipBook.getPageFlip().flipNext();
	};

	prevButtonClick = () => {
		this.flipBook.getPageFlip().flipPrev();
	};

	onPage = (e) => {
		this.setState({
			page: e.data,
		});
	};

	onChangeOrientation = (e) => {
		this.setState({
			orientation: e.data,
		});
	};

	onChangeState = (e) => {
		this.setState({
			state: e.data,
		});
	};

	componentDidMount() {
		this.setState({
			totalPage: this.flipBook.getPageFlip().getPageCount(),
		});
	}

	e;
	render() {
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
						onFlip={this.onPage}
						onChangeOrientation={this.onChangeOrientation}
						onChangeState={this.onChangeState}
						className="flip-book html-book demo-book"
						style={{ backgroundImage: "url(images/background.jpg)" }}
						ref={(el) => (this.flipBook = el)}
					>
						<PageCover key={0} pos="top"></PageCover>

						{this.props.pastBookEvents &&
							this.props.pastBookEvents.map((page, i) => (
								<Page
									array={this.props.pastBookEvents}
									key={`pastBookPage-${i}`}
									header={"Past"}
									content={page}
								/>
							))}

						{this.props.upcomingBookEvents &&
							this.props.upcomingBookEvents.map((page, i) => (
								<Page
									key={`pastBookPage-${i}`}
									header={"Upcoming"}
									content={page}
								/>
							))}
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
	}
}

export default function (props) {
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

	return (
		<>
			{userEvents[0] && (
				<Passport
					upcomingBookEvents={upcomingBookEvents}
					pastBookEvents={pastBookEvents}
				/>
			)}
		</>
	);
}
