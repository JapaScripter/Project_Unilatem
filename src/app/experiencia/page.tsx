'use client';
import { useTranslation } from 'react-i18next';
import '@i18n/client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const experiencias = [
	{
		data: '05/12/2013 até 04/12/2015',
		empresa: 'Sabesp',
		cargo: 'Estagiário Ensino Médio',
		tarefas: [
			'Suporte de usuários do SAP;',
			'Administração de planilhas;',
			'Organização de arquivos digitais de funcionários;',
			'Organização de arquivos almoxarifado.'
		],
		local: 'Av. do Estado, 681, Ponte Pequena - São Paulo, SP - 01107-000',
		imagem: '/img/exp/sabesp.jpeg'
	},
	{
		data: '05/02/2017 até 04/06/2017',
		empresa: 'CATA Inspeção de Segurança Veicular LTDA.',
		cargo: 'Estágio Técnico em Mecânica',
		tarefas: [
			'Manobrar veículos;',
			'Inspeção veicular de emissão de CO²;',
			'Inspeção veicular de portas;',
			'Inspeção veicular de eixos;',
			'Inspeção veicular de pneus.'
		],
		local: 'Rua Barra do Turvo, 153/159, Mooca - São Paulo, SP - CEP: 03162-120',
		imagem: '/img/exp/cata.jpg'
	},
	{
		data: '02/10/2017 até 07/02/2019',
		empresa: 'Logistica Ambiental de São Paulo - LOGA',
		cargo: 'Auxiliar de Manutenção',
		tarefas: [
			'Manutenção e Instalação de rastreadores de combustível;',
			'Manutenção e Instalação de rastreadores de veículos;',
			'Manutenção e planejamento do equipamento de emissão de CO²;',
			'Manobrar veículos;',
			'Manutenção e planejamento de carrinhos elétricos Jacto;',
			'Manutenção elétrica de veículos pesados.'
		],
		local: 'Av. Marechal Mario Guedes, 221, Jaguaré - São Paulo, SP - CEP: 05348-010',
		imagem: '/img/exp/loga.png'
	},
	{
		data: '05/04/2019 até 02/01/2020',
		empresa: 'Finamac Engenharia e Industrialização de Equipamentos LTDA.',
		cargo: 'Estágio em Mecatrônica',
		tarefas: [
			'Montagem de equipamentos de desmolde de sorvetes industriais;',
			'Soldagem de tubos de cobre;',
			'Montagem de máquinas de sorvete industriais.',
		],
		local: 'Avenida Aurea, 514, Jardim do Estádio - Santo André, SP - CEP: 09175-130',
		imagem: '/img/exp/finamac.jpg'
	},
	{
		data: '02/01/2020 até 31/03/2020',
		empresa: 'Finamac Engenharia e Industrialização de Equipamentos LTDA.',
		cargo: 'Montador Júnior I',
		tarefas: [
			'Montagem de equipamentos de desmolde de sorvetes industriais;',
			'Soldagem de tubos de cobre;',
			'Montagem de máquinas de sorvete industriais.',
		],
		local: 'Avenida Aurea, 514, Jardim do Estádio - Santo André, SP - CEP: 09175-130',
		imagem: '/img/exp/finamac.jpg'
	},
	{
		data: '03/2020',
		empresa: 'Nenhuma',
		cargo: 'Nenhum',
		tarefas: [
			'INICIO DA PANDEMIA DE COVID-19',
		],
		local: 'nenhum',
		imagem: '/img/exp/covid.jpeg'
	},
	{
		data: '31/03/2020 até 31/06/2020',
		empresa: 'Tecstam Forjaria e Estamparia LTDA.',
		cargo: 'Auxiliar de Mecânico',
		tarefas: [
			'Operador de Torno Mecânico;',
		],
		local: 'Av. Presidente Wilson, 2571, Mooca - São Paulo, SP - CEP: 03107-000',
		imagem: '/img/exp/tecstam.jpeg'
	},
	{
		data: '31/06/2020 até 25/10/2021',
		empresa: 'Yoshis World',
		cargo: 'MEI e Mecânico de Ar-Condicionado',
		tarefas: [
			'Instalação e manutenção de ar-condicionado.',
		],
		local: 'Rua Martinho de Alboim, 270, Jardim Santa Teresinha - São Paulo, SP - CEP: 03572-250',
		imagem: '/img/exp/mei.jpeg'
	},
	{
		data: '09/08/2021 até 21/03/2022',
		empresa: 'Libercon Consultoria para Estrangeiros LTDA.',
		cargo: 'Auxiliar de Escritório',
		tarefas: [
			'Preenchimento de fichas para estrangeiros japoneses na PF',
			'Agendar datas para estrangeiros japoneses na PF;',
			'Acompanhar os estrangeiros japoneses na PF (Falando japonês e/ou inglês);',
			'Organização de documentos e prontuários de cada estrangeiro.',
		],
		local: 'Av. Paulista, 807, 25° andar, cj 2522, Cerqueira César - São Paulo, SP - CEP: 01311-915',
		imagem: '/img/exp/libercon.jpeg'
	},
	{
		data: '01/08/2022 até 29/08/2022',
		empresa: 'Roveri Associados S/S LTDA.',
		cargo: 'Operador Cobrador',
		tarefas: [
			'Ligação para cobrança de telemarketing.'
		],
		local: 'Av. Conselheiro Antonio Prado, 390, Bairro Centro - São Caetano do Sul, SP - CEP: 09521-005',
		imagem: '/img/exp/roveri.jpeg'
	},
	{
		data: '29/08/2022 até 29/08/2023',
		empresa: 'Roveri Associados S/S LTDA.',
		cargo: 'Analista de Desenvolvimento Júnior',
		tarefas: [
			'Criação e manutenção de sites da empresa;',
			'Manutenção do Front-End de sistemas da empresa.'
		],
		local: 'Av. Conselheiro Antonio Prado, 390, Bairro Centro - São Caetano do Sul, SP - CEP: 09521-005',
		imagem: '/img/exp/roveri.jpeg'
	},
	{
		data: '29/08/2023 até 01/01/2024',
		empresa: 'Meu Par Brownies',
		cargo: 'MEI - Vendedor e Doceiro',
		tarefas: [
			'Organizar Marketing em posts no instagram e storyes',
			'Vender brownies na rua;',
			'Confeccionar brownies.',
		],
		local: 'Av. Brumado de Minas, 257, Parque Independência - São Paulo, SP - CEP: 03224-000',
		imagem: '/img/exp/mei.jpeg'
	},
	{
		data: '01/01/2024 até 30/01/2024',
		empresa: 'Gelato da Sato',
		cargo: 'Vendedor e Atendente',
		tarefas: [
			'Atrair os fregueses na porta do estabelecimento;',
			'Fazer os pedidos para os clientes.'
		],
		local: 'Rua Galvão Bueno, 40, Shopping SOgo, 3° andar, Liberdadde - São Paulo, SP - CEP: 01506-000',
		imagem: '/img/exp/sato.jpeg'
	},
	{
		data: '01/02/2024 até 25/03/2024',
		empresa: 'M & J Comércio de Roupas LTDA.',
		cargo: 'Assistente de Vendas',
		tarefas: [
			'Vender equipamentos de becha tenis e roupas;',
			'Organizar a loja assim com o estabelecimento.'
		],
		local: 'Rua Juventus, 660, Parque da Mooca - São Paulo, SP - CEP: 03124-020',
		imagem: '/img/exp/m&j.jpeg'
	},
	{
		data: '20/08/2024 até 06/01/2025',
		empresa: 'Konecta Brasil Outsourcing LTDA.',
		cargo: 'Operador Tele Atendimento Jr III',
		tarefas: [
			'LIgação de venda de planos para clientes.'
		],
		local: 'Libero Badaró, 377, Rua Sete de Abril, 230, Centro Histórico - São Paulo, SP - CEP: 01009-906',
		imagem: '/img/exp/konecta.jpeg'
	},
	{
		data: '01/06/2023 até atualmente',
		empresa: 'Unilatem / Unique',
		cargo: 'Empreendedor e Desenvolvedor',
		tarefas: [
			'Prospecção de clientes;',
			'Organização e controle de pagamentos;',
			'Organização de projetos;',
			'Desenvolver sites e sistemas web;',
			'Criar e editar imagens e vídeos.',
		],
		local: 'Rua Paramu, 585, Casa 2 - São Paulo, SP - CEP: 03147-100',
		imagem: '/img/exp/mei.jpeg'
	},
];

