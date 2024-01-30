// import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';


function Github() {

  // it helps in pre-loading and pre-processing
  const data = useLoaderData();


/* -> It loads the component after we click on the Link, thus slow */
  // const [data, setData] = React.useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/AdityaNath0777')
  //   .then((res) => res.json())
  //   .then( data => {
  //     console.log(data);
  //     setData(data);
  //   })
  // },[])

  return (
    <div
      className='text-center text-white bg-gray-500 m-4 p-3 text-3xl font-semibold'
    >
      Github follower: {data.followers}

      <div className="flex flex-wrap w-full justify-center items-center">

        <div className="flex w-1/2 flex-wrap justify-center items-center">
          <img 
            src={data.avatar_url} 
            alt={ (data.name) ? data.name : data.login} 
            className='rounded-lg'
            width={300}
          />
        </div>
        <div className="flex w-1/2 p-auto  flex-wrap justify-center items-center"
        
           
        >
          <p className="rounded-lg m-3 p-6 flex justify-center items-center bg-gray-700 text-white text-3xl"
            style={{height: "300px"}}
          >
            Public Repositories: {data.public_repos}
          </p>

        </div>
      </div>
    </div>
  )
}

export default Github;

export const githubInfoLoader = async () => {
  const res = await fetch('https://api.github.com/users/AdityaNath0777')
  return res.json()
}
