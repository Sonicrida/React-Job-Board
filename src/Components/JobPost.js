import React from 'react';
import PropTypes from 'prop-types';

function JobPost(props) {
  console.log(props);
  return(
    <div>
      <p><a href={'/job-post/' + props.id}>{props.jobTitle}</a></p>
    </div>
  );
}

JobPost.propTypes = {
    jobTitle: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};

export default JobPost;
