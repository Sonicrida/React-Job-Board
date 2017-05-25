import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    id: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    jobDescription: PropTypes.string.isRequired,
    jobLocation: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    salaryRange: PropTypes.string,
    tags: PropTypes.array.isRequired,
}

function JobPostDetail(props) {
    return (
        <div>
            <h1>{props.jobTitle}</h1>
            <p>{props.jobDescription}</p>
        </div>
    );
}

JobPostDetail.propTypes = propTypes;

export default JobPostDetail;