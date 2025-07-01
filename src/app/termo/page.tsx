"use client";
import { useTranslation } from 'react-i18next';
import "@i18n/client";

export default function Politica() {
	const { t, i18n } = useTranslation();

	return (
		<main className='h-full bg-[#6705AD]'>
			<section className='flex w-full h-full py-25 justify-center items-center'>
				<div className='flex flex-col w-3/4 h-full justify-center items-center'>
					<h2 className='mb-5 font-high font-bold text-center text-xl lg:text-4xl text-[#F0F0F0]'>
						{t('Termos de Uso')}
					</h2>
					<ul className='space-y-10 font-apple font-bold text-justify text-xl lg:text-base text-[#F0F0F0] list-disc list-inside'>
						<li>{t('Uso do Site: A Unique/Unilatem é destinada para uso comercial e empresarial. Você concorda em utilizar o site apenas para os fins previstos no contexto de atividades comerciais.')}</li>
						<li>{t('Conteúdo do Usuário: Ao contribuir com conteúdo para a Unique/Unilatem, você concede permissão para que esse conteúdo seja utilizado pela plataforma de acordo com nossos termos, principalmente no âmbito comercial.')}</li>
						<li>{t('Privacidade: Respeitamos a sua privacidade. Leia nossa política de privacidade para entender como suas informações são coletadas, utilizadas e protegidas.')}</li>
						<li>{t('Propriedade Intelectual: Todo o conteúdo presente na Unique/Unilatem, incluindo textos, imagens, vídeos e logotipos, é protegido por direitos autorais e propriedade intelectual, especialmente no contexto de uso comercial.')}</li>
						<li>{t('Limitação de Responsabilidade: A Unique/Unilatem não se responsabiliza por danos diretos, indiretos, incidentais, especiais ou consequenciais resultantes do uso ou incapacidade de usar nosso site no contexto comercial.')}</li>
						<li>{t('Alterações nos Termos: Reservamos o direito de modificar estes termos a qualquer momento. Recomendamos que você revise periodicamente os termos de uso.')}</li>
						<li>{t('Ao continuar a usar o site da Unique/Unilatem, você concorda com estes termos e condições. Se tiver alguma dúvida sobre os termos de uso, entre em contato conosco.')}</li>
					</ul>
				</div>
			</section>
		</main>
	)
}
