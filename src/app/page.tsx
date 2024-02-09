"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./globals.css";
import Table from "./components/table";

export default function Home() {
 
  const [Numero_Empleado, setNumero_Empleado] = useState('');
  const [header, setHeader] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    search_handler();
  }, [Numero_Empleado]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    
    const newValue = event.target.value
    setNumero_Empleado(newValue);
  };

  async function search_handler() {
    try {
      const response = await axios.post('/api/requestData', {Numero: Numero_Empleado});
      setHeader(response.data.Header);
      setData(response.data.Data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main>
      <div>
        <input type="number" placeholder='Introduce el numero de empleado' value={Numero_Empleado} onChange={handleChange}/>
        <Table headers={header} rows={data} ></Table>
      </div>
    </main>
  );
}

