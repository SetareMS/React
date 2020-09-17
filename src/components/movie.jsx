import React, { Component } from "react";
import Like from "./common/like";

class Movie extends Component {
  state = {
    liked: true,
  };

  likeHandler = (liked) => {
    this.setState({ liked: !this.state.liked });
  };

  render() {
    const { movie } = this.props;
    // console.log(movie)
    return (
      <React.Fragment>
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td>
          <Like liked={this.state.liked} onLike={this.likeHandler}></Like>
        </td>
        <td>
          <button className="btn btn-danger" onClick={this.props.onDelete}>
            delete
          </button>
        </td>
      </React.Fragment>
    );
  }
}

export default Movie;
