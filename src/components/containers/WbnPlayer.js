import React , {useState,useEffect} from 'react';
import Video from '../Video';
import Playlist from '../containers/Playlist';
import {ThemeProvider} from "styled-components"
import StyledWbnPlayer from "../styles/StyledWbnPlayer"

const theme = {
     bgcolor:"#353535",
     bgcolorItem:"#414141",
     bgcolorItemActive:"#405C63",
     bgcolorPlayed:"#405C63",
     border:"none",
     borderPlayer:"none",
     color:"#fff"
}

const themeLight = {
     bgcolor:"#fff",
     bgcolorItem:"#fff",
     bgcolorItemActive:"#80a7b1",
     bgcolorPlayed:"#7d9979",
     border:"1px solid #353535",
     borderPlayer:"none",
     color:"#353535"
}

const WbnPlayer = props => {

     const videos = JSON.parse(document.querySelector('[name="videos"]').value);

     const [state, setState] = useState ({
          videos:videos.playlist,
          activeVideo:videos.playlist[0],
          nightMode:true,
          playlistId:videos.playlistId,
          autoplay:false
     });

     const nightModeCallBack = ()=>{

     };

     const endCallBack = ()=>{

     };

     const progressCallBack = ()=>{

     };

     return (
       <ThemeProvider theme={state.nightMode ?theme:themeLight}>
           {state.videos !== null ? (
        <StyledWbnPlayer>
          <Video
            active={state.activeVideo}
            autoplay={state.autoplay}
            endCallback={endCallBack}
            progressCallback={progressCallBack}
          />
          <Playlist
            videos={state.videos}
            active={state.activeVideo}
            nightModeCallBack={nightModeCallBack}
            nightMode={state.nightMode}
          />
        </StyledWbnPlayer>
      ) : null}
       </ThemeProvider>
     );
};

export default WbnPlayer;