//Laboratorio módulo 3

console.log("INTRODUCCIÓN")

const product = { 
    count: 10, 
    price: 10, 
    type: "libro" 
};

if (product.count >= 0) {product.count = product.count} else {product.count = 0};

let getVat = () => { 
    switch(product.type) {
    case "ropa": return iva = 0.21; break;
    case "alimentacion": return iva = 0.1; break;
    case "libro": return iva = 0.04; break;
    default: return console.log("Indique un tipo de producto válido"); break;
   }
};

console.log("Tipo de producto: " + product.type);

console.log("Coste por unidad: " + product.price);

console.log("Cantidad: " + product.count);


let getTotalProduct = () => product.count * product.price;

let getTotalVat = () => getTotalProduct() * getVat();

let getTotal = () => getTotalProduct() + getTotalVat();

console.log("Precio del producto sin IVA: " + getTotalProduct());

console.log("IVA: " + getVat());

console.log("Total IVA: " + getTotalVat());

console.log("Precio final: " + getTotal())


// Extra 1

console.log("EXTRA 1")

const empleado = {
    bruto: 15000,
    hijos: 0,
    pagas: 12
   }

 

  if(empleado.bruto < 12000) {
    retencion = 0;
} else if(empleado.bruto >= 12000 && empleado.bruto < 24000 ) {
    retencion = 0.08;
} else if(empleado.bruto >= 24000 && empleado.bruto < 34000 ) {
    retencion = 0.16;
} else {retencion = 0.3};

  if(empleado.hijos > 0 && retencion != 0) {retencion = retencion - 0.02;}

   let importeRetencion = empleado.bruto * retencion;

   let netoNominaAnual = empleado.bruto - importeRetencion;

   let NetoNominaMensual = netoNominaAnual / empleado.pagas;

   console.log("Bruto anual: " + empleado.bruto)

   console.log("Tipo retención: " + retencion)

   console.log("Total retención: " + importeRetencion)

   console.log("Neto anual: " + netoNominaAnual)

   console.log("Neto mensual: " + NetoNominaMensual)

   // Avanzado 

 