import { ProductContextProvider } from "../contexts/ProductContext";
import { RecommendedContextProvider } from "../contexts/RecommendedContext";

const Main = ({ children }) => {
	return (
		<main className="main">
			<ProductContextProvider>
				<RecommendedContextProvider>{children}</RecommendedContextProvider>
			</ProductContextProvider>
		</main>
	);
};

export default Main;
