import React from "react";
import axios from "axios";
import { Footer } from "./Footer";
import { SideBar } from "./SideBar";
import { Albums } from "./Albums";
import { SingleAlbum } from "./SingleAlbum";

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { albums: [] };
    this.selectAlbum = {};
  }

  handleClick = (album) => {
    return <SingleAlbum single={album} />;
  };

  componentDidMount() {
    axios
      .get("/api/albums/")
      .then((res) => {
        this.setState({ albums: res.data });
      })
      .catch((err) => {
        console.error("error");
        console.error(err);
      });
  }

  render() {
    return (
      <div id="main" className="container-fluid">
        {<SideBar />}
        <div className="col-xs-10">
          <div className="albums">
            <h3>Albums</h3>

            <div className="row">
              {
                <Albums
                  albums={this.state.albums}
                  handleClick={this.handleClick}
                />
              }
            </div>
            {<SingleAlbum />}
          </div>
        </div>
        {<Footer />}
      </div>
    );
  }
}
