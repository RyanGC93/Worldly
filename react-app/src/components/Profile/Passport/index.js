import React, { useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
// import "./styles.scss";
import "./styles.css";
import { BiEdit } from "react-icons/bi";
import { useSelector } from "react-redux";
import Slider from "infinite-react-carousel";

const PageCover = React.forwardRef((props, ref) => {
	return (
		<div
			className={"page page-cover page-cover-" + props.pos}
			ref={ref}
			data-density="hard"
		>
			<div className="page-content">
				<h2>{props.children}</h2>
			</div>
		</div>
	);
});

const UserPage = React.forwardRef((props, ref) => {
	return (
		<div
			className={"page page-cover page-cover-" + props.pos}
			ref={ref}
			data-density="soft"
		>
			<div className="page-content">
				<h2>{props.children}</h2>
			</div>
		</div>
	);
});

const Page = React.forwardRef((props, ref) => {
	// const images = useSelector((state) => {
	// 	return Object.values(state.photoGallery).filter((photo) => photo.event_id === event.event_id);
	//   });
	let imagesOne, imagesTwo;
	const contentOne = props.contentOne;
	const contentTwo = props.contentTwo;
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

	return (
		<div className="page" ref={ref} data-density={props.density | "soft"}>
			<div className="page-header">{props.header} Events </div>
			<div className="page-content">
				{contentOne && (
					<div className="content-section">
						<div className="page-title">{contentOne.title}</div>
						{imagesOne[0] && (
							<Slider className="page-carousel">
								{imagesOne.map((image) => (
									<div className="page-img-container" key={image.event_id}>
										<img
											key={image.photo_id}
											className="event-image passport-image"
											alt={image.description}
											src={image.photo_url}
										/>
										<div className="page-location">
											<div className="page-country">
												{contentOne.country}, {contentOne.region}
											</div>
											<div className="page-region"></div>
										</div>
										<div className="page-date">{contentOne.date.slice(5)}</div>
									</div>
								))}
							</Slider>
						)}
					</div>
				)}
				{contentTwo && (
					<div className="content-section">
						<div className="page-title">{contentTwo.title}</div>
						{imagesTwo[0] && (
							<Slider className="page-carousel">
								{imagesTwo.map((image) => (
									<div className="page-img-container" key={image.event_id}>
										<img
											key={image.photo_id}
											className="event-image passport-image"
											alt={image.description}
											src={image.photo_url}
										/>
										<div className="page-location">
											<div className="page-country">
												{contentTwo.country}, {contentTwo.region}
											</div>
											<div className="page-region"></div>
										</div>
									</div>
								))}
							</Slider>
						)}
						<div className="page-time">
							<div className="page-date">{contentOne.date}</div>
						</div>
						<div className="page-name">{contentOne.firstName}</div>
						{/* <div className='page-description'>
            // {contentOne.description}
                  </div> */}
					</div>
				)}
			</div>
		</div>
	);
});

export default class Passport extends React.Component {
	constructor(props) {
		super(props);

		const pages = [<PageCover key={0} pos="top"></PageCover>];

		pages.push(
			<PageCover key={101} pos="bottom">
				THE END
			</PageCover>
		);
		console.log(props, "passport");

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
		console.log(this.props, '======================')
		// this.createBook(this.props);
	}

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
						<Page key={1}></Page>

						{this.props.pastEvents &&
							this.props.pastEvents.map((page) => (
								<Page
									header={"Past"}
									contentOne={page[0]}
									contentTwo={page[1]}
								/>
							))}
						{this.props.upcomingEvents &&
							this.props.upcomingEvents.map((page) => (
								<Page
									header={"Upcoming"}
									contentOne={page[0]}
									contentTwo={page[1]}
								/>
							))}
					</HTMLFlipBook>
				</div>
				<div className="container mt-3">
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
				</div>
			</>
		);
	}
}
