export function Appbar() {
  return (
    <div className="bg-amber-800 px-4 py-4 sticky">
      <div className="w-full md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between">
        <div>
          <a
            href="#"
            className="inline-block py-2 text-white text-2xl font-bold"
          >
            Café com Estilo
          </a>
        </div>

        <div>
          <div className="hidden md:block">
            <a
              href="#"
              className="inline-block py-1 md:py-4 text-white mr-6 font-bold"
            >
              How it Works
            </a>
            <a
              href="#"
              className="inline-block py-1 md:py-4 text-white hover:text-gray-600 mr-6"
            >
              Solutions
            </a>

            <a
              href="#"
              className="inline-block py-1 md:py-4 text-white hover:text-gray-600 mr-6"
            >
              Pricing
            </a>
            <a
              href="#"
              className="inline-block py-1 md:py-4 text-white hover:text-gray-600 mr-6"
            >
              Desktop
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
