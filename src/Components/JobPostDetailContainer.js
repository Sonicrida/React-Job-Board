import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import JobPostDetail from './JobPostDetail';

const propTypes = {
    data: PropTypes.object.isRequired
};

function JobPostDetailContainer(props) {

    if (props.data.loading) {
        return <div>Still Loading</div>
    }

    const JobPost = props.data.JobPost;

    return(
        <div>
            <JobPostDetail 
                id={JobPost.id}
                company={JobPost.company}
                createdAt={JobPost.createdAt}
                jobDescription={JobPost.jobDescription}
                jobLocation={JobPost.jobLocation}
                jobTitle={JobPost.jobTitle}
                salaryRange={JobPost.salaryRange}
                tags={JobPost.tags}
            />
        </div>
    );
    
}

JobPostDetailContainer.propTypes = propTypes;

const JobPostQuery = gql`
    query jobPost($id: ID!) {
        JobPost(id: $id) {
            id
            company
            createdAt
            jobDescription
            jobLocation
            jobTitle
            salaryRange
            tags
        }
    }

`

const JobPostDetailContainerWithData = graphql(JobPostQuery, {
    options: ({match}) => ({
        variables: {
            id: match.params.id,
        }
    }),
})(JobPostDetailContainer)



export default JobPostDetailContainerWithData;
