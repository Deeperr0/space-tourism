import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";
import dataJson from "./assets/data.json";
import Loading from "./components/Loading/Loading";
import Navbar from "./components/Navbar";
import Home from "./Home";
const Destination = lazy(() => import("./Destination"));
const Crew = lazy(() => import("./Crew"));
const Technology = lazy(() => import("./Technology"));

function App() {
	return (
		<Suspense fallback={<Loading />}>
			<Navbar />
			<Router>
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/destination"
						element={
							<Destination
								name={dataJson.destinations[0].name}
								dataJson={dataJson}
								images={dataJson.destinations[0].images}
								description={dataJson.destinations[0].description}
								distance={dataJson.destinations[0].distance}
								travel={dataJson.destinations[0].travel}
							/>
						}
					/>
					<Route
						path="/crew"
						element={<Crew dataJson={dataJson} />}
					/>
					<Route
						path="/technology"
						element={<Technology dataJson={dataJson} />}
					/>
				</Routes>
			</Router>
		</Suspense>
	);
}

export default App;
