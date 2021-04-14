import React, { Fragment } from 'react';
import LinksList from '../../links/LinksList';


const Learn = ({left, right, leftList}) => {
console.log("left", left, right)
    return (
      
            <Fragment>
              { /*<Section headingText={headingText} bodyText={bodyText} /> to go into section*/ }
              <section id="learn">
                <div id="learngrid">
                  {left && <section id="left"><ul><LinksList list={leftList} /></ul></section>}
                  {right && <section id="right"><LinksList list={right}/></section>}
                </div>
              </section>
       
       
     </Fragment>

    );
}
    export default Learn;