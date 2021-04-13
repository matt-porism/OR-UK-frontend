



const ItemList= ({itemList})  => {
const listItems = itemList.map(item => {
    return <li key={item.toString()}>{item}</li>
});
    return <ul className="headingList">{listItems}</ul>;    
}



export function HeadedList({ headingText, list }) {
     return (
        <>
        { headingText && <h2>{headingText}</h2> }
        { list && <ItemList itemList={list} /> }
        </>
   
        )
    
}