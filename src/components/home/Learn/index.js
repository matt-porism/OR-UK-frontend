import React, { Fragment } from 'react';

const Learn = ({left, right, children}) => {

    return (
      
            <Fragment>
              { /*<Section headingText={headingText} bodyText={bodyText} /> to go into section*/ }
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