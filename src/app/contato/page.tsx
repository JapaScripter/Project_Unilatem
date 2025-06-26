"use client";
import { useRef } from "react";
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import "@i18n/client";

export default function Contato() {
	const { t, i18n } = useTranslation();

	const [fade, setFade] = useState(true);

	return (
		<main className="h-full bg-[#F0F0F0]">
			<section className="flex w-full h-140 lg:h-165 items-center bg-[#6705AD]">
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
	)
}