export function Home() {
  return (
    <div
      id="home"
      className="md:bg-[linear-gradient(to_right_bottom,rgba(00,00,00,0.6),rgba(00,00,00,0.6)),url('../public/home.jpg')] 
      md:overflow-hidden bg-cover bg-no-repeat"
    >
      <div className="px-4 py-16 flex flex-col md:flex-row items-center justify-evenly">
        <div className="relative w-full md:max-w-2xl text-left">
          <h1 className="font-bold text-gray-100 text-xl sm:text-2xl md:text-4xl leading-tight mb-6">
            Cáfe com Estilo
          </h1>
          <h1 className="font-bold text-gray-100 text-xl sm:text-2xl md:text-3xl leading-tight mb-6">
            Receitas de café para impressionar seus convidados
          </h1>
          <p className="text-gray-100 text-xl sm:text-2xl leading-tight mb-6">
            Este ebook é uma coleção de receitas deliciosas e criativas que
            utilizam café como ingrediente principal. Ele inclui desde café da
            manhã simples até sobremesas requintadas, tudo com uma pitada de
            café. Aprenda a fazer café expresso perfeito, café gelado,
            cappuccino, lattes, e muitas outras bebidas. Com este ebook, você
            pode experimentar novos sabores e impressionar seus amigos e
            familiares com suas habilidades culinárias.
          </p>
        </div>
        <div className="">
          <img src="capalivro.png" className="w-[90%]" />
        </div>
      </div>
    </div>
  );
}
