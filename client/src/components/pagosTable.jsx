import { DataGrid, GridToolbar, esES } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { currencyFormatter } from "../utils/currency";
import { totalPagos } from "../utils/totalPagos";
import { BsCash as Cash,BsFillCreditCard2FrontFill as Card} from "react-icons/bs";
import { FcMoneyTransfer as Tranfer} from "react-icons/fc";

// const pagos = [
//     {
//         "id": 1,
//         "fecha_pago": "2023-10-08T03:00:00.000Z",
//         "monto": 10000,
//         "forma_pago": "efectivo",
//         "alumno_id": 70,
//         "nombre_apellido": "Graciela Jiménez",
//         "cant_clases": 4
//       },
//      ]

const columns = [
  { field: "id", headerName: "id" },
  {
    field: "nombre_apellido",
    headerName: "Nombre y Apellido",
    description: "Nombre y apellido de los alumnos registrados",
    flex: 0.3,
    minWidth: 200,

    renderCell: (params) => {
      return (
        <a href={"/pagos?a=" + params.row.alumno_id} className="link">
          {params.value}
        </a>
      );
    },
  },

  {
    field: "fecha_pago",
    headerName: "Fecha",
    headerAlign: "center",
    align: "center",
    type: "date",
    description: "Fecha en la que se efectuó el pago",
    flex: 0.2,
    minwidth: 120,
    valueGetter: (params) => {
      if (params.value != null) {
        return new Date(params.value);
      } else {
        return null;
      }
    },
  },
  {
    field: "cant_clases",
    headerName: "Concepto",
    description: "Concepto del pago",
    minwidth: 180,
    flex: 0.3,
    headerAlign: "center",
    align: "center",
    renderCell: (params) => {
      return `Plan de ${params.value} clases`;
    },
  },

  {
    field: "forma_pago",
    headerName: "Forma de pago",
    minwidth: 180,
    flex: 0.3,
    headerAlign: "right",
    align: "right",
    renderCell: (params) => {
      switch (params.value) {
        case "efectivo":
          return <div className="FPago cash"><p>Efectivo</p> <Cash /></div>;
          
        case "transferencia":
          return <div className="FPago tranfer"><p>Transferencia </p><Tranfer /></div>;
         
        case "tarjeta de credito":
          return <div className="FPago card"><p>Tarjeta de crédito </p><Card /></div>;
          
          case "tarjeta de debito":
          return <div className="FPago card"><p>Tarjeta de débito </p><Card /></div>;
          
         
      
        default:
          break;
      }
    }
  },

  {
    field: "monto",
    headerName: "Monto",
    type: "number",
    headerAlign: "center",
    align: "right",
    description: "Monto del pago efectuado",
    minWidth: 250,
    flex: 0.3,

    renderCell: (params) => {
      if (params.value > 0) {
        return <p className="monto">{currencyFormatter(params.value)}</p>;
      } else {
        return <p className="monto">$ 0</p>;
      }
    },
  },
];

function PagosTable(props) {


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
        pageSizeOptions={[5, 10, 25,50]}
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

export default PagosTable;
