# duckFetch
La función duckFetch es una función de utilidad para hacer solicitudes HTTP. Acepta cuatro argumentos: url, id, method, y data.

url: La URL del recurso al que se está haciendo la solicitud.
id: El ID del recurso, si es aplicable.
method: El método HTTP de la solicitud (por ejemplo, 'GET', 'POST', 'DELETE', etc.).
data: Los datos que se enviarán con la solicitud, si es aplicable.
La función configura las opciones de la solicitud, hace la solicitud, y luego maneja la respuesta. Si la respuesta no es exitosa, lanza un error. Si la respuesta es exitosa y no es un 204 (sin contenido), devuelve los datos de la respuesta.

# autoIncrementalId
La función autoIncrementalId no está definida en el código proporcionado, por lo que no puedo proporcionar una descripción de lo que hace.

# TOTAL
La constante TOTAL no está definida en el código proporcionado, por lo que no puedo proporcionar una descripción de lo que hace.

# separadorMiles
La función separadorMiles toma un número como argumento y devuelve una cadena con el número formateado con puntos cada tres dígitos, contando desde las unidades. Esto es útil para formatear números en la notación de miles utilizada en muchos países.

Por ejemplo, separadorMiles(1234567) devolvería la cadena '1.234.567'.

Uso de las funciones
El código proporcionado muestra un ejemplo de cómo se pueden usar estas funciones. Primero, hace una solicitud GET para obtener algunos datos y los imprime en la consola. Luego, hay un ejemplo comentado de cómo se podría usar duckFetch para hacer una solicitud DELETE para cada elemento en los datos obtenidos.