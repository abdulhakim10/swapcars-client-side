import { useEffect, useState } from "react"


const useTaker = email => {
    const [isTaker, setIsTaker] = useState(false);

    useEffect(() => {
        if(email){
            fetch(`http://localhost:5000/users/taker/${email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setIsTaker(data.isTaker);
        })
        }
    },[email])
    return [isTaker];
}

export default useTaker;