import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

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
            <h2>{props.jobLocation} </h2>
            <h3>Posted {moment(props.createdAt).fromNow()}</h3>
            <div>
                Salary Range <span className="salary">{props.salaryRange}</span>
            </div>
            <p className="job-description">{props.jobDescription}</p>
            <div>
                Skills:
                <ul className="skills-list">
                    {props.tags.map(function(tag) {
                    return (
                        <li key={tag}>{tag}</li>
                    );
                    })}
                </ul>
            </div>
        </div>
    );
}

JobPostDetail.propTypes = propTypes;

export default JobPostDetail;