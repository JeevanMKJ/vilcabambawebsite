export default function TheInstitution() {
  return (
    <div className="relative bg-yellow-300 bg-opacity-100 mt-10 mb-10">
      <div className="relative h-full overflow-hidden md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        <img
          className="h-full w-full object-contain"
          src="/The_Institution.JPG"
          alt="The Institution"
        />
      </div>
      <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Organigrama</p>
          <p className="mt-6 text-base leading-7 text-gray-600">
            "Trabajo y compromiso con Vilcabamba"
          </p>
        </div>
      </div>
    </div>
  )
}
