import ImageCard from '../images/';
const CardList = ({  id, itemList,  styles }) => {

    return (
        
            itemList && itemList.length > 0 ? itemList.map(item => 
                {
                    return <ImageCard key={item.id ? `${item.id}_itemcard` : ""} id={id}  logo={item}   styleName="card-content"/>
                })   :
null
    )
    
}
export default CardList;
