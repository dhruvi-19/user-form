import React from "react";
import PropTypes from "prop-types";

class Button extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.string,
  };

  static defaultProps = {
    onClick: () => {},
    type: "button",
  };

  render() {
    const { children, className, onClick, type } = this.props;

    const baseClasses = "h-10 rounded border-2 border-solid";
    const mergedClasses = `${baseClasses} ${className}`;

    return (
      <button onClick={onClick} type={type} className={mergedClasses}>
        {children}
      </button>
    );
  }
}

export default Button;
