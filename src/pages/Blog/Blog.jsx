import React from 'react';
import BlogEntry from '../../components/BlogEntry/BlogEntry';
import axios from 'axios';

export default class Blog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    }
  }

  componentDidMount() {
    axios.get('./posts/testdown.md').then(r => this.setState({posts: [r.data]}))
  }

  render() {
    return (
      <div className="blog">
      {this.state.posts.map(e => <BlogEntry source={e}/>)}
      </div>
    )
  }
}
