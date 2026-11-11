const op ={
    "==": (a,b) => a === b,
    "!=": (a,b)=> a !== b,
    ">": (a,b)=> a > b,
    ">=": (a,b)=> a >= b,
    "<": (a,b)=> a !== b,
    "<=": (a,b)=> a <= b,
    "includes": (a,b) => a && a.includes(b)
}

const makeFiltro = ({attribute, operator,value})=>{
    if(!Object.hasOwn[operator])
        throw new Error ('Operador no soportado')
    return (dato) => op[operator](dato[attribute],value)
}

const makeFiltros = condiciones => {
    return condiciones.map(c => makeFiltro(c))
}

module.exports = {makeFiltros}