import React from 'react';
import Video from '../Video';
import Playlist from '../containers/Playlist';
import {ThemeProvider} from "styled-components"
import StyledWbmPlayer from "../styles/StyledWbnPlayer"

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

const WBNPlayer = props => {

     const nightModeCallBack = ()=>{

     };

     const endCallBack = ()=>{

     };

     const progressCallBack = ()=>{

     };

     const mPlayer = (
          <StyledWbmPlayer>

               <Video 
               active={state.activeveVideo} 
               autoplay={state.autoplay} 
               endCallback={endCallBack}
               progressCallback={progressCallBack} />

               <Playlist
               videos = {state.videos}
               active={state.activeveVideo}
               nightMode={state.nightMode} />
               
       </StyledWbmPlayer>
     );

     return (
       <ThemeProvider theme={state.nightMode ?theme:themeLight}>
            {state.videos !== null ? mPlayer: null}
       </ThemeProvider>
     );
};

export default WBNPlayer;