import { useState } from "react"

export default function Team (){
    const [teams, setTeam] = useState(11)
    
    const handleAdd = () => {
        const newTeam = teams + 1;
        setTeam (newTeam)
    }
    const handleRemove = () =>{
        setTeam ( teams - 1) 
    }

const teamStyle = {
    border: '2px solid purple',
    margin: '15px',
    padding: '15px',
    borderRadius: '15px'
}
  


    return(
       <div style={teamStyle}>
        <h3>Players:{teams}</h3>
        <button onClick={handleAdd}>P-Add</button>
        <button onClick={handleRemove}>P-Remove</button>
       </div>
    )
}