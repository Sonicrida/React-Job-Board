import React from 'react';
import JobPost from './JobPost';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

class JobList extends React.Component {

    render() {

        if (this.props.data.loading) {
            return <div>Still Loading</div>
        }

        return(
            <div>
                <h1>Jobs List:</h1>

                <ul>
                    {this.props.data.allJobPosts.map(function(post) {
                        return (
                            <JobPost
                                key={post.id}
                                id={post.id}
                                company={post.company}
                                createdAt={post.createdAt}
                                jobLocation={post.jobLocation}
                                jobTitle={post.jobTitle}
                                salaryRange={post.salaryRange}
                                tags={post.tags}
                            />
                        )
                    })}
                </ul>
            </div>
        );
    };

};

JobList.propTypes = {
    data: PropTypes.object.isRequired
};

const ListingQuery = gql`
    query allJobPosts {
        allJobPosts {
            id
            company
            createdAt
            jobLocation
            jobTitle
            salaryRange
            tags
        }
    }
`

export default graphql(ListingQuery)(JobList);