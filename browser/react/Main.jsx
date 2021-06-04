import React from "react";
import { Footer } from "./Footer";
import  {SideBar}  from "./SideBar"

const fakeAlbums = [
  {
    name: "Abbey Road",
    id: 1,
    imageUrl: "https://i.imgur.com/xenXaEw.jpg",
    songs: [
      {
        id: 1,
        name: "Romeo & Juliette",
        artists: [{ name: "Bill" }],
        genre: "Funk",
        audioUrl:
          "https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3",
      },
      {
        id: 2,
        name: "White Rabbit",
        artists: [{ name: "Bill" }, { name: "Alice" }],
        genre: "Fantasy",
        audioUrl:
          "https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3",
      },
      {
        id: 3,
        name: "Lucy in the Sky with Diamonds",
        artists: [{ name: "Bob" }],
        genre: "Space",
        audioUrl:
          "https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3",
      },
    ],
  },
  {
    name: "Yellow Submarine",
    id: 2,
    imageUrl: "https://i.imgur.com/EGplCHK.jpg",
    songs: [
      {
        id: 4,
        name: "London Calling",
        artists: [{ name: "Bill" }],
        genre: "Punk",
        audioUrl:
          "https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3",
      },
    ],
  },
];

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { albums: fakeAlbums };
  }

  render() {
    return (
      <div id="main" className="container-fluid">
        {<SideBar />}
        <div className="col-xs-10">
          <div className="albums">
            /--
            <h3>Albums</h3>
            <div className="row">
              {this.state.albums.map((album) => {
                return (
                  <div className="col-xs-4" key={album.name}>
                    <a className="thumbnail" href="#">
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
              })}
            </div>
          </div>
        </div>
        {<Footer />}
      </div>
    );
  }
}
