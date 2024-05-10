// const people = [
//   {
//     name: 'Víctor David Carpio Coronel',
//     role: 'President of Vilcabamba',
//     imageUrl:
//       '/Victor_David_Carpio.PNG',
//     bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
//     xUrl: '#',
//     linkedinUrl: '#',
//   },
// ]

// export default function About() {
//   return (
//     <div className="bg-white py-24 md:py-32">
//       <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5">
//         <div className="max-w-2xl xl:col-span-2">
//           <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Gobierno Parroquial</h2>
//           <p className="mt-6 text-2xl leading-8 text-gray-600">
//           &quot;Trabajo y compromiso con Vilcabamba&quot;
//           </p>
//         </div>
//         <ul role="list" className="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3">
//           {people.map((person) => (
//             <li key={person.name} className="flex flex-col gap-10 pt-12 sm:flex-row">
//               <img className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src={person.imageUrl} alt="" />
//               <div className="max-w-xl flex-auto">
//                 <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
//                 <p className="text-base leading-7 text-gray-600">{person.role}</p>
//                 <p className="mt-6 text-base leading-7 text-gray-600">{person.bio}</p>
//                 <ul role="list" className="mt-6 flex gap-x-6">
//                   <li>
//                     <a href={person.xUrl} className="text-gray-400 hover:text-gray-500">
//                       <span className="sr-only">X</span>
//                       <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
//                         <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
//                       </svg>
//                     </a>
//                   </li>
//                   <li>
//                     <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
//                       <span className="sr-only">LinkedIn</span>
//                       <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
//                         <path
//                           fillRule="evenodd"
//                           d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   )
// }

const people = [
  {
    name: 'Víctor David Carpio Coronel',
    role: 'President of Vilcabamba',
    imageUrl:
      '/Victor_David_Carpio.PNG',
    bio: '',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Luis Fernando Marchena Sanchez',
    role: 'Vocal',
    imageUrl:
      '',
    bio: ']',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Kleber Antonio Ortega Abarca',
    role: 'Vocal',
    imageUrl:
      '',
    bio: '',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Elsa Maria OrtegaVillavicencio',
    role: 'Vicepresidenta',
    imageUrl:
      '',
    bio: '',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Carlos Nicholas Ortiz Armijos',
    role: 'Vocal',
    imageUrl:
      '',
    bio: '',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Patricio Leonardo Macas Abarca',
    role: 'Technico de Infreaestructura',
    imageUrl:
      '',
    bio: '',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Wendy Juleicy Piedra Guaycha',
    role: 'Secretaria Tesorera',
    imageUrl:
      '',
    bio: '',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Maria Antonia Bejarano Ortega',
    role: 'Coordinadora General',
    imageUrl:
      '',
    bio: '',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Andrea Stefanny Sanchez Granda',
    role: 'Psicología Clínica',
    imageUrl:
      '',
    bio: '',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Angelica Maria Valencia Montano',
    role: 'Terapista Ocupacional',
    imageUrl:
      '',
    bio: '',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Jorge Ivan Lima Cabera',
    role: 'Trabajador Social',
    imageUrl:
      '',
    bio: '',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Alexandra Elizabeth Rojas Carpio',
    role: 'Cuidadora Tallerista',
    imageUrl:
      '',
    bio: '',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Gilson Jorge Iniguez Gil',
    role: 'Servicios Generales',
    imageUrl:
      '',
    bio: '',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'John Francisco Macanchi Pesantes',
    role: 'Servicios de Limpieza',
    imageUrl:
      '',
    bio: '',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Maria Fernanda Armijos Zaruma',
    role: 'Promotor de cuidado diario',
    imageUrl:
      '',
    bio: '',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Karla Maribel Leon Picoita',
    role: 'Promotor de cuidado diario',
    imageUrl:
      '',
    bio: '',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Ermita del Carmen Ochoa Abad',
    role: 'Promotor de cuidado diario',
    imageUrl:
      '',
    bio: '',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Ayda Mariela Ochoa Jimenez',
    role: 'Promotor de cuidado diario',
    imageUrl:
      '',
    bio: '',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Claudia Consuelo Castillo Tacuri',
    role: 'Terapista Fisica',
    imageUrl:
      '',
    bio: '',
    xUrl: '#',
    linkedinUrl: '#',
  },

  {
    name: 'Ibeth Silvana Guerrero Jumbo',
    role: 'Promotor Social',
    imageUrl:
      '',
    bio: '',
    xUrl: '#',
    linkedinUrl: '#',
  },
]

