import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
//import styled from 'styled-components';

class CreateJobPost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            jobTitle: '',
        };
    }

    handleJobTitleChange = (event) => {
        this.setState({ jobTitle: event.target.value });
    };

    render() {
        return (
            <div>
                <input 
                    type="text"
                    value={this.state.jobTitle}
                    onChange={this.handleJobTitleChange}
                />

                <button onClick={this.handlePost}>Post</button>
            </div>
        );
    }

    handlePost = () => {
        const { jobTitle } = this.state;
        this.props.addJobPost({ variables: {jobTitle} })
        .then(() => {
            window.location.pathname = '/';
            //this.props.history.push('/');
        });
    }
}

const addMutation = gql`
    mutation addJobPost($jobTitle: String!) {
        createJobPost(
            jobTitle: $jobTitle
        ) {
            id
        }
    }
`;

const CreateJobPostWithMutation = graphql(addMutation, {name: 'addJobPost'})(CreateJobPost);

export default withRouter(CreateJobPostWithMutation);