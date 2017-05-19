import React from 'react';
import JobPost from './JobPost';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class JobList extends React.Component {

    render() {
        console.log(this.props.data.loading);
        console.log(this.props.data);

        return(
            <div>
            <h1>This is a list of jobs:</h1>

            <ul>
                <li><JobPost /></li>
                <li><JobPost /></li>
                <li><JobPost /></li>
                <li><JobPost /></li>
            </ul>
            </div>
        );
    };

}

const FeedQuery = gql`
query allJobPosts {
    allJobPosts {
        jobTitle
        createdAt
  }
}`

export default graphql(FeedQuery)(JobList);