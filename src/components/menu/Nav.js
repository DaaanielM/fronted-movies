import React from 'react';
import styles from '../../styles/Nav.module.css';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	FaDollarSign,
	faDollarSign,
	faUser,
	faSignInAlt,
	faTable,
	faIndent,
} from '@fortawesome/free-solid-svg-icons';

function Nav() {
	return (
		<>
			<nav className={styles.navbar}>
				<label className={styles.logo}>
					<Link to={'/Cartelera'} className={styles.link}>
						<img className={styles.burger} src={Logo} alt='' />
						<span className={styles.movies}>Royal Movies</span>
					</Link>
				</label>
				<ul className={styles.logoul}>
					<li className={styles.logoli}>
						<Link to={'/Cartelera'} className={styles.logolink}>
							<FontAwesomeIcon
								icon={faIndent}
								className={styles.fontIcon}
							/>
							Cartelera
						</Link>
					</li>
					<li className={styles.logoli}>
						<Link to={'/Proximamente'} className={styles.logolink}>
							<FontAwesomeIcon
								icon={faTable}
								className={styles.fontIcon}
							/>
							Próximamente
						</Link>
					</li>
					<li className={styles.logoli}>
						<Link to={'/Promociones'} className={styles.logolink}>
							<FontAwesomeIcon
								icon={faDollarSign}
								className={styles.fontIcon}
							/>
							Promociones
						</Link>
					</li>
					<li className={styles.logoli} id='guia'>
						<Link to={'/Empleados'} className={styles.logolink}>
							<FontAwesomeIcon
								icon={faUser}
								className={styles.fontIcon}
							/>
							Empleados
						</Link>
					</li>

					{/* <li className={styles.logoli}>
						<Link to={'/Categorias'} className={styles.logolink}>
							<FontAwesomeIcon
								icon={faAtom}
								className={styles.fontIcon}
							/>
							Categorias
						</Link>
					</li> */}
					<li className={styles.logoli}>
						<Link to={'/Login'} className={styles.logolink}>
							<FontAwesomeIcon
								icon={faSignInAlt}
								className={styles.fontIcon}
							/>
							Ingreso
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Nav;
