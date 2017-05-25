import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    id: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    jobLocation: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    salaryRange: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
};

function JobPost(props) {

  return(
    <li>
      <a href={'/job-post/' + props.id}>
        <h3>{props.jobTitle}</h3>
        <div>{props.company} - {props.jobLocation}</div>
        <div>{props.createdAt}</div>
        <div>{props.salaryRange}</div>
        <div>
          <ul>
            Skills:
            {props.tags.map(function(tag) {
              return (
                <li key={tag}>{tag}</li>
              );
            })}
          </ul>
        </div>
      </a>
    </li>
  );
}

JobPost.propTypes = propTypes;

export default JobPost;
