import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
          <table>
      <thead>
        <tr>
          <th>id</th>
          <th>depto</th>
          <th>caja</th>
          <th>fecha</th>
          <th>empleado_numero</th>
          <th>empleado_nombre</th>
          <th>discrepancia</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Dato 1</td>
          <td>Dato 2</td>
        </tr>
        <tr>
          <td>Dato 3</td>
          <td>Dato 4</td>
        </tr>
      </tbody>
    </table>

    </main>
  );
}
