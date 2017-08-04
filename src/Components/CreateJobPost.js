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
            jobLocation: '',
            company: '',
            salaryRange: '',
            isRemote: false,
            tags: []
        };
    }

    handleJobTitleChange = (event) => {
        this.setState({ jobTitle: event.target.value });
    };

    handleJobDescriptionChange = (event) => {
        this.setState({ jobDescription: event.target.value });
    };

    handleJobLocationChange = (event) => {
        this.setState({ jobLocations: event.target.value });
    };

    handleCompanyChange = (event) => {
        this.setState({ company: event.target.value });
    };

    handleSalaryRangeChange = (event) => {
        this.setState({ salaryRange: event.target.value });
    };

    handleIsRemoteChange = (event) => {
        this.setState({ isRemote: event.target.value });
    };

    handleTagsChange = (event) => {
        this.setState({ tags: event.target.value });
    };

    render() {
        return (
            <div>

                <label htmlFor="">
                    Job Title
                    <input 
                        type="text"
                        value={this.state.jobTitle}
                        onChange={this.handleJobTitleChange}
                    />
                </label>

                

                <input 
                    type="text"
                    value={this.state.jobDescription}
                    onChange={this.handleJobDescriptionChange}
                />

                <input 
                    type="text"
                    value={this.state.jobLocation}
                    onChange={this.handleJobLocationChange}
                />

                <input 
                    type="text"
                    value={this.state.company}
                    onChange={this.handleCompanyChange}
                />

                <input 
                    type="text"
                    value={this.state.salaryRange}
                    onChange={this.handleSalaryRangeChange}
                />

                <input 
                    type="checkbox"
                    value={this.state.isRemote}
                    onChange={this.handleJobDescriptionChange}
                />

                <input 
                    type="text"
                    value={this.state.tags}
                    onChange={this.handleTagsChange}
                />

                <button onClick={this.handlePost}>Post</button>
            </div>
        );
    }

    handlePost = () => {
        const { jobTitle, jobDescription, jobLocation, company, salaryRange, isRemote, tags } = this.state;
        this.props.addJobPost({ variables: {jobTitle, jobDescription, jobLocation, company, salaryRange, isRemote, tags} })
        .then(() => {
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