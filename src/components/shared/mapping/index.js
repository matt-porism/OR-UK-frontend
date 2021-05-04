import LinkListItem from '../../links/LinkListItem';

const MappableList = ({mapList, id, styleName}) => {
    return (
 mapList && mapList.map(item => {
    return <LinkListItem key={`${id}${item.id}`} styleName={styleName}  link={item}/>
}) 
    )
}

export default(MappableList);