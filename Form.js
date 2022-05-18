import React from "react";
class Form extends React.Component {
  render() {
    return <div id="ff-compose"></div>;
  }
  componentDidMount() {
    var script = document.createElement("script");
    script.id = "ff-script";
    script.src =
      "https://formfacade.com/include/102524588689660466922/form/1FAIpQLScRna9dRCFKm7Kz6llXvvP2YUoSx5kDjMSoTElBEfeq8GgTMA/classic.js?div=ff-compose";
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);
  }
}

export default Form;