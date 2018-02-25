import React from 'react';
import ReactMarkdown from 'react-markdown';

export default class BlogEntry extends React.Component {

  render() {
    return (
      <div className="blog-entry">
      {this.props.source ?  <ReactMarkdown source={this.props.source}/> : null }
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
