import React from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

export default class BlogEntry extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      entry: null
    }
  }


componentDidMount(){
  console.log('mounting')
  axios.get('/home/jo/workspace/omRm.github.io/src/assets/testdown.md')
    .then(res => this.setState({entry: res.data}))
}

  render() {
    return (
      <div className="blog-entry">
      {this.state.entry ?  <ReactMarkdown source={this.state.entry}/> : null }
      </div>
    )
  }
}

BlogEntry.defaultProps = {

  md: `# Live demo

    Changes are automatically rendered as you type.

    * Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
    * Renders actual, "native" React DOM elements
    * Allows you to escape or skip HTML (try toggling the checkboxes above)
    * If you escape or skip the HTML, no 'dangerouslySetInnerHTML' is used! Yay!

    ## HTML block below

    <blockquote>
      This blockquote will change based on the HTML settings above.
    </blockquote>

    Pretty neat, eh?
  `
}
