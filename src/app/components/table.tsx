
import "../globals.css";
interface tableProps {
    headers: string[]; 
    rows: any[]; 
  }
  export default function Table({ headers, rows }: tableProps) {
    return (
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}><h3>{header}</h3></th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header, headerIndex) => (
                <td key={headerIndex}><h3>{row[header]}</h3></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
    