/* =====Imports===== */
import React from 'react';
import '../App.css';
// import logo from ''
/* =====Imports===== */

/* =====Cabecalho===== */
export default function Cabecalho() {
	return (
		<React.Fragment>
			<header id='coCr'>
				<div>
					{/* <img src={logo} alt="Logo Shape no Pé" /> */}
				</div>
				<div className="coSn">
					<div className='coSnIs'>
						<box-icon className="coSnIe" type='solid' name='home-heart'></box-icon>
					</div>
					<div className='coSnIs'>
						<box-icon className="coSnIe" type='solid' name='cart-add'></box-icon>
					</div>
					<div className='coSnIs'>
						<box-icon className="coSnIe" type='solid' name='conversation'></box-icon>
					</div>
					<div className='coSnIs'>
						<box-icon className="coSnIe" type='solid' name='store'></box-icon>
					</div>
				</div>
			</header>
		</React.Fragment>
	);
}
/* =====Cabecalho===== */