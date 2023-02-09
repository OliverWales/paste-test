const Table = ({ rows }: { rows: string[][] }) => (
  <table className="border-2 mt-5">
    {rows.map((r) => (
      <tr>
        {r.map((c) => (
          <td className="px-3 py-2 border-2">{c}</td>
        ))}
      </tr>
    ))}
  </table>
);

export default Table;
