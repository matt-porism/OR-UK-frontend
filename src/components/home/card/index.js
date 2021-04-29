import ImageCard from '../images/';
const CardList = ({  id, itemList,  styles }) => {

let i = 1000;
    if (itemList.length && itemList.length%4 !== 0) {
        const paddingItem = {
            flexible: "",
            id: i
        }
        i = i+1;
        itemList.push(paddingItem);

    }
  

    const BuildList = ({list})  =>{
        const myHolder = list.map(item => {
            if (item.CompanyLogo) {
            return <li  key={item.id ? `${item.id}_itemcard` : ""} className="img"><ImageCard  id={id}  logo={item}   styleName=""/></li>
            } else {
                return <li key={i++} className="img"></li>
            }

        })
       
        return <ul className="home-card-content">{myHolder}</ul>
    }
    
    return (
       
             (itemList && itemList.length > 0) ? <BuildList list={itemList}/> :
            null
    )
    
}
export default CardList;
