import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    id: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    jobDescription: PropTypes.string.isRequired,
    jobLocation: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    salaryRange: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
};

function JobPost(props) {

  console.log(props);

  return(
    <div>
      <p><a href={'/job-post/' + props.id}>{props.jobTitle}</a></p>
    </div>
  );
}

JobPost.propTypes = propTypes;

export default JobPost;
