export function CardInit(params) {
	return (
		<div className="divCard">
            <h2 className='aluConPlan'>{params.title}</h2>
          <label htmlFor="cantidadAlumnos">{params.desde} de {params.hasta}</label>
            <progress min="0" max={params.hasta} value={params.desde} id='prog'></progress>
		</div>
	);
}
