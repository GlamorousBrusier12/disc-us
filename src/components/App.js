import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/posts";
import { Home, Page404, Login } from "./";
import PropTypes from "prop-types";
import { Navbar } from "./";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const SignUp = () => <h1>SignUp</h1>;

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    // console.log("Props: ", this.props);
    const { posts } = this.props;
    return (
      <Router>
        <div>
          <Navbar />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <Routes>
            <Route exact path="/" element={<Home posts={posts} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
      </Router>
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
