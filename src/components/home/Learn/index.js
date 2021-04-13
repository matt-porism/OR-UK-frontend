import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


function Learn({left, right, children}) {

    return (
      
            <Fragment>
              { /*<Section headingText={headingText} bodyText={bodyText} /> craft to go into section*/ }
              <section id="learn">
                <div id="learngrid">
                  {left && <section id="left">{children}</section>}
                  {right && <section id="right">children</section>}
                </div>
              </section>
       
       
     </Fragment>

    );
}
    export default Learn;