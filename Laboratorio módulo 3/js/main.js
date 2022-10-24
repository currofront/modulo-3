//Laboratorio módulo 3

console.log("INTRODUCCIÓN")

const product = { 
    count: 10, 
    price: 10, 
    type: "libro" 
};

if (product.count >= 0) {product.count = product.count} else {product.count = 0}

// if (product.type == "ropa") {iva = 0.21};
// if (product.type == "alimentacion") {iva = 0.1};
// if (product.type == "libro") {iva = 0.04};

switch(product.type) {
    case "ropa": iva = 0.21; break;
    case "alimentacion": iva = 0.1; break;
    case "libro": iva = 0.04; break;
    default: console.log("Indique un tipo de producto válido"); break;
   }

let total = product.count * product.price;

let totalIva = total * iva;

let totalProducto = total + totalIva;

console.log("Precio del producto sin IVA: " + total);

console.log("IVA: " + iva)

console.log("Total IVA: " + totalIva)

console.log("Precio final: " + totalProducto)


// Extra 1

console.log("EXTRA 1")

const empleado = {
    bruto: 15000,
    hijos: 0,
    pagas: 12
   }

 

  if(empleado.bruto < 12000) {retencion = 0};
  if(empleado.bruto >= 12000 && empleado.bruto < 24000 ) {retencion = 0.08};
  if(empleado.bruto >= 24000 && empleado.bruto < 34000 ) {retencion = 0.16};
  if(empleado.bruto >= 34000) {retencion = 0.3};

  if(empleado.hijos > 0 && retencion != 0) {retencion = retencion - 0.02;}

   let importeRetencion = empleado.bruto * retencion;

   let netoNominaAnual = empleado.bruto - importeRetencion;

   let NetoNominaMensual = netoNominaAnual / empleado.pagas;

   console.log("Bruto anual: " + empleado.bruto)

   console.log("Tipo retención: " + retencion)

   console.log("Total retención: " + importeRetencion)

   console.log("Neto anual: " + netoNominaAnual)

   console.log("Neto mensual: " + NetoNominaMensual)