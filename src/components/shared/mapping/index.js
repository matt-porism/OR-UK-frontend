import LinksList from '../../links/LinksList';

const MappableList = ({mapList, id, styleName}) => {
    return (
 mapList && mapList.map(item => {
    return <LinksList key={`${id}${item.id}`} styleName={styleName}  list={item}/>
}) 
    )
}

export default(MappableList);