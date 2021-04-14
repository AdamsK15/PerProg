import React, { Component } from 'react';

class Topics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            issue_1: []
        };
    }

    componentDidMount() {
        this.setState({
            // issue_1: issue_1
        })
    }

    render() {
        return 123
        // const { issue_1 } = this.state;
        // let showIssue_1 = issue_1.map(issue => {
        //     return showIssue_1
        // })
    }

}

export default Topics