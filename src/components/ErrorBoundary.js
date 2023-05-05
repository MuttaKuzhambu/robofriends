import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }
    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }
    render() {
        if (this.state.hasError) {
            return <h1>Oops there was an error!</h1>
        } else {
            return (<div>{this.props.children}</div>)
        }
    }
}
export default ErrorBoundary;