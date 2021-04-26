import Card from "../whoisusing/Card"

const CardList = ({ organisationList, id, styles }) => {

    return (
       
            organisationList && organisationList.length > 0 && organisationList.map(organisation => 
                {
           
                    return <Card key={organisation.id} organisation={organisation}  styleName="card-content"/>
               
                })
    )
    
}
export default CardList;
