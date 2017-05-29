import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { ListingQuery } from './JobList';
//import styled from 'styled-components';

class CreateJobPost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            jobTitle: '',
            jobDescription: '',
        };
    }

    handleJobTitleChange = (event) => {
        this.setState({ jobTitle: event.target.value });
    };

    handleJobDescriptionChange = (event) => {
        this.setState({ jobDescription: event.target.value });
    };

    render() {
        return (
            <div>
                <input 
                    type="text"
                    value={this.state.jobTitle}
                    onChange={this.handleJobTitleChange}
                />

                <input 
                    type="text"
                    value={this.state.jobDescription}
                    onChange={this.handleJobDescriptionChange}
                />

                <button onClick={this.handlePost}>Post</button>
            </div>
        );
    }

    handlePost = () => {
        const { jobTitle, jobDescription } = this.state;
        this.props.addJobPost({ variables: {jobTitle, jobDescription} })
        .then(() => {
            //window.location.pathname = '/';
            this.props.history.push('/');
        });
    }
}

const addMutation = gql`
    mutation addJobPost($jobTitle: String!, $jobDescription: String!) {
        createJobPost(
            jobTitle: $jobTitle,
            jobDescription: $jobDescription
        ) {
            id
        }
    }
`;

console.log(ListingQuery);

const CreateJobPostWithMutation = graphql(addMutation, {
    name: 'addJobPost',
    options: (props) => ({
        refetchQueries: [
            {
                query: ListingQuery
            }
        ]
    })
})(CreateJobPost);

export default withRouter(CreateJobPostWithMutation);