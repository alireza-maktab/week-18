import React from "react";

export default function TableMatrix(props) {
  const rows = props.matrix.map((row) => (
    <tr key={row.join("")}>
      {row.map((column) => (
        <td key={column}>{column}</td>
      ))}
    </tr>
  ));

  const headers = new Array(props.matrix[0].length)
    .fill(null)
    .map((_, index) => <th key={index + 1}>col {index + 1}</th>);
  return (
    <>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </>
  );
}
