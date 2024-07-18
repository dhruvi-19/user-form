import React from "react";
import PropTypes from "prop-types";

class Button extends React.Component {
  render() {
    const { children, className } = this.props;

    const baseClasses = "h-10 rounded border-2 border-solid";
    const mergedClasses = `${baseClasses} ${className}`;

    return <button className={mergedClasses}>{children}</button>;
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
