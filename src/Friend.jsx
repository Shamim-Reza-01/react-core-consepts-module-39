
const Friend = ({friend}) => {
    console.log(friend)
    const {name, email}= friend
    return (
        <div style={{
            border: '2px solid red',
            padding:'15px',
            margin:'15px',
            borderRadius:'15px'
        }}>
            <h3> Name : {name} </h3>
            <h3> Email : {email}</h3>
        </div>
    );
};

export default Friend;