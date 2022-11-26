export default ErrorBoundary;
declare class ErrorBoundary extends React.Component<any, any, any> {
    static getDerivedStateFromError(error: any): {
        hasError: boolean;
        error: any;
    };
    constructor(props: any);
    state: {
        hasError: boolean;
    };
    componentDidCatch(error: any, errorInfo: any): void;
    render(): any;
}
import React from "react";
