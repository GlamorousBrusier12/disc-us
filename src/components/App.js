import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/posts";
import { PostList } from "./";
import PropTypes from "prop-types";
import { Navbar } from "./";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = (props) => {
  console.log("Props: ", props);
  return <h1>Home</h1>;
};
const Login = () => <h1>Login</h1>;
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
          {/* <PostList posts={posts} /> */}
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
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
