import "./Grid.css";

function Grid({ data: { header = [], values = [], actions = null } }) {
  return (
    <table className="gridTable">
      <thead>
        <tr>
          {header.map((colName) => (
            <th key={colName}>{colName}</th>
          ))}
          {!!actions && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {values.map((row, index) => (
          <tr key={index}>
            {header.map((colName) => (
              <td
                key={colName}
                className={!isNaN(row[colName]) ? "text-right" : "text-center"}
              >
                {row[colName]}
              </td>
            ))}
            {!!actions && <td className="gridActions">{actions(row)}</td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Grid;
