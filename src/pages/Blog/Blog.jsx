import React from 'react';
import BlogEntry from '../../components/BlogEntry/BlogEntry';

export default class Blog extends React.Component {

  render() {
    return (
      <div className="blog">
        <BlogEntry />
        <BlogEntry />
        <BlogEntry />
      </div>
    )
  }
}
