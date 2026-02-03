'use client';

import { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to console for debugging
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-cream p-4">
          <div className="max-w-md text-center">
            <div className="text-6xl mb-6">😕</div>
            <h2 className="text-2xl md:text-3xl font-bold text-mauve mb-4">
              Oops! Something went wrong
            </h2>
            <p className="text-base text-taupe mb-6 leading-relaxed">
              The calculator encountered an unexpected error. Don&apos;t worry - your data is safe. Please refresh the page to try again.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-8 py-4 bg-gradient-to-r from-peach to-coral text-mauve-dark font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Refresh Page
            </button>
            <p className="text-xs text-taupe mt-6">
              If this problem persists, please try clearing your browser cache.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
