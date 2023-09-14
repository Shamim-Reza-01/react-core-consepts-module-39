
import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'

function App() {
const handleClick =()=>{
  alert("buttun 1 click")
}
const button2 = (num) => {
 alert(num + 5) 
}
// const addToFive = (num) =>{
//   alert(num + 5);
// }
  return (
    <>
      
      <h1>Vite + React</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>1num</button>
      <button onClick={() =>button2(7)}>2 number</button>

    </>
  )
}

export default App
