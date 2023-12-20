import { useNavigate } from "react-router-dom";


function Navbar() {
    const navigate = useNavigate()
    return (
        <div>
            <ul style={{backgroundColor:"black", color:"white", display:'flex', gap:"30px", justifyContent:"space-between", alignItems:"center"}}>
                <li onClick={()=>navigate('/')}>Home</li>
                <li onClick={()=>navigate('/user')}>User</li>
                <li onClick={()=>navigate('/contact')}>Contact us</li>
                <li onClick={()=>navigate('/about')}>About us</li>
            </ul>
        </div>
    );
}

export default Navbar;