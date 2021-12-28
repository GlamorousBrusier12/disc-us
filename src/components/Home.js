import React, { Component } from "react";
import { PostList } from ".";
// import { withRouter } from "react-router-dom";
class Home extends Component {
  render() {
    const { posts } = this.props;
    console.log("Props: ", this.props);
    return (
      <div>
        <PostList posts={posts} />
      </div>
    );
  }
}
// export default withRouter(Home);
export default Home;
