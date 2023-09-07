import React, { useEffect, useState } from 'react'

function UseeffectApiCall() {

    const [users,setUsers]=useState()
 const  getUsers =async()=>{
   const response= await fetch("https://api.github.com/user")
setUsers(await response.json())
   
   }



  useEffect(()=>{
    getUsers();
  }    ,[])



  return (
    <>
    <h2>Fetch GIT users</h2>
    <div className='container-fluid mt-5'>
        <div className='row text-center'>  
        {
            users.map((curElements)=>{
                return(
                    <div className='col-10 col-md-4 mt-5'>
            <div className='card p-2'>
                <div className='d-flex align-item-center'>
           <div><img src="" alt=''/></div>    
         <div className='ml-3 w-100'>
          <h4 className="mb-0 mt-0 text-left">
            Anil Upadhyay<span className="text-left">{curElements.login}</span>
            console.log(curElements)
            
          </h4>
          <div className='d-flex flex-column'>Articles</div>
          <div className='d-flex flex-column'>Followers</div>
           <div className='d-flex flex-column'>Rating</div>
            </div>       
                </div>

            </div>

        </div>
                )
            })
        }

        </div>

    </div>

    </>
  )
}

export default UseeffectApiCall
