import Button from '../shared/button';
import Numbers from './badge/'
import SideMenu from "../sidemenu/";
import useOukapi from '../../helpers/dataFetch';
import CardList from './Cards/CardList';
import LinkListItem from '../links/LinkListItem';
import { Fragment } from 'react';
import Title from '../shared/title';

//build a picture
 const WhoIsUsing= ({ styles, disabled }) => {

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


    const handleClick = (event) => {
        console.log("Button clicked,  define handler");
    }

    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const REACT_APP_WHO_IS_USING_PAGE = process.env.REACT_APP_WHO_IS_USING_PAGE;

    const [{data, isError}, isFetching] = useOukapi(`${BASE_URL}${REACT_APP_WHO_IS_USING_PAGE}`);
    const {pageTitle, numbers, id, orgSections, caseStudiesLink, underNumbersText } = data


    const label = "Register your organisation"; //check if comes through from backend
    console.log("data", data) //check no unnecessary update
  
    //need id make sure all keys set
    console.log(id);
 
    return (
        !isFetching && !isError &&  (<main id="content" className="main">
            
          
              <div className="flexcontainer">
            <SideMenu subMenu={getObjects(orgSections)} />
            <div className="flex-right">
        <h1>{pageTitle}</h1>
        <p>{underNumbersText}</p>
      
       <Numbers  numbers={numbers} />
       
        <Button label={label} disabled={disabled} onClick={handleClick} styles="style" role="button" icon="label" />
       
        { caseStudiesLink && <ul className="listnostyle tempstyle"><LinkListItem link={caseStudiesLink} /></ul> }

         
         
                { orgSections &&  getGroups(orgSections).map(organisation => 
                    {
                        return <Fragment key={`${organisation.id}grouptitle}`}> 
                            <Title title={organisation.title}/>  
                         <div id={`${organisation.id}_title`} className="cardgrid">
                        <CardList key={organisation.id} organisationList={organisation.Organisation} type="org" />
                        </div>
                        </Fragment>
                      
                    })
            }
            
         </div>

    </div>

</main>)
)

}
export default WhoIsUsing;

