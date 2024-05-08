// import Image from 'next/image';

// export default function LogoCloud() {
//  return (
//     <div className="bg-white py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <h2 className="text-center text-3xl font-semibold leading-8 text-gray-900">
//           Vilcabamba is a Magic Corner of Ecuador
//         </h2>
//         <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
//           <Image
//             className="max-h-32 w-full object-contain lg:col-span-1" // Adjusted max-height for larger display
//             src="/logo.PNG"
//             alt="Vilcabamba"
//             width={700} // Significantly larger width
//             height={192} // Significantly larger height
//           />
//           <Image
//             className="max-h-32 w-full object-contain lg:col-span-1" // Adjusted max-height for larger display
//             src="/MCE_b.PNG"
//             alt="Magic Corner"
//             width={700} // Significantly larger width
//             height={192} // Significantly larger height
//           />
//         </div>
//       </div>
//     </div>
//  )
// }

import Image from 'next/image'

export default function LogoCloud() {
  return (
    // <div className="bg-blue-400 bg-opacity-80 py-24 sm:py-32 mt-1">
    <div className="bg-lime-600 bg-opacity-60 py-24 sm:py-32 mt-1">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Vilcabamba es un Rincón Mágico del Ecuador</h2>
            {/* <p className="mt-6 text-lg leading-8 text-gray-600"> */}
            <p className="mt-6 text-lg leading-8 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a
              scelerisque amet ullamcorper eu enim et fermentum, augue.
            </p>
          </div>
          <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
            <img
              className="max-h-32 w-full object-contain object-left"
              src="/Vilca_logo_w.PNG"
              alt="Vilcabamba"
              width={104}
              height={48}
            />
            <img
              className="max-h-32 w-full object-contain object-left"
              src="/MCE_w.PNG"
              alt="Magic Corner"
              width={104}
              height={48}
            />
          </div>
        </div>
      </div>
    </div>
  )
}



 