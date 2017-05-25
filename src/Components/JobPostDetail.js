import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';

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

const Jobdescription = styled.p`
    margin-top: 1rem;
`;

const Salary = styled.span`
    color: green;
    font-weight: bold;
`;

const SkillsList = styled.ul`
    display: flex;
    justify-content: left;
`;

const SkillsListItem = styled.li`
    margin: 10px;
    padding: 10px;
    border: 2px solid black;
`;

function JobPostDetail(props) {
    return (
        <div>
            <h1>{props.jobTitle}</h1>
            <h2>{props.jobLocation} </h2>
            <h3>Posted {moment(props.createdAt).fromNow()}</h3>
            <div>
                Salary Range <Salary>{props.salaryRange}</Salary>
            </div>
            <Jobdescription>{props.jobDescription}</Jobdescription>
            <div>
                Skills:
                <SkillsList>
                    {props.tags.map(function(tag) {
                    return (
                        <SkillsListItem key={tag}>{tag}</SkillsListItem>
                    );
                    })}
                </SkillsList>
            </div>
        </div>
    );
}

JobPostDetail.propTypes = propTypes;

export default JobPostDetail;