import LiItem from "./li";
function ItemList({itemArry,itemId}) {
  
  return (
    <ul className="listItem">
    {itemArry.map((item ,i)=>
      <LiItem key={i} id={i} item={item} itemId2={itemId}></LiItem>
    )}
 
    </ul>
  );
}
export default ItemList;
