import React from 'react';
import JobPost from './JobPost';

function JobList() {
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
}

export default JobList;
