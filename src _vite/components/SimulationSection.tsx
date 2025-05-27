import React from 'react';
import SimulationTable from './SimulationTable';
import Accordion from './Accordion';
import '../styles/SimulationSection.css';

interface SimulationItem {
  week: string;
  topic: string;
}

interface AccordionItem {
  title: string;
  content: string;
}

interface SimulationSectionProps {
  tables: {
    title: string;
    data: SimulationItem[];
    accordionItems: AccordionItem[];
  }[];
}

const SimulationSection: React.FC<SimulationSectionProps> = ({ tables }) => {
  return (
    <section className="simulation-section">
      <div className="container">
        {tables.map((table, index) => (
          <div key={index} className="simulation-block">
            <SimulationTable 
              title={table.title}
              data={table.data}
            />
            <Accordion items={table.accordionItems} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SimulationSection; 