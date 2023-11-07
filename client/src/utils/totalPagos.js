export const totalPagos = () =>{
    let total =0;
    let m = document.getElementsByClassName('monto')
    
    for (let i = 0; i < m.length; i++) {
        total += Number(m[i].innerHTML.replace("$ ","").replace(".","").replace(",","."))
        
    }
    return total;
}