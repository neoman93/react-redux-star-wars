import { BrowserRouter, Switch, NavLink, Route } from 'react-router-dom';
import routesConfig from '@routes/routesConfig';
import { REPO_NAME } from '@constants/repo';
import Header from '@components/Header/Header';
import styles from './App.module.css';

const App = () => {
	return (
		<>
			<BrowserRouter basename={`/${REPO_NAME}/`}>
				<div className={styles.wrapper}>
					<Header />
					<Switch>
						{routesConfig.map((route, index) => (
							<Route
								key={index}
								path={route.path}
								exact={route.exact}
								component={route.component}
							/>
						))}
					</Switch>
				</div>
			</BrowserRouter>
		</>
	);
};

export default App;
