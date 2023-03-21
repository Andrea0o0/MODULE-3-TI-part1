const iteration_3 = (n1,n2) => {
    return ((n2/n1).toString().indexOf('.') === -1)
}

const iteration_4 = (array) => {
   return (array.map(elem => elem[0].toUpperCase()))
}

const iteration_5 = (array) => {
    return (array.reduce((accum, cValue) => accum + cValue,0)/array.length)
 }

const iteration_6 = (array) => {
    return (array.filter(elem => elem.age >= 18))
}

const iteration_7 = (array) => {
    const compare = (a,b)=>a-b
    console.log(array.compare())
    return true
}

const iteration_9 = (string) => {
    return (string.length-string.replaceAll('a','').length)
}

