"use client";
import { useRef } from "react";
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import "@i18n/client";

export default function Sobre() {
	const { t, i18n } = useTranslation();

	const frases = [
		t('Seja bem-vindo ao meu site e portfólio!'),
		t('Sou desenvolvedor pleno com 3 anos de experiência'),
		t('Meu foco atual são as ferramentas: React Native, JavaScript, Tailwind, Netlify e Dist'),
		t('Meu foco em projetos são sites e apps mobile')
	];

	const [indexFrase, setIndexFrase] = useState(0);
	const [fade, setFade] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			setFade(false);
			setTimeout(() => {
				setIndexFrase((prev) => (prev + 1) % frases.length);
				setFade(true);
			}, 500);
		}, 4000);

		return () => clearInterval(interval);
	}, []);

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

	const skills = [
		{ name: "JavaScript", img: "img/languages/js.svg", percent: parseFloat(((5 / 6) * 100).toFixed(2)) },
		{ name: "HTML", img: "img/languages/html.svg", percent: parseFloat(((5 / 6) * 100).toFixed(2)) },
		{ name: "CSS", img: "img/languages/css.svg", percent: parseFloat(((5 / 6) * 100).toFixed(2)) },
		{ name: "Netlify", img: "img/languages/netlify.svg", percent: parseFloat(((5 / 6) * 100).toFixed(2)) },

		{ name: "Bootstrap", img: "img/languages/bootstrap.svg", percent: parseFloat(((3 / 6) * 100).toFixed(2)) },
		{ name: "Tailwind", img: "img/languages/tailwind.svg", percent: parseFloat(((3 / 6) * 100).toFixed(2)) },
		{ name: "MySql", img: "img/languages/mysql.svg", percent: parseFloat(((5 / 6) * 100).toFixed(2)) },
		{ name: "React", img: "img/languages/react.svg", percent: parseFloat(((3 / 6) * 100).toFixed(2)) },

		{ name: "TypeScript", img: "img/languages/tsx.svg", percent: parseFloat(((3 / 6) * 100).toFixed(2)) },
		{ name: "Next.js", img: "img/languages/nextjs.svg", percent: parseFloat(((3 / 6) * 100).toFixed(2)) },
		{ name: "C#", img: "img/languages/c.svg", percent: parseFloat(((3 / 6) * 100).toFixed(2)) },
		{ name: "Locaweb", img: "img/languages/locaweb.svg", percent: parseFloat(((3 / 6) * 100).toFixed(2)) },

		{ name: "React Native", img: "img/languages/reactnative.svg", percent: parseFloat(((2 / 6) * 100).toFixed(2)) },
		{ name: "Python", img: "img/languages/python.svg", percent: parseFloat(((1 / 6) * 100).toFixed(2)) },
		{ name: "Firebase", img: "img/languages/firebase.svg", percent: parseFloat(((1 / 6) * 100).toFixed(2)) },
		{ name: "AWS", img: "img/languages/aws.svg", percent: parseFloat(((1 / 6) * 100).toFixed(2)) },
	];
	return (
		<main className="h-full bg-[#F0F0F0]">
			<section className="flex w-full h-82 lg:h-160 items-stretch bg-[#F0F0F0]">
				<div className="flex w-1/2 h-full justify-center items-center">
					<img className="w-1/2 shadow-lg rounded-full" src="img/me.jpg" />
				</div>
				<div className="flex flex-col w-1/2 h-full justify-center items-start">
					<h2 className="mb-5 font-high font-bold text-xl lg:text-4xl text-[#6705AD]">
						{t('Oi, eu sou Elias Yuri Yoshi Miyashiro')}
					</h2>
					<p className={`w-3/4 h-1 font-apple text-xs lg:text-xl text-[#6705AD] transition-opacity duration-700 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}>{frases[indexFrase]}</p>
				</div>
			</section>
			<section className="relative flex flex-col w-full h-100 justify-evenly bg-[#6705AD]">
				<h2 className="mb-4 font-bold text-center text-xl text-[#F0F0F0] tracking-widest">{t('Projetos')}</h2>
				<button onClick={scrollLeft} className="absolute flex size-8 top-1/2 left-2 justify-center items-center bg-[#6705AD] hover:bg-[#8906e6] active:outline-2 active:outline-offset-2 active:outline-[#8906e6] active:bg-[#8906e6] rounded-full shadow-md z-10">
					<img src="/img/botoes/arrow_b.svg" alt="Seta para a esquerda" className="size-5 rotate-[180deg]" />
				</button>
				<button onClick={scrollRight} className="absolute flex size-8 top-1/2 right-2 justify-center items-center bg-[#6705AD] hover:bg-[#8906e6] active:outline-2 active:outline-offset-2 active:outline-[#8906e6] active:bg-[#8906e6] rounded-full shadow-md z-10">
					<img src="/img/botoes/arrow_b.svg" alt="Seta para a direita" className="size-5" />
				</button>
				<div ref={carouselRef} className="flex space-x-4 px-15 scroll-smooth overflow-x-auto lg:overflow-hidden">
					{[
						{
							img: "/img/projects/eklesia.png",
							alt: "eklesia",
							linkgit: "https://github.com/JapaScripter/Project_Eklesia_Kerigma",
							linksite: "https://www.eklesiakerigma.com/",
							title: "Eklesia Kerigma",
							labelgit: "Github",
							labelsite: t('Site'),
						},
						{
							img: "/img/projects/salusvita.png",
							alt: "salusvita",
							linkgit: "https://github.com/JapaScripter/Project_Salusvita",
							linksite: "https://www.salusvita.com.br/",
							title: "Salusvita",
							labelgit: "Github",
							labelsite: t('Site'),
						},
						{
							img: "/img/projects/maite.png",
							alt: "maite",
							linkgit: "https://github.com/JapaScripter/Project_maite",
							linksite: "https://maitesquadrias.com.br/",
							title: "Maite Esquadrias",
							labelgit: "Github",
							labelsite: t('Site'),
						},
						{
							img: "/img/projects/amtruck.png",
							alt: "amtruck",
							linkgit: "https://github.com/JapaScripter/Project_AMTruck",
							linksite: "https://amtruck.com.br/",
							title: "Amtruck",
							labelgit: "Github",
							labelsite: t('Site'),
						},
						{
							img: "/img/projects/apav.png",
							alt: "apav",
							linkgit: "https://github.com/JapaScripter/Project_APAV",
							linksite: "https://apav.netlify.app/",
							title: "APAV",
							labelgit: "Github",
							labelsite: t('Site'),
						},
					].map((card, i) => (
						<div key={i} className="flex flex-col min-w-[300px] max-w-[300px] h-75 items-center">
							<div className="flex flex-col w-full h-60 justify-evenly items-center">
								<img className={card.img ? "w-auto h-auto" : "w-auto h-auto"} src={card.img} alt={card.alt} />
								<h2 className="font-bold text-justify text-xl text-[#F0F0F0] tracking-widest "> {card.title}</h2>
							</div>
							<div className="flex w-full justify-evenly items-center">
								<a className="flex w-6/16 px-4 py-1 justify-center items-center font-apple font-bold text-base bg-[#F0F0F0] text-[#6705AD] rounded-full" href={card.linkgit} target="_blank">
									{card.labelgit}
								</a>
								<a className="flex w-6/16 px-4 py-1 justify-center items-center font-apple font-bold text-base bg-[#F0F0F0] text-[#6705AD] rounded-full" href={card.linksite} target="_blank">
									{card.labelsite}
								</a>
							</div>
						</div>
					))}
				</div>
			</section>
			<section className="w-full px-10 py-10 bg-[#6705AD]">
				<div className="w-full max-w-full mx-auto p-6 bg-[#F0F0F0] rounded-4xl shadow-lg">
					<h2 className="flex mb-6 justify-center items-center font-bold text-xl text-[#6705AD] tracking-widest">{t('Minhas Skills')}</h2>
					<div className="grid grid-cols-4 gap-4">
						{skills.map((skill, i) => (
							<div key={i} className="w-full">
								<div className="flex h-20 mb-1 justify-between text-sm">
									<span className="font-bold text-[#6705AD]">{skill.name}<img className="w-8" src={skill.img} /></span>
									<span className="text-[#6705AD]">{skill.percent}%</span>
								</div>
								<div className="w-full h-3 rounded-full overflow-hidden">
									<div className="h-3 bg-[#6705AD] rounded-full transition-all duration-500" style={{ width: `${skill.percent}%` }} />
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</main>
	)
}