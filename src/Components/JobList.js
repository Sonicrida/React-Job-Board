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

        console.log(this.props.data.allJobPosts);

        return(
            <div>
                <h1>This is a list of jobs:</h1>

                <ul>
                    {this.props.data.allJobPosts.map(function(post) {
                        return (
                            <JobPost
                                key={post.id}
                                id={post.id}
                                jobTitle={post.jobTitle}
                            />
                        )
                    })}
                </ul>
            </div>
        );
    };

}

JobList.propTypes = {
    data: PropTypes.object.isRequired
};

const FeedQuery = gql`
query allJobPosts {
    allJobPosts {
        jobTitle
        id
  }
}`

export default graphql(FeedQuery)(JobList);