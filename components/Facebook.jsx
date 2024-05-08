// export default function Facebook() {
//   return (
//     <div className="bg-white">
//       <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
//         <div className="mx-auto max-w-2xl text-center">
//           <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//             Visit our Facebook page
//           </h2>
//           <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
//             Stay up to date with the latest news
//           </p>
//           <div className="mt-10 flex items-center justify-center gap-x-6">
//             <a
//               href="https://www.facebook.com/gad.vilcabamba?locale=es_LA"
//               target="_blank"
//               className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             >
//               Visit 
//               <span aria-hidden="true">→</span>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

import Link from 'next/link'
import Image from 'next/image'

export default function Facebook() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-sky-700 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#fce303" />
                <stop offset={1} stopColor="#fce303" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Visita nuestra página de Facebook
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Manténgase al día con las últimas noticias
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="https://www.facebook.com/gad.vilcabamba?locale=es_LA"
                target="_blank"
                className="mb-5 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Siguenos <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <Link className="relative mt-16 h-80 lg:mt-8" href="https://www.facebook.com/gad.vilcabamba?locale=es_LA" target='_blank'>
            <span>
              <Image
                // className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10 transform transition-transform duration-200 hover:scale-105"
                src="/Facebook_Image.PNG"
                alt="Facebook page image"
                width={1824}
                height={1080}
              />
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

