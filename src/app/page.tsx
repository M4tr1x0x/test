import Image from "next/image";
import styles from "./page.module.css";
import "./globals.css";
export default function Home() {
  return (
    <main>
          <table>
      <thead>
        <tr>
          <th><h3>id</h3></th>
          <th><h3>depto</h3></th>
          <th><h3>caja</h3></th>
          <th><h3>fecha</h3></th>
          <th><h3>empleado_numero</h3></th>
          <th><h3>empleado_nombre</h3></th>
          <th><h3>discrepancia</h3></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><h3>Dato 1</h3></td>
          <td><h3>Dato 2</h3></td>
        </tr>
        <tr>
          <td><h3>Dato 3</h3></td>
          <td><h3>Dato 4</h3></td>
        </tr>
      </tbody>
    </table>

    </main>
  );
}
