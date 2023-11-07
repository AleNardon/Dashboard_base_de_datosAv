import { DataGrid, GridToolbar, esES } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { currencyFormatter } from "../utils/currency";
import { totalPagos } from "../utils/totalPagos";

// const planes =  [{
//     "id": 15,
//     "alumno_id": 39,
//     "nombre_apellido": "Pablo Zabaleta",
//     "monto_plan": 32500,
//     "pago_acumulado": 0,
//     "primer_clase": "2023-10-08T03:00:00.000Z",
//     "ultima_clase": "2023-10-29T03:00:00.000Z",
//     "deuda": 32500
//   },]

const columns = [
  { field: "id", headerName: "id" },
  {
    field: "nombre_apellido",
    headerName: "Nombre y Apellido",
    description: "Nombre y apellido del alumno",
    flex: 0.3,
    minWidth: 150,

    renderCell: (params) => {
      return (
        <Link to={"/pagos/a=" + params.row.alumno_id} className="link">
          {params.value}
        </Link>
      );
    },
  },

  {
    field: "primer_clase",
    headerName: "Desde",
    width: 180,
    type: "date",
    description: "Fecha de la primer clase del del plan tomado por el alumno",
    valueGetter: (params) => {
      if (params.value != null) {
        return new Date(params.value);
      } else {
        return null;
      }
    },
  },
  {
    field: "ultima_clase",
    headerName: "Hasta",
    width: 180,
    type: "date",
    description:
      "Fecha de la ultima clase del último plan tomado por el alumno",

    valueGetter: (params) => {
      if (params.value != null) {
        return new Date(params.value);
      } else {
        return null;
      }
    },
  },

  {
    field: "monto_plan",
    headerName: "Monto",
    type: "number",
    headerAlign: "left",
    align: "left",
    description: "Monto del plan tomado por el alumno",
    minWidth: 150,
    flex: 0.3,

    renderCell: (params) => {
      if (params.value > 0) {
        return <p className="monto">{currencyFormatter(params.value)}</p>;
      } else {
        return <p>$ 0</p>;
      }
    },
  },
  {
    field: "pago_acumulado",
    headerName: "Acumulado",
    type: "number",
    headerAlign: "left",
    align: "left",
    description: "Sumatoria de los pagos efectuados por el alumno en ese plan",
    minWidth: 150,
    flex: 0.3,

    renderCell: (params) => {
      if (params.value > 0) {
        return <p className="monto">{currencyFormatter(params.value)}</p>;
      } else {
        return <p>$ 0</p>;
      }
    },
  },
  {
    field: "deuda",
    headerName: "Deuda",
    type: "number",
    headerAlign: "center",
    align: "center",
    description: "Deuda existente del alumno = Monto - Acumulado",
    minWidth: 200,
    flex: 0.3,

    renderCell: (params) => {
      if (params.value == params.row.monto_plan) {
        return (
          <span className="spanSiDeuda">{currencyFormatter(params.value)}</span>
        );
      } else if (params.value > 0) {
        return (
          <span className="spanMedDeuda">
            {currencyFormatter(params.value)}
          </span>
        );
      } else {
        return <span className="spanNoDeuda">$ 0</span>;
      }
    },
  },
];

function PlanesTable(props) {
  return (
    <div className="DivTable">
      <DataGrid
        rows={props.data}
        columns={columns}
        initialState={{
          columns: {
            columns,
            columnVisibilityModel: {
              id: false,
            },
          },
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        pageSizeOptions={[5, 10, 25]}
        disableColumnSelector
        disableDensitySelector
        disableRowSelectionOnClick
        slots={{
          toolbar: GridToolbar,
        }}
      />
    </div>
  );
}

export default PlanesTable;
