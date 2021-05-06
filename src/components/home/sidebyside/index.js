import React from 'react';


const TwoColumnGrid = ({id, leftSideContent, rightSideContent}) => {
    
 return(
     <div className="gridRow">
          <div className="gridColumn">
             {leftSideContent}
            </div>
         { rightSideContent && <div id={id} className="gridColumn">{ rightSideContent}</div> }
    </div>
 )
}
export default TwoColumnGrid;