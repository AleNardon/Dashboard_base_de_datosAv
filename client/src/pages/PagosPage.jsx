import PagosTable from "../components/pagosTable";
import { StrictMode, useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import { useDashboard } from "../context/dashboardContext";
import { TotalesPagos } from "../components/compPagos";
import { totalPagos } from "../utils/totalPagos";
import { currencyFormatter } from "../utils/currency";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import Loader from "../components/Loader";

function PagosPage() {
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

	const location = useLocation();
	const params = queryString.parse(location.search);

	const { getPagos, pagos, alupago } = useDashboard();
	useEffect(() => {
		if (params.a) {
			getPagos(params.a);
		} else {
			getPagos();
		}
	}, []);
	if (params.a && !alupago) {
        return <Loader/>
	}
	return (
		<StrictMode>
			<div className="divTitle">
				<h1 id="titlePag">Pagos {params.a?` de ${alupago}`:""}</h1>
			</div>
			<StyledEngineProvider injectFirst>
				<div ref={targetRef}>
					<PagosTable data={pagos} />
				</div>
			</StyledEngineProvider>
			<div id="Tot" />
		</StrictMode>
	);
}

export default PagosPage;
