// Code YouTubeDebugger Component Here
import React from "react";

class YouTubeDebugger extends React.Component {
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: "1080p",
      },
    },
  };

  onClick = () => {
    this.setState(
      {
        settings: { ...this.state.settings, bitrate: 12 },
      },
      () => console.log(this.state.settings.bitrate)
    );
  };
  onResClick = () => {
    this.setState(
      {
        settings: { 
          ...this.state.settings, 
          video: {
            resolution: '720p'
          }
        },
      },
      () => console.log(this.state.settings.bitrate)
    );
  };
  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.onClick}>
          {this.state.settings.bitrate}
        </button>
        <button onClick={this.onResClick}className="resolution">
          {this.state.settings.video.resolution}
        </button>
      </div>
    );
  }
}

export default YouTubeDebugger;
