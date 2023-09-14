import { useState } from "react";

const Team = () => {
    const [team,setTeam]= useState(11)
    const addMember = () => {
        const newMember = team+1
        setTeam(newMember) 
    }
    const removeMember = () => {
        const newMember = team -1
        setTeam(newMember )
    }
    const styleTeam = {
        border: '2px solid red',
        padding:'15px',
        margin:'15px',
        borderRadius:'15px'
    }
    return (
        <div style={styleTeam}>
            <h2>Team Member : {team}</h2>
            <button onClick={addMember} >add Member </button>
            <button onClick={removeMember}> remove Member </button>
        </div>
    );
};

export default Team;