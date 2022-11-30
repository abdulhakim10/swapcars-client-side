import { useEffect, useState } from "react"


const useTaker = email => {
    const [isTaker, setIsTaker] = useState(false);

    useEffect(() => {
        if(email){
            fetch(`https://swapcars-assignment12-server.vercel.app/users/taker/${email}`)
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