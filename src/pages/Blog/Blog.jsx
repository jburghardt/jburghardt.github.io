import React from 'react';
import BlogEntry from '../../components/BlogEntry/BlogEntry';
import axios from 'axios';

export default class Blog extends React.Component {

  componentDidMount() {
    axios.get('./posts/testdown.md').then(r => console.log(r.data))
  }


  render() {
    return (
      <div className="blog">
        <BlogEntry />
      </div>
    )
  }
}
