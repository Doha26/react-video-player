import React from 'react';
import ReactPlayer from 'react-player'
import StyledVideoWrapper from './styles/StyledVideoWrapper'
import StyledVideo from './styles/StyledVideo'
const Video = ({active,autoplay,endCallback,progressCallback}) => {
     return (
        <StyledVideo>
            <StyledVideoWrapper>
              <ReactPlayer width="100" height="100" 
              style={{position:"absolute",top:"0"}} 
              autoplay={autoplay} 
              url={active.video} 
              controls={true}
              onEnded={endCallback}
              onProgress={progressCallback}
              />
             </StyledVideoWrapper>
        </StyledVideo>
     );
};

export default Video;