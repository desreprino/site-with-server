import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Componentes
import Header from "./components/Header";
import Main from "./components/Main";

// Pages
import Category from "./pages/Category";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail"

function App() {
	const routes = [
		{ path: "/", component: <Home /> },
		{ path: "/productos", component: <Products /> },
		{
			path: "/productos/categorias/:category",
			component: <Category />,
			exact: false,
		},
		{ 
			path: "/product/:slug", 
			component: <ProductDetail />,
			exact: true,
		},
		{ path: "/nosotros", component: <AboutUs /> },
		{ path: "/contacto", component: <Contact /> },
	];

	return (
		<div className="App">
			<Router>
				<Header />
				<Main>
					<Switch>
						{routes.map(({ path, exact = true, component }) => {
							return (
								<Route key={path} path={path} exact={exact}>
									{component}
								</Route>
							);
						})}
					</Switch>
				</Main>
			</Router>
		</div>
	);
}

export default App;
