import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

// const propTypes = {
//     id: PropTypes.string.isRequired,
//     company: PropTypes.string.isRequired,
//     createdAt: PropTypes.string.isRequired,
//     jobDescription: PropTypes.string.isRequired,
//     jobLocation: PropTypes.string.isRequired,
//     jobTitle: PropTypes.string.isRequired,
//     salaryRange: PropTypes.string.isRequired,
//     tags: PropTypes.array.isRequired,
// };

function JobPostDetail(props) {

  console.log(props);

  if (props.data.loading) {
      return <div>Still Loading</div>
  }

  const {JobPost} = props.data.JobPost;
  console.log(JobPost);

  return(
    <div>
      <p><a href={'/job-post/' + props.id}>{JobPost.jobTitle}</a></p>
    </div>
  );
}

// JobPostDetail.propTypes = propTypes;

const JobPostQuery = gql`
    query jobPost($id: ID!) {
        JobPost(id: $id) {
            id
            jobTitle
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
