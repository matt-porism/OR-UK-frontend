import Card from "../whoisusing/Card"
const CardList = ({  title, bodyText,  contentImage, id, itemList, paragraphTextList, styles }) => {

    return (
        
            itemList && itemList.length > 0 ? itemList.map(item => 
                {
                    return <Card key={`${id}_itemcard`}  id={item.id}  cardImage={contentImage} itemLinks={itemList}  styleName="card-content"/>
                })   :

                paragraphTextList && paragraphTextList.length > 0 && paragraphTextList.map(benefit => {
                    return <Card key={`${benefit.id}_card`} title={title} bodyText={bodyText} paragraphText={benefit} styleName="card-content" />
                })
    )
    
}
export default CardList;
