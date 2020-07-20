"use strict";

const e = React.createElement;

class Popup extends React.Component {
  constructor(props) {
    super(props);

    //show is the boolean we use to show / Hide the popup
    this.state = {
      show: true,
      response: null,
    };
  }
  componentDidMount = () => {
    const BASE_URL = "https://codifyinditest.com/script_test";
    const API_CALL_URL = `${BASE_URL}` + "/api-test";
    fetch(API_CALL_URL)
      .then((response) => response.json())
      .then((response) => {
        const data = response["script test"];
        this.setState({ response: data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    if (!this.state.show) {
      return;
    }

    const imageUrl = null;
    const captionText = null;
    const phoneNumber = null;

    console.log(this.state);

    if (this.state.response) {
      const { feature_img, labels, phone_number } = this.state.response;
      if (feature_img) {
        imageUrl = feature_img;
      }
      if (labels) {
        captionText = labels;
      }
      if (phone_number) {
        phoneNumber = phone_number;
      }
    }

    // console.log(
    //   "=============================",
    //   imageUrl,
    //   captionText,
    //   phoneNumber
    // );

    return e(
      "div",
      {
        style: {
          position: "absolute",
          top: window.innerHeight - 100,
          left: window.innerWidth - 220,
        },
      },
      React.createElement(
        "div",
        {
          style: {
            display: "flex",
            flexDirection: "column",
            borderRadius: 4,
            height: 80,
            width: 200,
            backgroundSize: "cover",
            backgroundImage:
              "url('https://codifyinditest.com/script_test/wp-content/uploads/2020/04/image.png')",
          },
        },
        React.createElement(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              flex: 2,
              backgroundColor: "black",
              opacity: 0.9,
            },
          },
          React.createElement(
            "div",
            {
              style: {
                color: "white",
                display: "flex",
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                fontSize: 18,
              },
            },
            "Call Us Now"
          ),
          React.createElement(
            "div",
            {
              style: {
                cursor: "pointer",
                color: "#2FC41B",
                display: "flex",
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              },
            },
            "\u260E\xA0\xA0",
            React.createElement(
              "button",
              {
                style: {
                  cursor: "pointer",
                  backgroundColor: "black",
                  borderColor: "black",
                  color: "#2FC41B",
                },
                onClick: function onClick() {
                  navigator.clipboard.writeText("123");
                  window.alert("Phone number Copied to Clipboard");
                },
              },
              "+1-408-123-4567"
            )
          )
        ),
        React.createElement(
          "div",
          {
            style: {
              display: "flex",
              flex: 1,
              alignItems: "center",
              justifyContent: "flex-end",
              paddingRight: 16,
            },
          },
          React.createElement(
            "div",
            null,
            React.createElement(
              "button",
              {
                style: {
                  borderRadius: 50,
                  cursor: "pointer",
                  backgroundColor: "black",
                  color: "white",
                },
                onClick: function onClick() {
                  window.alert("Close Clicked");
                  this.setState({ show: false }, () => {});
                },
              },
              "\u2716"
            )
          )
        )
      )
    );
  }
}

const domContainer = document.querySelector("#popup_container");
ReactDOM.render(e(Popup), domContainer);
