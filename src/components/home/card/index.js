import ImageCard from '../images/';
const CardList = ({  id, itemList,  styles }) => {

    let i = 1000;
    const addPadding = () => {

       
    if (itemList.length && itemList.length % 4 !== 0) {
        //pad out images for even distribution
        const paddingItem = {
            flexible: "",
            id: i
        }
        i = i+1;
        itemList.push(paddingItem);

    }
    }

    const BuildList = ({list})  =>{
        
        addPadding();
        const logosHolder = list.map(item => {
            if (item.CompanyLogo) {
            return <li  key={item.id ? `${item.id}_itemcard` : ""} className="img"><a href={item.link} className="link-with-image"><ImageCard  id={id}  logo={item}   styleName=""/></a></li>
            } else {
                return <li key={i++} className="img"></li>
            }

        })
       
        return <ul className="home-card-content">{logosHolder}</ul>
    }
    
    return (
       
             (itemList && itemList.length > 0) ? <BuildList list={itemList}/> :
            null
    )
    
}
export default CardList;
