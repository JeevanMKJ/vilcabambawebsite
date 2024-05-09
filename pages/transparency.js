import Link from 'next/link';

const transparent = [
 { file: 'Lotaip 2024', link: '/transparency/lotaip-2024'},
 { file: 'Lotaip 2023', link: '/transparency/lotaip-2023'},
 { file: 'Lotaip 2022', link: '/transparency/lotaip-2022'},
 { file: 'Lotaip 2021', link: '/transparency/lotaip-2021'},
 { file: 'Lotaip 2020', link: '/transparency/lotaip-2020'},
 { file: 'Lotaip 2019', link: '/transparency/lotaip-2019'},
 { file: 'Lotaip 2018', link: '/transparency/lotaip-2018'},
 { file: 'Lotaip 2017', link: '/transparency/lotaip-2017'},
]

export default function transparency() {
  return (
     <div className="px-4 mt-10 mb-10 sm:px-6 lg:px-8">
       <div className="py-5">
         <h3 className="text-2xl font-bold leading-7 text-gray-900">Transparency</h3>
         <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut consectetur felis. Phasellus mollis magna vitae purus ullamcorper tempus.</p>
       </div>
       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 gap-x-10 gap-y-10">
         {transparent.map((transparent) => (
           <div
            key={transparent.file}
            //  className="relative flex items-center space-x-3 rounded-lg border border-gray-600 bg-gray-200 px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400 hover:scale-105 transform transition-transform duration-200 hover:bg-lime-200 hover:bg-opacity-40"
            className="relative flex items-center space-x-3 rounded-lg border border-gray-600 bg-gray-200 px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400 hover:scale-105 transform transition-transform duration-200 hover:bg-lime-500 hover:bg-opacity-60"
           >
             <div className="min-w-0 flex-1">
               <Link href={transparent.link} className="focus:outline-none">
                 <span className="absolute inset-0" aria-hidden="true" />
                 <p className="text-xl font-thin text-gray-600 text-center">{transparent.file}</p>
               </Link>
             </div>
           </div>
         ))}
       </div>
     </div>
  )
 }
 

 


