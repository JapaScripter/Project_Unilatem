'use client';
import { useTranslation } from 'react-i18next';
import '@i18n/client';

export default function Politica() {
	const { t, i18n } = useTranslation();

	return (
		<main className='h-full bg-[#6705AD]'>
			<section className='flex w-full h-full py-25 justify-center items-center'>
				<div className='flex flex-col w-3/4 h-full justify-center items-center'>
					<h2 className='mb-5 font-high font-bold text-center text-xl lg:text-4xl text-[#F0F0F0]'>
						{t('Politica de Privacidade')}
					</h2>
					<ul className='space-y-10 font-apple font-bold text-justify text-xl lg:text-base text-[#F0F0F0] list-disc list-inside'>
						<li>{t('A sua privacidade é importante para nós.')}</li>
						<li>{t('É política da Unique/Unilatem respeitar a sua privacidade em relação a qualquer informação que possamos coletar enquanto operamos nosso site.')}</li>
						<li>{t('Solicitamos informações pessoalmente identificáveis apenas quando realmente precisamos delas para lhe fornecer um serviço.')}</li>
						<li>{t('Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento.')}</li>
						<li>{t('Também informamos por que estamos coletando e como será usado.')}</li>
						<li>{t('Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado.')}</li>
						<li>{t('Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perda e roubo, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.')}</li>
						<li>{t('Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.')}</li>
						<li>{t('O nosso site pode ter links para sites externos que não são operados por nós.')}</li>
						<li>{t('Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.')}</li>
						<li>{t('Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.')}</li>
						<li>{t('O uso continuado do nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais.')}</li>
						<li>{t('Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.')}</li>
					</ul>

				</div>
			</section>
		</main>
	)
}