import { MdDeleteForever } from "react-icons/md";
      <LiItem ></LiItem>

function LiItem({item,id,itemId2 }){

  function handleDelete(){
    itemId2 ( id)
  }

  return (
    <>
    <li>
      <span>{item.name}</span>
      <span>{item.date}</span>
      <button onClick={()=>handleDelete()}>
        <MdDeleteForever />
      </button>
      
    </li>

    </>
  );
}
export default LiItem;