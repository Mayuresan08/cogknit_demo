import './App.css';
import styled from 'styled-components';
import { useState,useEffect } from 'react';


const OuterContainer=styled.div`
margin: 2rem 2rem;
height: 90vh;
border: 1px solid black;
display: flex;
`
const InnerLargerContainer=styled.div`
width: 80%;
border-right: 1px solid black;
padding: 2rem;
height: 100%;
`
const InnerSmallContainer=styled.div`
width: 20%;
display: flex;
flex-direction: column;
`
const TopContainer=styled.div`
height: 50%;
width: 100;
border-bottom: 1px solid black;
padding: 1rem;
`
const BottomContainer=styled.div`
height: 50%;
width: 100;
border-bottom: 1px solid black;
padding: 1rem;
`
const InputContainer=styled.div`
margin-top: 2rem;
`
const ButtonContainer=styled.div`
`
const BlockContainer=styled.div`
display: grid;
grid-template-columns: ${props=> `repeat(${props.column},1fr)`};
grid-gap: 1rem;
`

const Block=styled.div`
height: 2rem;
width: 2rem;
background-color: blue;
justify-content: center;
align-items: center;
padding: 5px;
margin: 2rem;
`

function App() {

  let [ row,setRow]=useState(0)
  let [column,setColumn]=useState(0)
  let [ rowg,setRowg]=useState(0)
  let [columng,setColumng]=useState(0)
  let [array,setArray]=useState([])
  let [block,setBlock]=useState(0)
useEffect(()=>{
  
},[row,column])

const handleRow=({target:{value}})=>{
  setRow(value)
}

const handleColumn=({target:{value}})=>{
  setColumn(value)
}

const handleClear=()=>{
 setRow(0)
 setColumn(0)
 setBlock(0)
 setArray([])
}

const handleGenerate=()=>{

console.log(row,column)

setRowg(row)
setColumng(column)
let blockArray=[]
for(let i=1;i<=(row*column);i++)
{
blockArray.push(i)
}
setArray([...blockArray])
console.log(blockArray,array)
}

const handleBlock=(item)=>{

  console.log(item)
  setBlock(item)

}

  return (
    <div className="App">
     <OuterContainer>
        <InnerLargerContainer>
          <h5>Block Display</h5>
          {
              ( rowg >0 && columng >0)?
          
          <BlockContainer column={columng}>
            {
              array.map((item)=>{
                return (
                  <Block onClick={(()=>{handleBlock(item)})}>{item}</Block>
                )
              })
            }
          </BlockContainer>:
          <>
          Nothing to show,input value in row column and click <p>Generate</p>
          </>
          }
        </InnerLargerContainer>
        <InnerSmallContainer>
            <TopContainer>
                  <InputContainer>
                  <div style={{margin:"1rem"}}>
                <h5>Block Config</h5>
                <label>Row :</label>
                <input type="number" style={{width:"2rem",marginLeft:"4rem"}} value={row} onChange={(event)=>handleRow(event)} />
                </div>
                <div style={{margin:"1rem"}}>
                <label>Column :</label>
                <input type="number" style={{width:"2rem",marginLeft:"2.5rem"}} value={column} onChange={(event)=>handleColumn(event)} />
                </div>
                </InputContainer>
                <ButtonContainer>
                  <button className="btn btn-secondary mx-3" onClick={handleGenerate}>Generate</button>
                  <button className="btn btn-secondary" onClick={handleClear}>Clear</button>
                </ButtonContainer>
            </TopContainer>
            <BottomContainer>
            <h5>Selected Block</h5>
            {
              (block >0) 
              ?
              (
                <>
                Selected Block:{block}
                </>
              )
              :<>
               No Selected Block
              </>
            }
            </BottomContainer>
        </InnerSmallContainer>
     </OuterContainer>
    </div>
  );
}

export default App;
