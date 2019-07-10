import React, { Component } from 'react';

export default function unmountHOC(WrappedComponent) {
    return class extends Component {
        state = { mounted: false }

        componentGracefulUnmount = () => {
            this.setState({ mounted: false });
            window.removeEventListener('beforeunload', this.componentGracefulUnmount);
        }

        componentWillMount = () => this.setState({ mounted: true })

        componentDidMount = () => window.addEventListener('beforeunload', this.componentGracefulUnmount)

        componentWillUnmount = () => this.componentGracefulUnmount()

        render() {
            const { mounted } = this.state;
            if (mounted) {
                return <WrappedComponent {...this.props} />;
            }
            return null;
        }
    };
}
