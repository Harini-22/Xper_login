import React, { Component } from 'react';

class ErrorBoundary extends Component {
  static getDerivedStateFromError(error) {
    // Update state to display an error message or fallback UI
    return { hasError: true };
  }

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error or handle it in any way you want
    console.log('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render an error message or fallback UI here
      return <h1>Something went wrong.</h1>;
    }

    // Render the wrapped components
    return this.props.children;
  }
}

export default ErrorBoundary;
