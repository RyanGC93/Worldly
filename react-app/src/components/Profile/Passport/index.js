import React, { useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
// import "./styles.scss";
import './styles.css'

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
  return (
    <div className="page" ref={ref} data-density={props.density | "soft"}>
      <div className="page-content">
        <h2 className="page-header">Page header - {props.number}</h2>
        <div
          className="page-image"
          style={{ backgroundImage: "url(images/html/" + props.image + ")" }}
        ></div>
        <div className="page-text">{props.children}</div>
        <div className="page-footer">{props.number + 1}</div>
      </div>
    </div>
  );
});

export default class Passport extends React.Component {
  constructor(props) {
    super(props);

    const pages = [
      <PageCover key={0} pos="top">
        
      </PageCover>
    ];

    let pageNum = 0;
    for (let i = 0; i < 100; i++) {
      pageNum++;
      if (pageNum > 8) pageNum = 1;
      pages.push(
        <Page key={i + 1} image={pageNum + ".jpg"} number={i + 1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus
          mollis nibh, non convallis ex convallis eu. Suspendisse potenti.
          Aenean vitae pellentesque erat. Integer non tristique quam.
          Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra
          metus, a venenatis tellus tellus id magna. Aliquam ac nulla rhoncus,
          accumsan eros sed, viverra enim. Pellentesque non justo vel nibh
          sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. In cursus mollis nibh, non convallis ex
          convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat.
          Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin
          mollis, eros velit viverra metus, a venenatis tellus tellus id magna.
        </Page>
      );
    }

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
      pages: pages
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
      page: e.data
    });
  };

  onChangeOrientation = (e) => {
    this.setState({
      orientation: e.data
    });
  };

  onChangeState = (e) => {
    this.setState({
      state: e.data
    });
  };

  componentDidMount() {
    this.setState({
      totalPage: this.flipBook.getPageFlip().getPageCount()
    });
  }

  render() {
    return (
      <div>
        <div className="container-md" style={{ position: "relative" }}>
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
            {this.state.pages}
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
      </div>
    );
  }
}
