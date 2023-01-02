

import { useNavigate } from 'react-router-dom'


const Protected = ({ isLoggedIn, children }) => {
    const navigate = useNavigate()
    if (isLoggedIn) {
        return children
    }
    else {


        navigate("/")

    }

}

export default Protected
