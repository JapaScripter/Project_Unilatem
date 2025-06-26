"use client";
import { useRef } from "react";
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import "@i18n/client";

export default function Home() {
	const { t, i18n } = useTranslation();

	const carouselRef = useRef<HTMLDivElement>(null);

	const scrollLeft = () => {
		if (carouselRef.current) {
			carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
		}
	};

	const scrollRight = () => {
		if (carouselRef.current) {
			carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
		}
	};
	return (
		<main className="h-full bg-[#F0F0F0]">
			<section className="flex h-150 w-full lg:h-160">
				<div className="flex flex-col w-1/2 h-full px-4 lg:px-10 justify-evenly items-start bg-[#F0F0F0]">
					<h1 className="mb-4 font-high text-justify text-2xl lg:text-4xl text-[#0D0D0D]">
						{t('Sites, landing pages, apps e softwares feitos para você')}
					</h1>
					<h2 className="mb-6 font-high text-justify text-1xl lg:text-2xl text-[#0D0D0D]">
						{t('Peça o seu agora e receba uma proposta personalizada')}
					</h2>
					<a className="px-8 py-4 font-apple font-bold text-base lg:text-lg text-[#F0F0F0] bg-[#6705AD] rounded-full shadow-lg hover:bg-[#8906e6] active:outline-2 active:outline-[#6705AD]" href="https://api.whatsapp.com/send?phone=5511949147702&text=Olá!%20Gostaria%20de%20orçar%20o%20meu%20site?" target="_blank">
						{t('Solicitar Agora')}
					</a>
				</div>
				<div className="relative w-1/2 h-full bg-cover bg-right" style={{ backgroundImage: "url('/img/vr.jpg')", backgroundPosition: "65% center", backgroundSize: "cover", }}>
					<div className="absolute bg-gradient-to-r from-[#F0F0F0]/100 to-transparent pointer-events-none inset-0" />
				</div>
			</section>
			<section className="flex flex-col h-75 justify-evenly items-center bg-[#6705AD]">
				<h2 className="font-high font-bold text-1xl lg:text-2xl text-[#F0F0F0] tracking-wide">
					{t('Clientes')}
				</h2>
				<div className="relative w-full h-[15vw] overflow-hidden slider">
					<div className="relative flex h-[15vw] justify-center items-center animate-[scroll_15s_linear_infinite] whitespace-nowrap" style={{ width: "calc(25vw * 12)" }}>
						{[...Array(2)].flatMap((_, repeatIndex) =>
							[
								"eklesia",
								"salusvita",
								"maite",
								"apav",
								"amtruck",
								"porele",
							].map((client, index) => (
								<div key={`${repeatIndex}-${client}`} className="flex px-[8vw] py-[1vw]">
									<img className="w-[20vw] h-auto" src={`/img/${client}.webp`} alt={client} />
								</div>
							))
						)}
					</div>
				</div>
			</section>
			<section className="relative flex flex-col w-full h-180 py-10 lg:h-165 lg:pt-10 justify-evenly bg-[#F0F0F0] overflow-hidden">
				<h2 className="font-high font-bold text-center text-1xl lg:text-2xl text-[#0D0D0D]">
					{t('Conheça Nossos Cases')}
				</h2>
				<button onClick={scrollLeft} className="absolute flex size-8 left-2 top-1/2 justify-center items-center bg-[#6705AD] hover:bg-[#8906e6] active:outline-2 active:outline-offset-2 active:outline-[#8906E6] active:bg-[#8906E6] rounded-full shadow-md z-10">
					<img src="/img/botoes/arrow_b.svg" alt="Seta para a esquerda" className="size-5 rotate-[180deg]" />
				</button>
				<button onClick={scrollRight} className="absolute flex size-8 right-2 top-1/2 justify-center items-center bg-[#6705AD] hover:bg-[#8906e6] active:outline-2 active:outline-offset-2 active:outline-[#8906E6] active:bg-[#8906E6] rounded-full shadow-md z-10">
					<img src="/img/botoes/arrow_b.svg" alt="Seta para a direita" className="size-5" />
				</button>
				<div ref={carouselRef} className="flex h-[150vh] px-15 gap-2 justify-start items-center overflow-hidden scroll-smooth">
					{[
						{
							img: "/img/salusvita.webp",
							alt: "salusvita",
							link: "https://www.salusvita.com.br/",
							text: t('Site desenvolvido para promover a presença digital da Salusvita, empresa especializada em segurança do trabalho.A proposta foi criar uma plataforma funcional e confiável, que transmitisse autoridade no segmento e facilitasse a apresentação dos serviços oferecidos, além de incentivar o contato direto com clientes em potencial.'),
							label: t('Conheça o Projeto'),
						},
						{
							img: "/img/maite.webp",
							alt: "maite",
							link: "https://maitesquadrias.com.br/",
							text: t('Plataforma criada com o objetivo de conectar a Maite Esquadrias a seu público- alvo de forma prática e eficiente.O site permite que os usuários conheçam os produtos e solicitem orçamentos personalizados de esquadrias de alumínio sob medida.A experiência do usuário foi priorizada, com navegação intuitiva e design limpo.'),
							label: t('Conheça o Projeto'),
						},
						{
							img: "/img/apav.webp",
							alt: "apav",
							link: "https://apav.netlify.app/",
							text: t('Desenvolvido para dar visibilidade ao projeto missionário cristão da APAV, o site apresenta a atuação da associação na evangelização no Brasil e em países da América Latina.A estrutura foi pensada para inspirar, mobilizar novos membros e apoiadores, além de divulgar eventos, testemunhos e conteúdos edificantes.'),
							label: t('Conheça o Projeto'),
						},
						{
							img: "/img/porele.webp",
							alt: "porele",
							link: "https://porele.netlify.app/",
							text: t('Site institucional criado para uma igreja cristã com o propósito de fortalecer sua identidade online e ampliar os canais de comunicação com os fiéis.Além de transmitir confiança e compromisso com a fé, a plataforma oferece meios acessíveis para contribuições, informações sobre cultos e projetos sociais.'),
							label: t('Conheça o Projeto'),
						},
						{
							img: "/img/eklesia.webp",
							alt: "eklesia",
							link: "https://eklesiakerigma.com/",
							text: t('Desenvolvido para apoiar o ministério de um pastor brasileiro atuante no Paraguai, o site da Eklesia Kerigma tem como missão divulgar as atividades da igreja local, atrair doações e apoio missionário, além de manter a comunidade informada sobre eventos e ações evangelísticas na região.'),
							label: t('Conheça o Projeto'),
						},
						{
							img: "/img/amtruck.webp",
							alt: "amtruck",
							link: "https://amtruck.com.br/",
							text: t('Projeto de renovação do site da AMTRUCK, empresa especializada em serviços de guincho e assistência veicular.A nova versão apresenta uma identidade visual moderna e dinâmica, com foco na usabilidade e na clareza das informações, proporcionando uma experiência mais eficiente para quem busca atendimento rápido e confiável.'),
							label: t('Conheça o Projeto'),
							customImg: true,
						},
					].map((card, i) => (
						<div key={i} className="flex flex-shrink-0 flex-col w-[70vw] h-[100vw] lg:w-[400px] lg:h-[25vw] p-2 justify-center items-center border-solid border-5 border-[#6705AD] rounded-4xl">
							<div className="flex flex-col w-full h-full justify-evenly items-center">
								<div className="flex flex-col w-full h-full justify-evenly items-center text-[#0D0D0D] bg-[#F0F0F0] rounded-4xl">
									<img className={card.customImg ? "w-40 h-20 bg-[#F0F0F0] rounded-lg" : "w-20 h-20 bg-[#F0F0F0] rounded-lg"} src={card.img} alt={card.alt} />
									<p className="px-5 text-base text-justify">{card.text}</p>
								</div>
							</div>
							<a className="relative top-15 px-5 py-3 font-apple font-extrabold text-base text-[#F0F0F0] bg-[#6705AD] rounded-b-full hover:text-[#F0F0F0] hover:bg-[#8906E6]" href={card.link} target="_blank">
								{card.label}
							</a>
						</div>
					))}
				</div>
			</section>
			<section className="flex w-full h-100 lg:h-165 items-center bg-[#6705AD]">
				<div className="flex flex-col w-1/2 h-full pl-10 justify-evenly items-start">
					<h2 className="mb-4 font-high font-bold text-1xl lg:text-2xl text-[#F0F0F0]">
						{t('Contato')}
					</h2>
					<a className="flex justify-center items-center px-2 py-4 font-apple font-extrabold text-base lg:text-lg text-center text-[#6705AD] bg-[#F0F0F0] rounded-full shadow-md hover:bg-[#8906E6] border-solid active:border-1 active:border-[#F0F0F0] hover:text-[#F0F0F0] transition-colors duration-300" href="https://api.whatsapp.com/send?phone=5511949147702&text=Olá!%20Gostaria%20de%20orçar%20o%20meu%20site?" target="_blank">
						{t('Solicitar Orçamento')}
					</a>
					<p className="mb-6 font-apple text-base lg:text-lg text-[#F0F0F0]">
						{t('Tire duvidas, solicite orcamento e saiba mais sobre nossos servicos')}
					</p>
					<p className="mb-6 font-high text-base lg:text-lg text-[#F0F0F0]">
						{t('Segue nas redes sociais')}
					</p>
					<div className="grid grid-cols-3 w-full gap-4">
						<a href="">
							<img className="w-15 lg:w-15 p-1 hover:bg-[#8906E6] rounded-full border-solid active:border-1 active:border-[#F0F0F0]" src="/img/botoes/instagram_b.svg" />
						</a>
						<a href="">
							<img className="w-15 lg:w-15 p-1 hover:bg-[#8906E6] rounded-full border-solid active:border-1 active:border-[#F0F0F0]" src="/img/botoes/linkedin_b.svg" />
						</a>
						<a href="">
							<img className="w-15 lg:w-15 p-1 hover:bg-[#8906E6] rounded-full border-solid active:border-1 active:border-[#F0F0F0]" src="/img/botoes/whats_b.svg" />
						</a>
					</div>
				</div>
				<div className="flex w-1/2 h-full justify-center items-center">
					<img className="w-3/4 rounded-full shadow-lg" src="img/me.webp" />
				</div>
			</section>
		</main>
	);
}