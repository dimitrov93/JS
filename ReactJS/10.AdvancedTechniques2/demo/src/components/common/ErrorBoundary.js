import { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            error: null,
        }
    }


    static getDerivedStateFromError(error) {
        return {error: error.message}
    }

    componentDidCatch(error,errorInfo) {
        console.log(error);
        console.log(errorInfo);
    }

    render() {
        if (this.state.error) {
            return <h1>Error Now</h1>
        }

        return this.props.children
    }
}


export default ErrorBoundary;