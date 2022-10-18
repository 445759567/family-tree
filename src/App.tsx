import React from 'react';
import {Layer} from "./components/Layer";
import {useEffect, useState} from "react";
import {Typography} from "@mui/material";
import {familyTree} from "./demoData";
import './App.css';


type originalArrayProp = {
  id: number,
  name: string,
  children: Array<number>,
  gender: string,
  parents: Array<number>
}[]
type familyTreeProp = {
  parents: originalArrayProp,
  children: familyTreeProp
}[]
type Person = {
  id: number,
  name: string,
  children: Array<number>,
  gender: string,
  parents: Array<number>
}
function App() {
  const [tree, setTree] = useState<familyTreeProp>([])
  useEffect(()=>{
    makeTree(familyTree)
  },[])
  const makeTree = (data: originalArrayProp) =>{
    let tempTree: familyTreeProp = []
    const addPersonToTree = (currentNode:familyTreeProp, person:Person) =>{
      if(currentNode.length < 1) {//initial state
        currentNode.push({parents: [person], children:[]})
        return
      }
      for(let i = 0; i<currentNode.length; i++){
        if(currentNode[i].parents.length < 2){ //only found either father or mother
          if(person.children.length > 0 && person.children.sort().join(',') === currentNode[i].parents[0].children.sort().join(',')){   //found couple
            currentNode[i].parents.push(person)
            return
          }
        }
        //skip if this person does not have children
        if(!currentNode[i].parents[0].children || currentNode[i].parents[0].children.length<1){
          continue
        }
        if(currentNode[i].parents[0].children.includes(person.id)){ //found child
          currentNode[i].children.push({parents:[person], children:[]})
          return
        }
        addPersonToTree(currentNode[i].children, person)
      }
    }
    for(let i=0; i<data.length; i++){
      addPersonToTree(tempTree, data[i])
    }
    setTree(tempTree)
  }
  return (
      <div className="App">
        <Typography variant="h4" component="h4" className={"title"}>
          Family Tree
        </Typography>
        {
          tree.map((item, index)=>{
            return(
                <Layer item={item} key={index}/>
            )
          })
        }
      </div>
  );
}

export default App;
