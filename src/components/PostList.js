import React, { Component } from "react";
import PropTypes from "prop-types";
class PostList extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="post-list">
        {posts.map((post) => (
          <div className="post-wrapper" key={post.id}>
            <div className="post-header">
              <div className="post-avatar">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt="user-pic"
                />
                <div>
                  <span className="post-author"> User {post.userId} </span>
                  <span className="post-time">a minute ago</span>
                </div>
              </div>
              <div className="post-content">{post.body}</div>
              <div className="post-actions">
                <div className="post-like">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
                    alt="likes-icon"
                  />
                  <span>16</span>
                </div>
                <div className="post-comments-icon">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1380/1380338.png"
                    alt="likes-icon"
                  />
                  <span>2</span>
                </div>
              </div>
              <div className="post-comment-box">
                <input placeholder="start typing a comment" />
              </div>
              <div className="post-comment-list">
                <div className="post-comment-item">
                  <div className="post-comment-header">
                    <span className="post-comment-author">Tony</span>
                    <span className="post-comment-time">a minute ago</span>
                    <span className="post-comment-likes">12</span>
                  </div>
                  <div className="post-comment-content"> Random comment </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
PostList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostList;
