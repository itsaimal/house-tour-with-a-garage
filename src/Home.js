import React, {useState} from 'react'

function Home() {

    const [on,setOn] = useState(false);
    return (
        <div className="w-screen h-screen bg-gray-300 ">
            <img className="img   " src="https://static01.nyt.com/images/2021/01/04/realestate/04WYG-CA-slide-WNXV/04WYG-CA-slide-WNXV-superJumbo.jpg"/>

        <button className="absolute top-40 ml-96 w-40 left-3 h-12 mt-3 hover:bg-yellow-900 hover:opacity-20"></button>

        <button className="absolute text-gray-600 top-40 ml-96 w-40 left-3 h-12 mt-3 hover:bg-yellow-900 hover:opacity-20">garage</button>


        <button className="absolute text-gray-600 top-20 ml-56 w-8 left-40 h-12 mt-3 hover:bg-yellow-900 hover:opacity-20">Door</button>




        </div>
    )
}

export default Home
