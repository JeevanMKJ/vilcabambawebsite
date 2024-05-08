import Link from 'next/link';

const navigation = {
  government: [
    { name: 'La Institución', href: '/theinstitution' },
    { name: 'Rendición de Cuentas', href: '/accountability' },
    { name: 'Transparencia', href: '/transparency' },
    { name: 'PDyOT', href: '/pdyot' },
  ],
  contactUs: [
    { name: 'Sobre Nosotros', href: '/about' },
    { name: 'Contacto', href: '/contact' },
  ],
  News: [
    { name: 'Publicaciones', href: '/posts'},
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/gad.vilcabamba?locale=es_LA',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/watch?v=XIBuGacxTzY',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-800 mt-10" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-12">
            <Link href="/">
              <span>
                <img
                  className="h-12"
                  src="/Vilca_logo_w.PNG"
                  alt="Vilcabamba"
                />
              </span>
            </Link>
            <div className="space-y-1">
            <h3 className="text-sm font-semibold leading-6 text-gray-300">
              Dirección
            </h3>
            <p className="text-sm leading-6 text-gray-400">
              Diego Vaca de Vega 09-09, Vilcabamba 110119
            </p>
            </div>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-white" target="_blank">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-300">Gobierno Parroquial</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.government.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-400 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-300">Contacta con Nosotros</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.contactUs.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-400 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                  <h3 className="text-sm font-semibold leading-6 text-gray-300">Noticias</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.News.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-400 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-300/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">&copy; 2020 GAD Vilcabamba, All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


