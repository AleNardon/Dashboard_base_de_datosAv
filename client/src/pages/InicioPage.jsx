import '../stylesheets/InicioPage/InicioPage.css'


function InicioPage() {
  return (
    <div className="divPrincipal">
      <div className="divSecundario">
        <div className='divProgress'>
          <h2 className='alumnosConPlan'>
            Alumnos con Plan
          </h2>
          <label htmlFor="cantidadAlumnos">35 de 100</label>
            <progress min="0" max="100" value="35" id='cantidadAlumnos'></progress>
          <h2 className='cobradosConPlan'>
            Cobrados con Plan
          </h2>
          <label htmlFor="cantidadCobrados">70 de 100</label>
          <progress min="0" max="100" value="70" id='cantidadCobrados'></progress>
          <h2 className='cobradosConPlan'>
            Alumnos con plan 4 clases
          </h2>
          <label htmlFor="plan4Clases">50 de 100</label>
          <progress min="0" max="100" value="50" id='plan4Clases'></progress>
          <h2 className='cobradosConPlan'>
            Alumnos con plan 8 clases
          </h2>
          <label htmlFor="plan8Clases">30 de 100</label>
          <progress min="0" max="100" value="30" id='plan8Clases'></progress>
        </div>
      </div>
    </div>
  )
}

export default InicioPage