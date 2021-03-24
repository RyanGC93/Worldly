import React, { useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
// import "./styles.scss";
import "./styles.css";
import { BiEdit } from "react-icons/bi";

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

const Page = React.forwardRef((props, ref) => {
  const contentOne = props.contentOnce
  const contentTwo = props.

  return (
		<div className="page" ref={ref} data-density={props.density | "soft"}>
			<div className="page-content">
				{/* <h2 className="page-header">Page header - {props.number}</h2>
        <div
          className="page-image"
          style={{ backgroundImage: "url(images/html/" + props.image + ")" }}
        ></div>
        <div className="page-text">{props.children}</div>
        <div className="page-footer">{props.number + 1}</div> */}
			</div>
		</div>
	);
});

export default class Passport extends React.Component {
	constructor(props) {
		super(props);

		const pages = [<PageCover key={0} pos="top"></PageCover>];
		console.log("prop", this.props);

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
		// this.createBook(this.props);
	}

	render() {
		return (
			<>
				<div
					id="passport"
					className="container-md"
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
						<div className="page">
							<BiEdit />
							<div className="profile-pic"></div>
							<div className="firstName">{this.props.user.first_name}</div>
							<div className="lastName">{this.props.user.last_name}</div>
							<div className="bio">{this.props.user.bio}</div>
							<div className="phoneNumber">{this.props.phone_number}</div>
						</div>
						<div className="page">
							<BiEdit />
							<div className="profile-pic"></div>
							<div className="firstName">{this.props.user.first_name}</div>
							<div className="lastName">{this.props.user.last_name}</div>
							<div className="bio">{this.props.user.bio}</div>
							<div className="phoneNumber">{this.props.phone_number}</div>
            </div>
            {this.props.pastEvents && this.props.pastEvents.map((page) => <Page contentOne={page[0]} contentTwo={page[1]} />)}
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
