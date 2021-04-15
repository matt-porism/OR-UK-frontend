import React, { Fragment } from 'react';
import LinksList from '../../links/LinksList';


const Learn = ({left, right, leftList, rightList}) => {
//think this through and refactor
    return (
      
            <Fragment>
              { /*<Section headingText={headingText} bodyText={bodyText} /> to go into section*/ }
              <section id="learn">
                <div id="learngrid">
                  {left && <section id="left"><ul><LinksList list={leftList} /></ul></section>}
                  {right && <section id="right"><ul><LinksList list={rightList}/></ul></section>}
                </div>
              </section>
       
       
     </Fragment>

    );
}
    export default Learn;