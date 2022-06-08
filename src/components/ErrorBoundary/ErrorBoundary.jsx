import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          {process.env.REACT_APP_STAND === "production"
            ? "у нас ошибка"
            : this.state.error.toString()}
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
