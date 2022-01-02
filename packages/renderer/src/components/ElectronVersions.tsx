import React from "react";

const divStyle: React.CSSProperties = {
  textAlign: "left",
  display: "grid",
  justifyContent: "center",
};

const ElectronVersions = () => {
  return (
    <table>
      <tbody>
        {Object.keys(window.versions).map((key) => {
          return (
            <tr key={key}>
              <td className="td-key">{key}</td>
              <td className="td-version">v{window.versions[key]}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ElectronVersions;
