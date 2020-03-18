import React from "react";

class PostsContainer extends React.Component {
  constructor(props) {
    super(props);
    let currentPosts = props.initialPosts;
    if (
      typeof window !== `undefined` &&
      typeof window[this.windowProp("postsToShow")] !== `undefined`
    ) {
      currentPosts = window[this.windowProp("postsToShow")];
    }

    this.state = {
      postsToShow: currentPosts
    };
  }

  componentDidMount() {
    window.addEventListener(`scroll`, this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener(`scroll`, this.handleScroll);
    window[this.windowProp("postsToShow")] = this.state.postsToShow;
  }

  handleScroll = () => {
    if (!this.ticking) {
      this.ticking = true;
      requestAnimationFrame(() => this.update());
    }
  };

  windowProp = propName => {
    return `${propName}${this.props.name}`;
  };

  update() {
    const distanceToBottom =
      document.documentElement.offsetHeight -
      (window.scrollY + window.innerHeight);
    if (
      distanceToBottom < 100 &&
      this.props.maxPosts > this.state.postsToShow
    ) {
      this.setState(prevState => ({
        postsToShow: prevState.postsToShow + this.props.initialPosts
      }));
    }
    this.ticking = false;
  }

  render() {
    return (
      <div className={this.props.className}>
        {this.props.children
          .slice(0, this.state.postsToShow)
          .map((post, i) => this.props.renderPost(post, i))}
      </div>
    );
  }
}

export default PostsContainer;