export default function About() {
  return (
    <div className="bg-white py-24 md:py-32">
      {/* Header section */}
      <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"> Gobierno Parroquial </h2>
            <p className="mt-6 text-2xl leading-8 text-gray-700">
              &quot;Trabajo y compromiso con Vilcabamba&quot;
            </p>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto mt-20 mb-20 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-600 lg:max-w-none lg:grid-cols-2">
              <div>
                <p>
                 El Gobierno Autónomo Descentralizado de la Parroquia Vilcabamba es una institución dedicada al servicio de su comunidad. Estamos comprometidos a ser una entidad transparente, eficiente y centrada en el bienestar de todos nuestros habitantes.
                </p>
                <p className="mt-8">
                  Como autoridad local, buscamos impulsar proyectos y políticas que promuevan el desarrollo integral de la parroquia, preservando su belleza natural, turística y cultural. Nos destacamos por fomentar la participación ciudadana, el diálogo abierto y la cooperación comunitaria para abordar los desafíos locales.
                </p>
              </div>
              <div>
                <p>
                Con un enfoque en la sostenibilidad y la equidad, trabajamos incansablemente para mejorar la calidad de vida en Vilcabamba y garantizar un futuro próspero para las generaciones venideras. Estamos comprometidos con nuestros valores de respeto, compromiso, responsabilidad y trabajo colaborativo para construir juntos una parroquia mejor.
                </p>
              </div>
            </div>
          </div>
        </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5">
        {/* <div className="max-w-2xl xl:col-span-2">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Gobierno Parroquial</h2>
          <p className="mt-6 text-2xl leading-8 text-gray-600">
            El Gobierno Autónomo Descentralizado de la Parroquia Vilcabamba es una institución dedicada al servicio de su comunidad. Estamos comprometidos a ser una entidad transparente, eficiente y centrada en el bienestar de todos nuestros habitantes.
          </p>
          <p className="mt-6 text-2xl leading-8 text-gray-600">
            Como autoridad local, buscamos impulsar proyectos y políticas que promuevan el desarrollo integral de la parroquia, preservando su belleza natural, turística y cultural. Nos destacamos por fomentar la participación ciudadana, el diálogo abierto y la cooperación comunitaria para abordar los desafíos locales.
          </p>
          <p className="mt-6 text-2xl leading-8 text-gray-600">
            Con un enfoque en la sostenibilidad y la equidad, trabajamos incansablemente para mejorar la calidad de vida en Vilcabamba y garantizar un futuro próspero para las generaciones venideras. Estamos comprometidos con nuestros valores de respeto, compromiso, responsabilidad y trabajo colaborativo para construir juntos una parroquia mejor.
          </p>
        </div> */}
        <ul role="list" className="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3">
          {people.map((person) => (
            <li key={person.name} className="flex flex-col gap-10 pt-12 sm:flex-row">
              <img className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src={person.imageUrl} alt="" />
              <div className="max-w-xl flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-base leading-7 text-gray-600">{person.role}</p>
                {/* <p className="mt-6 text-base leading-7 text-gray-600">{person.bio}</p> */}
                {/* <ul role="list" className="mt-6 flex gap-x-6">
                  <li>
                    <a href={person.xUrl} className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">X</span>
                      <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul> */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
