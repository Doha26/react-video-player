import React from 'react';
import StyledNightMode from './styles/StyledNightmode'
const NightMode = ({nightModeCallBack,nightMode}) => {
     return (
        <StyledNightMode>
           <span> NightMode : </span>
           <label className ="switch" checked={NightMode} onChange="nightModeCallBack"/>
           <span className="slider round "/>
        </StyledNightMode>
     );
};

export default NightMode;