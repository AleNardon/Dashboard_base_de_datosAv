import PlanesTable from "../components/planesTable";
import { StrictMode, useEffect, useRef } from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import { useDashboard } from "../context/dashboardContext";
import { currencyFormatter } from "../utils/currency";
import { totalPagos } from "../utils/totalPagos";
import { createRoot } from "react-dom/client";
import { TotalesPagos } from "../components/compPagos";

function PlanesPage() {
	const targetRef = useRef(null);
	const handleMutation = (mutationsList, observer) => {
		let root = null;
		let divT = document.getElementById("Tot");

		if (divT) {
			if (root === null) {
				root = createRoot(divT);
			}
			root.render(
				<TotalesPagos data={currencyFormatter(totalPagos())} />
			);
		}
	};
	useEffect(() => {
		const targetNode = targetRef.current;

		if (!targetNode) {
			return;
		}

		const observer = new MutationObserver(handleMutation);
		const config = { childList: true, subtree: true };
		observer.observe(targetNode, config);

		return () => {
			observer.disconnect();
		};
	}, []);

	const { planes, getPlanes } = useDashboard();
	useEffect(() => {
		getPlanes();
	}, []);

	return (
		<StrictMode>
			<div className="divTitle">
				<h1>Planes</h1>
			</div>
			<StyledEngineProvider injectFirst>
				<div ref={targetRef}>
					<PlanesTable data={planes} />
				</div>
			</StyledEngineProvider>
			<div id="Tot" />
		</StrictMode>
	);
}

export default PlanesPage;
