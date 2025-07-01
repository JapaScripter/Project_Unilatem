'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import "@i18n/client";

const Footer: React.FC = () => {
	const { t, i18n } = useTranslation();

	const currentYear = new Date().getFullYear();

	return (
		<footer className="w-full h-auto bg-[#6705AD]">
			<div className="flex flex-col w-full h-150 lg:h-50 justify-evenly items-center bg-[#F0F0F0] rounded-t-4xl lg:rounded-none">
				<div className="flex flex-col lg:flex-row w-full px-10 gap-4 justify-around items-start">
					<div className="w-25">
						<a href="/">
							<img className="w-25" src="../img/logos/unique.png" />
						</a>
					</div>
					<div className="w-25">
						<h3 className="flex flex-row w-full justify-start items-center text-2xl text-[#0D0D0D] font-bold">{t('Menus')}</h3>
						<a href="/">
							<p className="flex flex-row w-full px-2 justify-start items-center text-lg lg:text-base text-[#6705AD] border-solid border-2 border-transparent hover:border-[#8906E6] hover:shadow-lg active:bg-[#8906E6] rounded-full">
								<img className="w-auto lg:w-5" src="../img/botoes/home_p.svg" />{t('Home')}
							</p>
						</a>
						<a href="/sobre">
							<p className="flex flex-row w-full px-2 justify-start items-center text-lg lg:text-base text-[#6705AD] border-solid border-2 border-transparent hover:border-[#8906E6] hover:shadow-lg active:bg-[#8906E6] rounded-full">
								<img className="w-auto lg:w-5" src="../img/botoes/sobre_p.svg" />{t('Sobre')}
							</p>
						</a>
						<a href="/contato">
							<p className="flex flex-row w-full px-2 justify-start items-center text-lg lg:text-base text-[#6705AD] border-solid border-2 border-transparent hover:border-[#8906E6] hover:shadow-lg active:bg-[#8906E6] rounded-full">
								<img className="w-auto lg:w-5" src="../img/botoes/contato_p.svg" />{t('Contato')}
							</p>
						</a>
					</div>
					<div className="w-25">
						<h3 className="flex flex-row w-full justify-start items-center text-2xl text-[#0D0D0D] font-bold">{t('Redes')}</h3>
						<a href="https://www.instagram.com/yuriyoshimiyashiro/" target="_blank">
							<p className="flex flex-row w-full px-2 justify-start items-center text-lg lg:text-base text-[#6705AD] border-solid border-2 border-transparent hover:border-[#8906E6] hover:shadow-lg active:bg-[#8906E6] rounded-full">
								<img className="w-auto lg:w-5" src="../img/botoes/instagram_p.svg" />Instagram
							</p>
						</a>
						<a href="https://api.whatsapp.com/send?phone=5511949147702&text=Olá!%20Gostaria%20de%20orçar%20o%20meu%20site?" target="_blank">
							<p className="flex flex-row w-full px-2 justify-start items-center text-lg lg:text-base text-[#6705AD] border-solid border-2 border-transparent hover:border-[#8906E6] hover:shadow-lg active:bg-[#8906E6] rounded-full">
								<img className="w-auto lg:w-5" src="../img/botoes/whats_p.svg" />Whatsapp
							</p>
						</a>
					</div>
					<div className="w-25">
						<h3 className="flex flex-row w-full justify-start items-center text-2xl text-[#0D0D0D] font-bold">
							{t('Linguagem')}
						</h3>
						<button onClick={() => i18n.changeLanguage('pt')}>
							<p className="flex flex-row w-full px-2 justify-start items-center text-lg lg:text-base text-[#6705AD] border-solid border-2 border-transparent hover:border-[#8906E6] hover:shadow-lg active:bg-[#8906E6] rounded-full">
								<img className="w-auto lg:w-5" src="../img/botoes/br.svg" />PT/BR
							</p>
						</button>
						<button onClick={() => i18n.changeLanguage('es')}>
							<p className="flex flex-row w-full px-2 justify-start items-center text-lg lg:text-base text-[#6705AD] border-solid border-2 border-transparent hover:border-[#8906E6] hover:shadow-lg active:bg-[#8906E6] rounded-full">
								<img className="w-auto lg:w-5" src="../img/botoes/es.svg" />ES
							</p>
						</button>
						<button onClick={() => i18n.changeLanguage('en')}>
							<p className="flex flex-row w-full px-2 justify-start items-center text-lg lg:text-base text-[#6705AD] border-solid border-2 border-transparent hover:border-[#8906E6] hover:shadow-lg active:bg-[#8906E6] rounded-full">
								<img className="w-auto lg:w-5" src="../img/botoes/en.svg" />EN
							</p>
						</button>
					</div>
				</div>
				<div className="flex flex-col lg:flex-row w-full px-10 justify-around items-start lg:items-center bg-[#F0F0F0]">
					<a className="flex w-auto lg:w-100 justify-center items-center" href="/politica">
						<p className="flex flex-row w-50 lg:px-2 justify-start lg:justify-center items-center text-lg lg:text-base text-[#6705AD] border-solid border-2 border-transparent hover:border-[#8906E6] hover:shadow-lg active:bg-[#8906E6] rounded-full">
							<img className="w-auto lg:w-5" src="../img/botoes/politica_p.svg" />{t('Politica de Privacidade')}
						</p>
					</a>
					<p className="hidden lg:flex w-110 justify-start lg:justify-center items-center text-base text-[#0D0D0D]">
						© <span>{currentYear}</span> {t('Todos os direitos reservados/desenvolvido por Unique/Unilatem')}
					</p>
					<a className="flex w-auto lg:w-100 justify-center" href="/termo">
						<p className="flex flex-row-reverse w-50 lg:px-2 justify-end lg:justify-center items-center text-lg lg:text-base text-[#6705AD] border-solid border-2 border-transparent hover:border-[#8906E6] hover:shadow-lg active:bg-[#8906E6] rounded-full">
							{t('Termos de Uso')} <img className="w-auto lg:w-5" src="../img/botoes/termo_p.svg" />
						</p>
					</a>
					<p className="flex lg:hidden w-auto justify-start lg:justify-center items-center text-lg text-[#0D0D0D]">
						© <span>{currentYear}</span> {t('Todos os direitos reservados/desenvolvido por Unique/Unilatem')}
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