export default function Experiencia() {
	const { t } = useTranslation();
	const [current, setCurrent] = useState(0);
	const [direction, setDirection] = useState(0);

	const paginate = (newDirection: number) => {
		setDirection(newDirection);
		setCurrent((prev) => (prev + newDirection + experiencias.length) % experiencias.length);
	};

	const variants = {
		enter: (direction: number) => ({
			x: direction > 0 ? 800 : -800,
			opacity: 0,
			scale: 0.9
		}),
		center: {
			x: 0,
			opacity: 1,
			scale: 1,
			transition: { duration: 0.6 }
		},
		exit: (direction: number) => ({
			x: direction > 0 ? -800 : 800,
			opacity: 0,
			scale: 0.9,
			transition: { duration: 0.6 }
		})
	};

	return (
		<main className='min-h-screen bg-[#6705Ad]'>
			<section className='flex flex-col w-full p-2 py-10 lg:p-10 items-center justify-center'>
				<h2 className='mb-4 font-high font-bold text-1xl lg:text-2xl text-[#F0F0F0]'>
					{t('Experiencias de Trabalho')}
				</h2>
				<div className='flex w-full items-center h-[185vw] lg:h-full overflow-hidden'>
					<button onClick={() => paginate(-1)} className='flex w-10 h-10 justify-center items-center text-[#6705Ad] text-3xl bg-[#F0F0F0] hover:bg-[#8906E6] rounded-full -rotate-90 cursor-pointer'>
						<img src='/img/botoes/arrow.svg' />
					</button>
					<div className='relative flex justify-center items-center w-full h-full min-h-[50vw]'>
						<AnimatePresence custom={direction} mode='wait'>
							<motion.div key={current} custom={direction} variants={variants} initial='enter' animate='center' exit='exit' className='absolute flex flex-col w-full h-full items-center'>
								<div className='flex flex-col w-75 h-200 lg:w-150 lg:h-180 p-5 justify-evenly lg:items-start font-apple text-[#6705Ad] bg-[#F0F0F0] shadow-lg rounded-xl'>
									<img src={experiencias[current].imagem} className='w-auto h-40 rounded-md bg-center object-cover' />
									<p><strong>Período:</strong> {experiencias[current].data}</p>
									<p><strong>Empresa:</strong> {experiencias[current].empresa}</p>
									<p><strong>Cargo:</strong> {experiencias[current].cargo}</p>
									<p><strong>Local:</strong> {experiencias[current].local}</p>
									<p className='mt-2'><strong>Tarefas:</strong></p>
									{experiencias[current] &&
										<ul className='list-disc list-inside'>
											{experiencias[current].tarefas.map((tarefa, index) => (
												<li key={index}>{tarefa}</li>
											))}
										</ul>
									}
								</div>
							</motion.div>
						</AnimatePresence>
					</div>
					<button onClick={() => paginate(1)} className='flex w-10 h-10 justify-center items-center text-[#6705Ad] text-3xl bg-[#F0F0F0] hover:bg-[#8906E6] rounded-full rotate-90 cursor-pointer'>
						<img src='/img/botoes/arrow.svg' />
					</button>
				</div>
			</section>
		</main>
	);
}
