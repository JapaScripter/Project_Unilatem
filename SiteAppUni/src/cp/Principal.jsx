/* =====Imports===== */
import React from 'react';
import '../App.css';
import Cabecalho from './Cabecalho';
import Rodape from './Rodape';
/* =====Imports===== */

/* =====Rodape===== */
export default function Principal() {
  return (
		<React.Fragment>
			<Cabecalho />
			<section id='plSn'>
				<h1 className='plSnTe'>Esse é o principal</h1>
			</section>
			<Rodape />
		</React.Fragment>
  );
}
/* =====Rodape===== */