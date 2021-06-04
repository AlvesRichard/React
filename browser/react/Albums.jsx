import React from "react";
export function Albums({ albums, handleClick }) {
  return albums.map((album) => {
    return (
      <div className="col-xs-4" key={album.name}>
        <a className="thumbnail" onClick={() => handleClick(album)} href="#">
          <img src={album.imageUrl} />
          <div className="caption">
            <h5>
              <span>{album.name}</span>
            </h5>
            <small>{album.songs.length}</small>
          </div>
        </a>
      </div>
    );
  });
}
