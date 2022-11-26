import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: { name: "", message: "" } };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
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
