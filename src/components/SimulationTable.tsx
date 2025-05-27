import React from 'react';
import '../styles/SimulationTable.css';

interface SimulationItem {
  week: string;
  topic: string;
}

interface SimulationTableProps {
  title: string;
  data: SimulationItem[];
}

const SimulationTable: React.FC<SimulationTableProps> = ({ title, data }) => {
  return (
    <div className="simulation-section">
      <h2 className="section-title simulation-title">{title}</h2>
      <div className="simulation-table-container">
        <table className="simulation-table">
          <thead>
            <tr>
              <th className="week-column">week</th>
              <th className="theme-column">シミュレーションテーマ（場面トピック）</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="week-cell">week<br/>{item.week}</td>
                <td>{item.topic}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SimulationTable; 