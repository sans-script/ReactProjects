/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'

function UserGreeting(props){

    const StylesWelcome = {
        backgroundColor:"#0f0",
        padding: "20px",
        fontFamily: "Arial, sans-serif"
    }
    const StylesLogin = {
        backgroundColor:"#f00",
        padding: "20px",
        fontFamily: "Arial, sans-serif"
    }
    // if(props.isLoggedIn){
    //     return <h2>Welcome {props.username} </h2>
        
    // }
    // // else{
    // //     return <h2>Please, log in to continue</h2>
    // // } 
    
    // //or just

    // return <h2>Please, log in to continue</h2>

    // or even better
    return (props.isLoggedIn ? <h2 style={StylesWelcome} >Welcome {props.username}</h2> : <h2 style={StylesLogin}>Please, log in to continue</h2>)
}
UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}
export default UserGreeting