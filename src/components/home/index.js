import Section from '../section/index';
import { Link } from 'react-router-dom';
import { HeadedList } from '../list';
import Who from './Who';
import Learn from './Learn';

function HomePage({ headingText, bodyText, quote, anchorLabel, anchorLink, classname, listItems, hIIHeading, allProps ={} }) {
allProps.title = "test"; allProps.counters = 3;
 allProps.linkTitle = "Testing"
    return (
        <main className={classname}>
            <Section headingText={headingText} bodyText={bodyText} />
            {quote && <figure className="figure"><blockquote>{quote}</blockquote></figure>}
            {anchorLabel && <Link className="nav-link" to={anchorLink}>
          {anchorLabel}
        </Link>}
        {hIIHeading && listItems && <HeadedList headingText={hIIHeading} list={listItems}/>}
        { allProps.title = true && <Who counters={allProps.counters} logoList={allProps.logos} title={allProps.title} linkTitle={allProps.linkTitle}  /> }
        <Learn/>
        </main>

    );
}
    export default HomePage;