import React from "react"
import PropTypes from "prop-types"
class Post extends React.Component {
  render () {
    return (
      <React.Fragment>
        Title: {this.props.title}
        Published: {this.props.published}
        Published By: {this.props.publishedBy}
      </React.Fragment>
    );
  }
}

Post.propTypes = {
  title: PropTypes.string,
  published: PropTypes.bool,
  publishedBy: PropTypes.instanceOf(Person)
};
export default Post
