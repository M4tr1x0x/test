const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');
const csvFilePath = path.join(__dirname, '..', '..', '..', '..', 'data', 'Template_reset.csv');

function readCSV() {
  return new Promise((resolve, reject) => {
    let localRows = [];

    fs.createReadStream(csvFilePath)
      .pipe(csv())
      .on('data', (data) => {
        localRows.push(data);
      })
      .on('end', () => {
        console.log('UwU'); 
        resolve(localRows); 
      })
      .on('error', reject); 
  });
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
