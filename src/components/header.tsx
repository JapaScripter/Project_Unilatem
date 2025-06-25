'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
	const { t, i18n } = useTranslation();

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isLangOpenDesktop, setIsLangOpenDesktop] = useState(false);
	const [isLangOpenMobile, setIsLangOpenMobile] = useState(false);
	const [showHeader, setShowHeader] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setShowHeader(window.scrollY > 0);
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const toggleMenu = () => setIsMenuOpen((prev) => !prev);
	const toggleLangDesktop = () => setIsLangOpenDesktop((prev) => !prev);
	const toggleLangMobile = () => setIsLangOpenMobile((prev) => !prev);

	return (
		showHeader && (
			<header key={i18n.language} className="fixed flex w-full h-20 z-50">
				<div className="relative flex w-full h-20 lg:h-25 items-center justify-center">
					<div className="absolute inset-0 bg-[#6705AD] rounded-b-2xl lg:rounded-none pointer-events-none" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 85% 75%, 80% 100%, 20% 100%, 15% 75%, 0 50%)', zIndex: 0 }} />
					<div className="relative hidden w-3/4 lg:flex z-10">
						<ul className="flex w-full justify-evenly items-center">
							<li>
								<Link className="flex flex-col size-20 justify-center items-center text-base lg:text-lg text-[#F0F0F0] rounded-full hover:shadow-lg hover:bg-[#8906e6] transition-colors" href="/" onClick={() => setIsMenuOpen(false)}>
									<img className="size-5" src="/img/botoes/home_b.svg" alt="Home" />
									{t('Home')}
								</Link>
							</li>
							<li>
								<Link className="flex flex-col size-20 justify-center items-center text-base lg:text-lg text-[#F0F0F0] rounded-full hover:shadow-lg hover:bg-[#8906e6] transition-colors" href="/sobre" onClick={() => setIsMenuOpen(false)}>
									<img className="size-5" src="/img/botoes/sobre_b.svg" alt="Sobre" />
									{t('Sobre')}
								</Link>
							</li>
							<li>
								<Link href="/" className="w-1/2">
									<img className="size-10 lg:size-20" src="/img/logos/unique.png" alt="Logo" />
								</Link>
							</li>
							<li>
								<Link className="flex flex-col size-20 justify-center items-center text-base lg:text-lg text-[#F0F0F0] rounded-full hover:shadow-lg hover:bg-[#8906e6] transition-colors" href="/contato" onClick={() => setIsMenuOpen(false)}>
									<img className="size-5" src="/img/botoes/contato_b.svg" alt="Contato" />
									{t('Contato')}
								</Link>
							</li>
							<li className="relative">
								<button className="flex flex-col size-20 justify-center items-center text-base lg:text-lg text-[#F0F0F0] rounded-full hover:shadow-lg hover:bg-[#8906e6] transition-colors" onClick={toggleLangDesktop}>
									<img className="size-5" src="/img/botoes/language.svg" alt="Idioma" />
									{t('Linguagem')}
								</button>
								{isLangOpenDesktop && (
									<ul className="absolute flex flex-col top-15 -right-6 mt-2 p-4 gap-2 items-start bg-[#6705AD] rounded-2xl shadow-lg z-50">
										{[
											{ code: 'pt', href: '/', img: "br.svg", label: "PT/BR" },
											{ code: 'en', href: '/', img: "en.svg", label: "EN" },
											{ code: 'es', href: '/', img: "es.svg", label: "ES" },
										].map(({ code, href, img, label }) => (
											<li key={label}>
												<button className="flex w-25 items-center p-2 gap-2 text-[#F0F0F0] hover:bg-[#8906e6] rounded-2xl"
													onClick={() => {
														i18n.changeLanguage(code);
														setIsLangOpenDesktop(false);
														setIsMenuOpen(false);
													}}>
													<img className="size-10" src={`/img/botoes/${img}`} alt={label} />
													{label}
												</button>
											</li>
										))}
									</ul>
								)}
							</li>
						</ul>
					</div>
					<div className="relative flex w-1/2 lg:hidden px-4 justify-between z-10">
						<Link href="/" className="flex">
							<img className="size-10 lg:size-20" src="/img/logos/unique.png" alt="Logo" />
						</Link>
						<button onClick={toggleMenu} aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}>
							<img className="size-10" src={isMenuOpen ? "/img/botoes/close.svg" : "/img/botoes/menu.svg"} alt={isMenuOpen ? "Fechar" : "Menu"} />
						</button>
					</div>
					{isMenuOpen && (
						<div className="fixed w-full h-full top-10 left-0 py-2 bg-[#6705AD]/90 shadow-md z-9">
							<ul className="flex flex-col items-start p-4 gap-2">
								{[
									{ href: "/", icon: "home_b.svg", label: t('home') },
									{ href: "/sobre", icon: "sobre_b.svg", label: t('about') },
									{ href: "/contato", icon: "contato_b.svg", label: t('contact') },
								].map(({ href, icon, label }) => (
									<li key={label} className="w-full py-2 border-b-2 border-[#F0F0F0]">
										<Link className="flex w-fit p-2 gap-2 items-center text-sm text-[#F0F0F0] hover:bg-[#8906e6] rounded-2xl" href={href} onClick={() => setIsMenuOpen(false)}>
											<img className="size-10" src={`/img/botoes/${icon}`} alt={label} />
											{label}
										</Link>
									</li>
								))}
								<li className="w-full py-2 border-b-2 border-[#F0F0F0]">
									<button className="flex p-2 gap-2 items-center text-[#F0F0F0] hover:bg-[#8906e6] rounded-2xl" onClick={toggleLangMobile}>
										<img className="size-10" src="/img/botoes/language.svg" alt="Idioma" />
										{t('language')}
									</button>
									{isLangOpenMobile && (
										<ul className="flex flex-col ml-12 mt-4 gap-4">
											{[
												{ code: 'pt', img: 'br.svg', label: 'PT/BR' },
												{ code: 'en', img: 'en.svg', label: 'EN' },
												{ code: 'es', img: 'es.svg', label: 'ES' },
											].map(({ code, img, label }) => (
												<li key={code}>
													<button className="flex gap-2 items-center text-[#F0F0F0]"
														onClick={() => {
															i18n.changeLanguage(code);
															setIsLangOpenMobile(false);
															setIsMenuOpen(false);
														}}>
														<img className="size-10" src={`/img/botoes/${img}`} alt={label} />
														{label}
													</button>
												</li>
											))}
										</ul>
									)}
								</li>
							</ul>
						</div>
					)}
				</div>
			</header>
		)
	);
};

export default Header;
