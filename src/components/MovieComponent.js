import React from "react";

const MovieComponent = ({ items, isLoading, setSelectedMovie }) => {
  //   const { Title, Year, imdbID, Type, Poster } = props.movie;

  return isLoading ? (
    // <Loader />
    <h1>pls enter a valid movie or series name...</h1>
  ) : (
    <section className="cards">
      {items.map((item) => (
        <div
          key={Math.random()}
          onClick={() => {
            setSelectedMovie(item.imdbID);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <h1>{item.Title}</h1>
          <img src={item.Poster} alt="poster" />
          <p>{item.Year}</p>
          <p>{item.Type}</p>
        </div>
      ))}
    </section>
  );
};

export default MovieComponent;
