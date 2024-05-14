import { useEffect, useState } from 'react'
import './Friends.css'
import Friend from './Friend'

export default function(){
   const [friends, setFriends] = useState([])
   useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(date => setFriends(date))
   },[])
    return(
        <div className='box'>
            <h3>Friends:{friends.length}</h3>
            {
               friends.map(friend => <Friend prors={friend}></Friend>)
            }
        </div>
    )
}