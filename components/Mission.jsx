// import { CheckCircleIcon } from '@heroicons/react/20/solid'

// const benefits = [
//   'Grow Turism',
//   'Safty',
//   'New Hospital',
//   'New Jobs',
//   'New School',
// ]

// export default function Vision() {
//   return (
//     <div className="bg-lime-700 bg-opacity-10 py-24 sm:py-32">
//       <div className="relative isolate">
//         <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
//           <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/50 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
//             <img
//               className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
//               src="/Image_Carousel_Vilca.JPG"
//               alt=""
//             />
//             <div className="w-full flex-auto">
//               <h2 className="text-3xl font-bold tracking-tight text-gray-600 sm:text-4xl">Vision</h2>
//               <p className="mt-6 text-lg leading-8 text-gray-600">
//                 Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
//                 accusamus quisquam.
//               </p>
//               <ul
//                 role="list"
//                 className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-gray-600 sm:grid-cols-2"
//               >
//                 {benefits.map((benefit) => (
//                   <li key={benefit} className="flex gap-x-3">
//                     <CheckCircleIcon className="h-7 w-5 flex-none" aria-hidden="true" />
//                     {benefit}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div
//           className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
//           aria-hidden="true"
//         >
//           <div
//             className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#5aad6b] to-[#cde546] opacity-25"
//             style={{
//               clipPath:
//                 'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

import Image from 'next/image'

export default function Vision() {
  return (
    <div className="relative bg-yellow-300 bg-opacity-100">
      <div className="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        <img
          className="h-full w-full object-cover"
          src="/Image_Carousel_Vilca.JPG"
          alt=""
        />
        <svg
          viewBox="0 0 926 676"
          aria-hidden="true"
          className="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"
        >
          <path
            fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
            fillOpacity=".4"
            d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
          />
          <defs>
            <linearGradient
              id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
              x1="926.392"
              x2="-109.635"
              y1=".176"
              y2="321.024"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#776FFF" />
              <stop offset={1} stopColor="#FF4694" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-20">
        <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
          {/* <h2 className="text-base font-semibold leading-7 text-gray-600">Award winning support</h2> */}
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Mission</p>
          {/* <p className="mt-6 text-base leading-7 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at lorem vitae ex aliquet lobortis eget sit amet risus. Duis ultricies cursus varius.
          Quisque in justo auctor, consectetur metus eu, dictum tellus. Ut ex sem, mattis id ultricies eu, aliquam vel odio. Morbi maximus vulputate lorem nec molestie. Etiam fermentum odio id consequat tempor. 
          Maecenas dapibus lacus maximus, efficitur felis in, vehicula nisi.
          Curabitur posuere metus eu nisl maximus, ac volutpat justo porta. Praesent et pretium leo, quis molestie arcu. 
          Phasellus vel ligula sem. Praesent et nibh bibendum, consequat magna at, semper risus.
          </p> */}
          <p className="mt-6 text-xl leading-8 text-gray-600">
          El Gobierno Autónomo Descentralizado de la Parroquia Vilcabamba tiene como misión servir a su comunidad con eficiencia y transparencia, promoviendo un desarrollo sostenible e inclusivo. Con nuestro compromiso y dedicación, trabajamos para mejorar la calidad de vida de nuestros habitantes, preservando la riqueza cultural, turística y natural de Vilcabamba, fomentando así, el bienestar de todos.
            </p>
            {/* <p className="mt-6 text-base leading-7 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat. Quasi aperiam sit non sit neque reprehenderit.
            </p> */}
          {/* <div className="mt-10 bg-white/60 ring-white/90 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-5 xl:gap-x-20 xl:px-20">
            <p className="text-base leading-7 text-gray-900">
              "Our duty is to make Vilcabamba a wonder of tourist and economic development"
            </p>
            <p className="max-w-full text-right text-base leading-7 text-gray-900">
              - Víctor David Carpio.
            </p>
          </div>   */}
          {/* <div className="mt-8">
            <a
              href="#"
              className="inline-flex rounded-md bg-gray-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Visit the help center
            </a>
          </div> */}
        </div>
      </div>
    </div>
  )
}

