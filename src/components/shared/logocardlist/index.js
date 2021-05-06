import ImageCard from '../../home/images'; //can move to shared folder

const CardList = ({  id, itemList,  styles }) => {

    const BuildList = ({list})  => {
        
        const logosHolder = list.map((item, index) => {
            if (item.CompanyLogo) {
            return <li  key={item.id ? `${item.id}_itemcard` : ""} className="img"><a href={item.link} className="link-with-image"><ImageCard  id={id}  logo={item}   styleName=""/></a></li>
            } else {
                return <li key={index} className="img"></li>
            }})
        return <ul className="home-card-content">{logosHolder}</ul>
    }
    return (
             (itemList && itemList.length > 0) ? <BuildList list={itemList}/> :
            null
    )
}

export default CardList;
