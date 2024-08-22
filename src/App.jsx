import { useRef, useState } from "react";
import "./App.css";
import Heading from "./components/heading/heading";
import InputValue from "./components/inputValue/inputValue";
import ItemList from "./components/listItem/listItem";
import ErrorMAessage from "./components/ErrorMAessage/ErrorMAessage";

function App() {
  // let initial = JSON.parse(localStorage.getItem('toDOD')) && []
  let [itemArry, setitemName] = useState([]);

  function addButton(newName, newDate) {
    if (newName !== "" || newName !== "") {
      const dub = itemArry.filter((item) => item.name === newName);

      if (dub.length > 0) {
        alert(`Duplicate Enter : ${newName}`);
      }

      if (dub.length === 0) {
        // console.log(dub)

        setitemName((itemArry) => [
          ...itemArry,
          {
            name: newName,
            date: newDate,
          },
        ]);
      }

      // localStorage.setItem("toDOD", JSON.stringify(itemArry))
    } else {
    }
  }

  function deleteList(id) {
    // console.log(id)
    const afterDelete = itemArry.filter((item, i) => i !== id);

    // if(afterDelete===addButtonValue.newName.current.value){
    //   setitemName(afterDelete)

    // }else{
    //   alert("Duplicate List Item")
    // }
    setitemName(afterDelete);
    //  localStorage.setItem("toDOD", JSON.stringify(itemArry))
  }
  return (
    <>
      <main>
        <Heading></Heading>
        <InputValue addButtonValue={addButton}></InputValue>
        <ErrorMAessage itemArry={itemArry}></ErrorMAessage>
        <ItemList itemArry={itemArry} itemId={deleteList}></ItemList>
      </main>
    </>
  );
}

export default App;
