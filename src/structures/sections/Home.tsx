export function Home() {
  return (
    <div
      id="home"
      className="md:bg-[linear-gradient(to_right_bottom,rgba(00,00,00,0.6),rgba(00,00,00,0.6)),url('../public/home.jpg')] 
      md:overflow-hidden bg-cover bg-no-repeat
      bg-black"
    >
      <div className="px-4 py-16 flex flex-col-reverse md:flex-row items-center lg:justify-evenly md:gap-10 lg:gap-0">
        <div className="relative w-full md:max-w-2xl text-left">
          <h1 className="font-bold text-gray-100 text-xl sm:text-2xl md:text-4xl leading-tight mb-6 text-center md:text-justify">
            Cáfe com Estilo
          </h1>
          <h1 className="font-bold text-gray-100 text-xl sm:text-2xl md:text-3xl leading-tight mb-6 text-center md:text-justify">
            Receitas de café para impressionar seus convidados
          </h1>
          <p className="text-gray-100 text-xl sm:text-2xl text-justify leading-tight mb-6">
            Este ebook é uma coleção de receitas deliciosas e criativas que
            utilizam café como ingrediente principal. Ele inclui desde café da
            manhã simples até sobremesas requintadas, tudo com uma pitada de
            café. Aprenda a fazer café expresso perfeito, café gelado,
            cappuccino, lattes, e muitas outras bebidas. Com este ebook, você
            pode experimentar novos sabores e impressionar seus amigos e
            familiares com suas habilidades culinárias.
          </p>
          <div className="flex flex-col items-center md:flex-row gap-5 pt-6">
            <a href="https://hotm.art/3W9iD8I">
              <button className="bg-green-700 py-2 px-3 rounded-xl font-semibold text-lg text-white hover:bg-green-500">
                Comprar Ebook
              </button>
            </a>
            <a href="https://app-vlc.hotmart.com/affiliate-recruiting/view/9502C78639053">
              <button className="bg-blue-700 py-2 px-3 rounded-xl text-lg font-semibold text-white hover:bg-blue-500">
                Seja Afiliado do nosso Ebook
              </button>
            </a>
          </div>
        </div>
        <div className="mb-8 md:mb-0">
          <img src="capalivro.png" className="h-full md:w-10/12" />
        </div>
      </div>
    </div>
  );
}
