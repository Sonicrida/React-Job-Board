import React from 'react';
import JobPost from './JobPost';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

class JobList extends React.Component {
    render() {
        if (this.props.data.loading) {
            return <div>Still Loading</div>;
        }

        return (
            <section className="">
                <section className="hero is-info is-medium is-bold">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="title">Jobs List:</h1>
                            <h2 className="subtitle">A clean list where you can view all jobs at once</h2>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <section className="section">
                        <div className="container columns is-centered">
                            <ul className="column is-two-thirds">
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
                                    );
                                })}
                            </ul>
                        </div>
                    </section>
                </div>
            </section>
        );
    }
}

JobList.propTypes = {
    data: PropTypes.object.isRequired
};

export const ListingQuery = gql`
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
`;

export default graphql(ListingQuery)(JobList);
