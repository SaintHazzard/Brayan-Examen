import '../App/WebComponets/main.js'
import '../App/WebComponets/nivelDeCalidad.js'
import '../App/WebComponets/tipoApp.js'
import '../App/WebComponets/disenioApp.js'
import '../App/WebComponets/monetizarApp.js'
import '../App/WebComponets/autenticacionApp.js'
import '../App/WebComponets/totalApp.js'


const URL_API = `http://154.38.171.54:3000/`
const head = new Headers({
  "Content-Type": "application/json"
});

const TOTAL = [];

async function duckFetch(endpoint, id = null, request, data) {
  const url = id ? `${URL_API}${endpoint}/${id}` : `${URL_API}${endpoint}`;
  return await HTTPrequest(url, request, data);
}
async function autoIncrementalId(endPoint) {
  let dataId = await duckFetch(endPoint, null, 'GET', null);
  let newId = Math.max(...dataId.map(something => Number(something.id))) + 1;
  return String(newId);
}
async function HTTPrequest(url, method, data = null) {
  const options = {
    method,
    headers: head,
    body: data ? JSON.stringify(data) : null
  };
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Error en la petición.");
  }
  if (response.status !== 204) {
    return await response.json();
  }
}

function separadorMiles(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export { duckFetch, autoIncrementalId, TOTAL, separadorMiles }


let valoresAdd = await duckFetch('priceF', null, "GET", null)
console.log(valoresAdd);




// for (let i = 1; i < valoresAdd.length; i++) {
//   await duckFetch(`priceF/${1}`, null, "DELETE", valoresAdd[i]);
// }


