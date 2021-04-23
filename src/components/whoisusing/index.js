import Button from '../shared/button';
import Numbers from './badge/'
import SideMenu from "../sidemenu/";
import useOukapi from '../../helpers/dataFetch';
import Card from './Card';
import LinksList from '../links/LinksList';

//build picture
 const WhoIsUsing= ({ styleName, disabled }) => {

 
    const sectionHeadings= ["api ready?"];


    const handleClick = (event) => {
        console.log("Button clicked,  define handler");
    }

    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const REACT_APP_WHO_IS_USING_PAGE = process.env.REACT_APP_WHO_IS_USING_PAGE;

    const [{data, isError}, isFetching] = useOukapi(`${BASE_URL}${REACT_APP_WHO_IS_USING_PAGE}`);


    const label = "Register your organisation"; //check if comes through from backend
    console.log("data", data) //check no unnecessary update
    const {pageTitle, numbers, id, orgSections, caseStudiesLink, underNumbersText } = data
    //need id make sure all keys set
    console.log(id);

    return (
        !isFetching && !isError &&  (<main className="main">
              <div className="flexcontainer">
            <SideMenu subMenu={sectionHeadings} />
            <div className="flexright">
        <h1>{pageTitle}</h1>
        <p>{underNumbersText}</p>
      
       <Numbers  numbers={numbers} />
       
        <Button label={label} disabled={disabled} onClick={handleClick} styles="style" icon="label"/>
       
        { caseStudiesLink && <ul className="listnostyle tempstyle"><LinksList list={caseStudiesLink} /></ul> }

          <div className="cardgrid">

                { orgSections && orgSections.map(organisation => 
                    {
                  
                        return  organisation.Organisation.map(org => {
                       
                                return <Card key={org.id} organisation={org}  styleName="card-content"/>
                            });
                    })
            }
            </div>
        
         </div>

    </div>

</main>)
)
   

}
export default WhoIsUsing;

