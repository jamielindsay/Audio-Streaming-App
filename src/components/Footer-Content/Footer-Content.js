import React, { useState } from "react";
import "./Footer-Content.css";
import albumArt from "../../assets/album_art.jpg";

import { Button, Icon, Progress, Slider } from "antd";

export default function FooterContent() {
  let songName = "I Luv the Valley Girl (Oh)";
  let artistName = "Xiu Xiu";
  const [songFaved, faveSong] = useState(false);

  const [muted, muteAudio] = useState(false);

  return (
    <div class="footer">
      <div class="current-song">
        <img class="footer-album-art" src={albumArt} alt="Album art"></img>
        <div class="current-info">
          <div>{songName}</div>
          <div>{artistName}</div>
        </div>
        <Button
          className="fave-song"
          type="link"
          ghost="true"
          onClick={() => faveSong(!songFaved)}
        >
          <Icon type="heart" theme={songFaved ? "filled" : "outlined"} />
        </Button>
      </div>
      <div class="footer-playback">
        <div class="playback-controls">
          <Button className="playback-button" ghost="true" type="link">
            <Icon type="fast-backward"></Icon>
          </Button>
          <Button className="playback-button" ghost="true" type="link">
            <Icon type="step-backward"></Icon>
          </Button>
          <Button className="playback-button" ghost="true" type="link">
            <Icon type="caret-right"></Icon>
          </Button>
          <Button className="playback-button" ghost="true" type="link">
            <Icon type="step-forward"></Icon>
          </Button>
          <Button className="playback-button" ghost="true" type="link">
            <Icon type="fast-forward"></Icon>
          </Button>
        </div>
        <div class="playback-timeline">
          <div class="timeline-time">2:00</div>
          <Progress className="timeline-song" percent={50} showInfo={false} />
          <div class="timeline-time">4:00</div>
        </div>
      </div>
      <div class="ancillary-controls">
        <Button
          className="mute-control"
          ghost="true"
          type="link"
          onClick={() => muteAudio(!muted)}
        >
          <Icon type={muted ? "stop" : "sound"}></Icon>
        </Button>
        <Slider
          className="audio-controls"
          defaultValue={30}
          tooltipVisible={false}
        />
      </div>
    </div>
  );
}
