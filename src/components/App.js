import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/posts";
import { PostList } from "./index";
import PropTypes from "prop-types";
class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    // console.log("Props: ", this.props);
    const { posts } = this.props;
    return (
      <div>
        <nav className="nav">
          <div className="left-div">
            <h1 className="website-name">{"< Disc-Us/>"}</h1>
            {/* <img src="https://cdn-icons-png.flaticon.com/512/1205/1205495.png" /> */}
          </div>
          <div className="search-container">
            <img
              className="search-icon"
              src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
              alt="search-icon"
            />
            <input placeholder="Search" />

            <div className="search-results">
              <ul>
                <li className="search-results-row">
                  <img
                    src="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1637769738~hmac=22e534c0a6c3367f991a51f75af0c1d0"
                    alt="user-dp"
                  />
                  <span>John Doe</span>
                </li>
                <li className="search-results-row">
                  <img
                    src="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1637769738~hmac=22e534c0a6c3367f991a51f75af0c1d0"
                    alt="user-dp"
                  />
                  <span>John Doe</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="right-nav">
            <div className="user">
              <img
                src="https://cdn-icons-png.flaticon.com/512/449/449586.png"
                alt="user-dp"
                id="user-dp"
              />
              <span>John Doe</span>
            </div>
            <div className="nav-links">
              <ul>
                <li>Log in</li>
                <li>Log out</li>
                <li>Register</li>
              </ul>
            </div>
          </div>
        </nav>

        <PostList posts={posts} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
