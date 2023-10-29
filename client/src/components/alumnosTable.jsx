import { DataGrid,GridToolbar } from '@mui/x-data-grid';

const alumnos=[
        {
            "id": 70,
            "nombre_apellido": "Graciela Jiménez",
            "telefono": "3411231268",
            "activo": 1,
            "fecha_creacion": "2023-10-23",
            "primer_clase": "2023-10-01",
            "ultima_clase": "2023-10-22",
            "deuda": 8100
        },
        {
            "id": 56,
            "nombre_apellido": "María González",
            "telefono": "3411231254",
            "activo": 1,
            "fecha_creacion": "2023-10-23",
            "primer_clase": "2023-10-01",
            "ultima_clase": "2023-10-22",
            "deuda": 8100
        },
        {
            "id": 57,
            "nombre_apellido": "Laura Martínez",
            "telefono": "3411231255",
            "activo": 1,
            "fecha_creacion": "2023-10-23",
            "primer_clase": "2023-10-02",
            "ultima_clase": "2023-10-23",
            "deuda": 6100
        },
        {
            "id": 58,
            "nombre_apellido": "Ana Rodríguez",
            "telefono": "3411231256",
            "activo": 1,
            "fecha_creacion": "2023-10-23",
            "primer_clase": "2023-10-02",
            "ultima_clase": "2023-10-23",
            "deuda": 18300
        },
        {
            "id": 59,
            "nombre_apellido": "Patricia Pérez",
            "telefono": "3411231257",
            "activo": 1,
            "fecha_creacion": "2023-10-23",
            "primer_clase": "2023-10-03",
            "ultima_clase": "2023-10-24",
            "deuda": 9300
        },
        {
            "id": 60,
            "nombre_apellido": "Carolina López",
            "telefono": "3411231258",
            "activo": 1,
            "fecha_creacion": "2023-10-23",
            "primer_clase": "2023-10-03",
            "ultima_clase": "2023-10-24",
            "deuda": 3000
        },
    ]
const columns = [  
    {field:'nombre_apellido',headerName:'Nombre y Apellido'},
    {field:'telefono',headerName:'Telefono'},
    {field:'activo',headerName:'Activo',type:'number'},
    {field:'primer_clase',headerName:'Periodo'},
    {field:'deuda',headerName:'Deuda',type:'currency'},



]


function AlumnosTable() {
  return (
    <div className='divDataGrid' style={{ height: 800, width: '100%' }}>
      <DataGrid className='dataGrid'
        rows={alumnos}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        disableColumnSelector
        slots={{
            toolbar: GridToolbar,
          }}
        
      />
    </div>
  )
}

export default AlumnosTable