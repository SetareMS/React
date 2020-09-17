import React, { Component } from "react";

class Movie extends Component {
  state = {
    like: true
  };

  numMovies() {
    console.log(this.state.movies.length);
  }

  deleteHandler = (movie_ind) => {
    this.state.movies.splice(movie_ind, 1);
    this.setState({ movies: this.state.movies });
  }

  makeTable() {
    if (this.state.movies.length > 0)
      return (
        <div >
          <p className="mt-4"> showing {this.state.movies.length} movie(s) in the database </p>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
              </tr>
            </thead>
            <tbody>
              {this.state.movies.map((movie, i) => (
                <tr key={i}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.deleteHandler(i)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    else return <p> There are no movies in the database </p>;
  }

  render() {
    return <main className="container">{this.makeTable()}</main>;
  }
}

export default Movie;
