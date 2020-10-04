import React from 'react';
import Navbar from 'react-bootstrap/cjs/Navbar';
import Nav from 'react-bootstrap/cjs/Nav';
import Button from 'react-bootstrap/cjs/Button';
import styles from './styles.module.scss';

const WithHeader = (WrappedComponent: any) => () => (
	<div className={styles.root}>

		<Navbar className={styles.header}>
			<Navbar.Brand href="/">
				<img
					src="/logo.svg"
					width="80"
					height="92"
					className="d-inline-block align-top"
					alt="logo"
				/>
			</Navbar.Brand>

			<Nav className="ml-auto">
				<Nav.Link className={styles.link} href="/tariffs">Тарифы</Nav.Link>
				<Nav.Link className={styles.link} href="/signIn">Войти</Nav.Link>
			</Nav>
			<Button className={`ml-3 ${styles.button}`}>Регистрация</Button>
		</Navbar>

		<WrappedComponent />

		<div className={`mt-auto ${styles.footer}`}>
			<h6>© Аналитический центр устойчивого развития и и цифровой экономики ®</h6>
		</div>
	</div>
);

export default WithHeader;
