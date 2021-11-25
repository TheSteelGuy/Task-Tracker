import Button from "./Button"

const Header = ()=>{
    const onClick = ()=>{
        console.log("Clicked")
    }
    return(
        <div className='header'>
            <h2>Tracker UI</h2>
            <Button text='Add' onClick={onClick} color = 'white' />
            
        </div>
   
    )
}
//inline style in jsx
// const headingStyle = {
//     color: 'red',
//     backgroundColor:'black'
// }  
export default Header