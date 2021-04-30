import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Numbers from './badge/'
import SideMenu from "../sidemenu/";
import useOukapi from '../../helpers/dataFetch';
import CardList from './Cards/CardList';
import Title from '../shared/title';

//build a picture
const WhoIsUsing = () => {

    //use styles prop

    const getObjects = (orgSections) => {

        let titles = orgSections.filter(org => org.title);

        return titles.map(title => {
            return title.title
        });
    }

    const getGroups = (orgSections) => {

        let orgTitles = orgSections.filter(org => org.title);
        return orgTitles;

    }

    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const REACT_APP_WHO_IS_USING_PAGE = process.env.REACT_APP_WHO_IS_USING_PAGE;

    const [{ data, isError }, isFetching] = useOukapi(`${BASE_URL}${REACT_APP_WHO_IS_USING_PAGE}`);
    const {
        pageTitle, 
        numbers, 
        id, 
        orgSections, 
        caseStudiesLink, 
        underNumbersText, 
        registerLink,
        registerLinkWithTitle
     } = data

    //need id make sure all keys set
    console.log(id);

    let registerLinkWithTitleSection = null;
    if (registerLinkWithTitle) {
        registerLinkWithTitleSection = (
        <>
            <hr/>
            <section>
                <h3>{registerLinkWithTitle.title}</h3>
                <Link to={registerLinkWithTitle.link.url}>
                    {registerLinkWithTitle.link.TextToDisplay}
                </Link>
            </section>
        </>
        )
    }

    if (isFetching || isError) return null;

    return (
        <main id="content" className="main-container">
            <div className="page-container flex-container">
                <SideMenu subMenu={getObjects(orgSections)} />
                <article className="flex-right">
                    <h1>{pageTitle}</h1>

                    <Numbers numbers={numbers} />
                    <p>{underNumbersText}</p>

                    <a href={registerLink.url} className="button button-primary">
                        {registerLink.TextToDisplay}
                    </a>

                    <Link to={caseStudiesLink.url} >{caseStudiesLink.TextToDisplay}</Link>



                    {orgSections && getGroups(orgSections).map((organisation, index) => {
                        return <Fragment key={`${organisation.id}grouptitle}`}>
                            <Title title={organisation.title} id={`section-${index + 1}-heading`} />
                            <div id={`${organisation.id}_title`} className="cardgrid">
                                <CardList key={organisation.id} organisationList={organisation.Organisation} type="org" />
                            </div>
                        </Fragment>

                    })
                    }

                    {registerLinkWithTitleSection}

                </article>

            </div>

        </main>
    )

}
export default WhoIsUsing;

