import './App.css'
import Count from './Count';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function App() {
  // 1
  function handelClick(){
    alert('button click');
  }
// 2
  const handelClick2 = () =>{
    alert('button click2')
  }
  // 4
  const addToFive = (num) =>{
    alert(num + 5 );
  }
  return (
    <>  
      <h3>Vite + React</h3>

      <Friends></Friends>
      <Users></Users>
      <Team></Team>

      <Count></Count>
      {/* 1 */}
      <button onClick={handelClick}>Click me</button>
      {/* 2 */}
      <button onClick={handelClick2}>Click 2</button>
      {/* 3 */}
      <button onClick={()=>{alert('third click ')}}>third</button>
      {/* 4 */}
      <button onClick={()=>addToFive (3)}>four</button>

    </>
  )
}

export default App
