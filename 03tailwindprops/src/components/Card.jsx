// snippet: rfce -> react function component
//          rafce -> react arrow function component

/** @ignore the warnings, it's completely alright, */
/* * as it is for learning purpose.
 * We will learn more and more, and will get to know how to solve these
  */

// import React from 'react'

// function Card() {
//   return (
//     <div>
//       <img src="https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg" alt="" />
//       <h1 className='text-2xl bg-green-500 p-3 rounded' > A Card for photos</h1>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, asperiores minus.</p>
//     </div>
//   )
// }

// export default Card



// import React from 'react'

// function Card(props) {
// function Card({username}) {
//   // destructuring the propperties (props) to only get username

function Card({username, role = "not assigned yet...", location, country}){

  return (
    // The card is a template from Tailwind CSS, image is from pexels which is free to use!
    // And yes, some little changes in the code were needed to make it according to React standards
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" 
          src="https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg"
           alt="" width="384" height="512" />
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-medium">
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, debitis placeat.
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">
               
                {username || "AdityaNath"}
                {/* Adding Default value as AdityaNath */}
              </div>
              <div className="text-slate-700 dark:text-slate-500">
                {role}, {location}, {country}
              </div>
            </figcaption>
          </div>
      </figure>
    </div>
  )
}

export default Card
