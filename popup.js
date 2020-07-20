"use strict";

const e = React.createElement;

class Popup extends React.Component {
  constructor(props) {
    super(props);

    //show is the boolean we use to show / Hide the popup
    this.state = { show: false };
  }

  render() {
    if (this.state.show) {
      return;
    }

    return e(
      "button",
      { onClick: () => this.setState({ show: true }) },
      "Close Popup"
    );
  }
}

const domContainer = document.querySelector("#popup_container");
ReactDOM.render(e(Popup), domContainer);
