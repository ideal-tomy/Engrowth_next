import React, { useState } from 'react';
import './Accordion.css';

interface AccordionItem {
  title: string;
  content: string;
}

interface SimulationAccordionProps {
  items: AccordionItem[];
}

const SimulationAccordion: React.FC<SimulationAccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="simulation-accordion">
      {items.map((item, index) => (
        <div key={index} className={`accordion-item ${openIndex === index ? 'open' : ''}`}>
          <button
            className="accordion-header"
            onClick={() => toggleAccordion(index)}
          >
            <span>{item.title}</span>
            <span className="accordion-icon">{openIndex === index ? '-' : '+'}</span>
          </button>
          <div className="accordion-content">
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SimulationAccordion; 