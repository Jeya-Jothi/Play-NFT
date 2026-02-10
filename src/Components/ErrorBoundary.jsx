import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // you can send this to your logging service here
    console.error("ErrorBoundary caught:", error, info);
    this.setState({ info });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6">
          <h2 className="text-xl font-semibold mb-2">Something went wrong.</h2>
          <p className="text-sm text-slate-600 mb-4">
            An error occurred while loading this part of the app.
          </p>
          <details className="text-xs text-left max-w-xl bg-slate-50 p-3 rounded">
            <summary className="cursor-pointer">Show error (dev only)</summary>
            <pre className="whitespace-pre-wrap mt-2 text-xs">
              {String(this.state.error)}
            </pre>
            {this.state.info && (
              <pre className="whitespace-pre-wrap mt-2 text-xs">
                {String(this.state.info.componentStack)}
              </pre>
            )}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}
