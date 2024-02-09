const fs = require('fs');
const axios = require('axios');

async function processCSV(url) {
  try {
    const response = await axios.get(url);
    const text = response.data; 
    const lines = text.split('\n');

    const headers = lines[0].split(',').map(header => header.trim().replace(/^"|"$/g, ''));
    const data = lines.slice(1).map(line => {
      const values = line.split(',').map(value => value.trim().replace(/^"|"$/g, '').replace(/\r$/, ''));
      let obj = {};
      headers.forEach((header, index) => {
        obj[header] = values[index] === 'undefined' ? undefined : values[index];
      });
      return obj;
    });
    return data.filter(obj => obj[headers[0]]); 
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

async function readCSV() {
  try {
    const url = "https://drive.google.com/uc?export=download&id=1ZQ8UrTN0vAWanwLx1wftCcBMaUTQSmKH";
    const localRows = await processCSV(url);
    console.log('UwU');
    return localRows;
  } catch (error) {
    console.error('Error al leer el CSV:', error);
    throw error; 
  }
}




function FindInArrays(ToFind,rows) {
  const ToFindNumber = ToFind.toString();
  const arrays = rows;
  let ArraysToSend = [];
  for (let i = 0; i < arrays.length; i++) {
    const compareNumber = arrays[i]["empleado_numero"].toString();
    if (compareNumber.startsWith(ToFindNumber)) {
      ArraysToSend.push(arrays[i]);
    }
  }
  return ArraysToSend;
}

function GetHeaders(rows) {
  if (rows.length > 0 && rows[0] != null) {
    return Object.keys(rows[0]);
  } else {
    return [];
  }
}

async function handler(req, res) {
  try {
    const rows = await readCSV();

    if (req.method === 'POST') {
      const numeroABuscar = req.body.Numero;
      const resultado = FindInArrays(numeroABuscar, rows); 
      const headers = GetHeaders(rows); 
      res.status(200).json({Header: headers, Data: resultado});
    } else {
      res.status(405).end(`Método ${req.method} no permitido`);
    }
  } catch (error) {

    console.error(error);
    res.status(500).send('Error al procesar el archivo CSV');
  }
}

export default handler;
