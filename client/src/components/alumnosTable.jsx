import { DataGrid,GridToolbar,esES  } from '@mui/x-data-grid';
import { Link } from "react-router-dom"
import { currencyFormatter } from '../utils/currency';
import {BsWhatsapp} from 'react-icons/bs';

// const alumnos=[
//     {
//       "id": 33,
//       "nombre_apellido": "Leandro Romagnoli",
//       "telefono": "3411231231",
//       "activo": 1,
//       "fecha_creacion": "2023-10-23T03:00:00.000Z",
//       "primer_clase": null,
//       "ultima_clase": null,
//       "deuda": null
//   },
// ]


const columns = [  
    {field:'id',headerName:'id'},
    {field:'nombre_apellido',headerName:'Nombre y Apellido',
    flex:0.3,
    minWidth:200,
    
    renderCell: (params) => {
        return <Link to={'/pagos/'+ params.row.id} className='link'>{params.value}</Link>
      }
    },
    
    {field:'telefono',headerName:'Telefono', headerAlign:"left",
    flex:0.2,
    minwidth:120,
    } ,
    {field:'activo',headerName:'Activo',type:'number',
    width:150, 
    // headerClassName: 'super-app-theme--header',
    headerAlign:"center",
    align: 'center',
    renderCell: (params) => {
      if(params.value==1){
        console.log(params);
        return <span className='spanSiTablaAlumno'></span>
      }else{
        return <span className='spanNoTablaAlumno'></span>
      }
    }},
    {field:'primer_clase',headerName:'Desde',width:180,type:'date',
    valueGetter: (params) => {
      if(params.value!=null){
        return new Date(params.value)
      }else{
        return null
      }
    },
  },
    {field:'ultima_clase',headerName:'Hasta',width:180,type:'date',

    valueGetter: (params) => {
      if(params.value!=null){
        return new Date(params.value)
      }else{
        return null
      }
    },
    
  },
    {field:'deuda',headerName:'Deuda',type:'number',headerAlign:"center",align: 'center',
    minWidth:250,flex:0.3,
    
    renderCell: (params) => {
      if(params.value>0){
        return <span className='spanSiDeuda'>{currencyFormatter(params.value)}</span>
      }else{
        return <span className='spanNoDeuda'>$ 0</span>
      }
    }},
    {field:'fecha_creacion',headerName:'-',maxWidth:200,align: 'right',
    renderCell: (params) => {
      return <a href={'https://wa.me/54'+params.row.telefono} target='_blank' ><BsWhatsapp className='wppIcon'/></a>
    }
  },



]


function AlumnosTable(props) {
  
  return (

    <div className='DivTable'>
      <DataGrid

        rows={props.data}
        columns={columns}            
        initialState={{
            columns:{
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
        pageSizeOptions={[5, 10,25]}
        disableColumnSelector
        disableDensitySelector
        disableRowSelectionOnClick
        slots={{
            toolbar: GridToolbar,
          }}
        
      />
    </div>
  )
}

export default AlumnosTable