import React from 'react';
import styles from '../../styles/Cartelera.module.css';
import img0 from '../../images/strange.jpg';
import img1 from '../../images/m9.jpg';
import img2 from '../../images/dumble.webp';
import img4 from '../../images/m4.jpg';
import img5 from '../../images/m3.jpg';
import img6 from '../../images/venom.webp';
function Cartelera() {
	return (
		<>
			<div className={styles.mainCard}>
				<div className={styles.card}>
					<img
						className={styles.image}
						src={img0}
						alt='Cargando...'
					/>
					<div className={styles.content}>
						<h4 className={styles.name}>
							DOCTOR STRANGE EN EL MULTIVERSO DE LA LOCURA de
							Marvel
						</h4>
					</div>
					<div className={styles.dates}>
						<p className={styles.rol}>Acción, Aventura</p>
					</div>
				</div>
			</div>
			<div className={styles.mainCard}>
				<div className={styles.card}>
					<img
						className={styles.image}
						src={img1}
						alt='Cargando...'
					/>
					<div className={styles.content}>
						<h4 className={styles.name}>EL HOMBRE DEL NORTE</h4>
					</div>
					<div className={styles.dates}>
						<p className={styles.rol}>Acción, Drama</p>
					</div>
				</div>
			</div>
			<div className={styles.mainCard}>
				<div className={styles.card}>
					<img
						className={styles.image}
						src={img2}
						alt='Cargando...'
					/>
					<div className={styles.content}>
						<h4 className={styles.name}>
							Los secretos de Dumbledore
						</h4>
					</div>
					<div className={styles.dates}>
						<p className={styles.rol}>Magia, Fantasia</p>
					</div>
				</div>
			</div>
			<div className={styles.mainCard}>
				<div className={styles.card}>
					<img
						className={styles.image}
						src={img4}
						alt='Cargando...'
					/>
					<div className={styles.content}>
						<h4 className={styles.name}>Hollywood</h4>
					</div>
					<div className={styles.dates}>
						<p className={styles.rol}>Comedia, Aventura</p>
					</div>
				</div>
			</div>
			<div className={styles.mainCard}>
				<div className={styles.card}>
					<img
						className={styles.image}
						src={img5}
						alt='Cargando...'
					/>
					<div className={styles.content}>
						<h4 className={styles.name}>
							SONIC 2: EL RETORNO DE LA FUERZA
						</h4>
					</div>
					<div className={styles.dates}>
						<p className={styles.rol}>Acción, Animada</p>
					</div>
				</div>
			</div>
			<div className={styles.mainCard}>
				<div className={styles.card}>
					<img
						className={styles.image}
						src={img6}
						alt='Cargando...'
					/>
					<div className={styles.content}>
						<h4 className={styles.name}>Venom</h4>
					</div>
					<div className={styles.dates}>
						<p className={styles.rol}>Acción, Terror</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Cartelera;
