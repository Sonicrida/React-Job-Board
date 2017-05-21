import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const propTypes = {
    data: PropTypes.shape({
        JobPost: PropTypes.shape({
            id: PropTypes.string.isRequired,
            company: PropTypes.string.isRequired,
            createdAt: PropTypes.string.isRequired,
            jobDescription: PropTypes.string.isRequired,
            jobLocation: PropTypes.string.isRequired,
            jobTitle: PropTypes.string.isRequired,
            salaryRange: PropTypes.string,
            tags: PropTypes.array.isRequired,
        }).isRequired,
    }).isRequired,


    
};

function JobPostDetail(props) {

    if (props.data.loading) {
        return <div>Still Loading</div>
    }

    const JobPost = props.data.JobPost;

    return(
        <div>
            <p>{JobPost.jobTitle}</p>
        </div>
    );
    
}

JobPostDetail.propTypes = propTypes;

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

const JobPostDetailWithData = graphql(JobPostQuery, {
    options: ({match}) => ({
        variables: {
            id: match.params.id,
        }
    }),
})(JobPostDetail)



export default JobPostDetailWithData;
