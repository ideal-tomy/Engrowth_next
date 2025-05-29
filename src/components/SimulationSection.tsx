'use client';

import { useState } from 'react';
import Image from 'next/image';

interface SimulationTable {
  title: string;
  imageSrc: string;
  data: Array<{
  week: string;
  topic: string;
  }>;
  accordionItems: Array<{
  title: string;
  content: string;
  }>;
}

interface SimulationSectionProps {
  tables: SimulationTable[];
}

export default function SimulationSection({ tables }: SimulationSectionProps) {
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };

  return (
    <section className="simulation-section section-padding" style={{ background: '#fff', padding: '3.5rem 0' }}>
      <div className="container" style={{ maxWidth: 900, margin: '0 auto' }}>
        {tables.map((table, tableIndex) => (
          <div key={tableIndex} className="simulation-table-container" style={{ marginBottom: '5rem' }}>
            {/* 仮画像：シミュレーション英会話のイメージ（例：会話するビジネスマンのイラストや英会話レッスン風景） */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <Image
                src={table.imageSrc}
                alt={`${table.title} のイメージ画像`}
                width={800}
                height={500}
                style={{ borderRadius: '12px', boxShadow: '0 4px 16px rgba(204,0,0,0.08)' }}
              />
            </div>
            {/* タイトル部分 */}
            <div style={{
              background: '#f0f0f0',
              borderLeft: '6px solid #cc0000',
              padding: '1.2rem 1.5rem',
              maxWidth: 800,
              margin: '0 auto 2.5rem',
              textAlign: 'center',
              borderRadius: '6px 6px 0 0',
              borderBottom: '2px solid #cc0000',
              boxShadow: '0 2px 8px rgba(204,0,0,0.04)',
            }}>
              <span style={{
                color: '#b22222',
                fontWeight: 700,
                fontSize: '2.1rem',
                letterSpacing: '0.12em',
                fontFamily: 'Noto Serif JP, serif',
              }}>
                {table.title}
              </span>
            </div>
            {/* テーブル部分 */}
            <div style={{ maxWidth: 800, margin: '0 auto 2.2rem', boxShadow: '0 2px 12px rgba(204,0,0,0.04)', borderRadius: '0 0 10px 10px', overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff' }}>
                <thead>
                  <tr>
                    <th style={{
                      background: '#f0f0f0',
                      color: '#333',
                      fontWeight: 'bold',
                      padding: '1rem',
                      borderLeft: '5px solid #cc0000',
                      width: 120,
                      textAlign: 'center',
                      fontSize: '1.1rem',
                      letterSpacing: '0.04em',
                    }}>week</th>
                    <th style={{
                      background: '#f0f0f0',
                      color: '#333',
                      fontWeight: 'bold',
                      padding: '1rem',
                      textAlign: 'center',
                      fontSize: '1.1rem',
                      letterSpacing: '0.04em',
                    }}>シミュレーションテーマ（場面トピック）</th>
                  </tr>
                </thead>
                <tbody>
                  {table.data.map((item, index) => (
                    <tr
                      key={index}
                      style={{
                        background: index % 2 === 0 ? '#faeaea' : '#fff',
                        borderBottom: '1px solid #eee',
                        transition: 'background 0.2s',
                      }}
                      onMouseOver={e => (e.currentTarget.style.background = '#ffeaea')}
                      onMouseOut={e => (e.currentTarget.style.background = index % 2 === 0 ? '#faeaea' : '#fff')}
                    >
                      <td style={{
                        color: '#8b0000',
                        fontWeight: 700,
                        fontSize: '1.2rem',
                        textAlign: 'center',
                        padding: '1.2rem 0.7rem',
                        border: '1px solid #eee',
                        width: 120,
                        letterSpacing: '0.04em',
                        fontFamily: 'Noto Sans Mono, monospace',
                      }}>
                        <span style={{ fontSize: '0.9rem', color: '#b22222', fontWeight: 500 }}>week</span><br />
                        <span style={{ fontSize: '1.25rem', fontWeight: 700 }}>{item.week}</span>
                      </td>
                      <td
                        style={{
                          fontWeight: 600,
                          color: '#222',
                          fontSize: '1.25rem',
                          textAlign: 'left',
                          padding: '1.2rem 1.2rem 1.2rem 2.2rem',
                          border: '1px solid #eee',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.7rem',
                          lineHeight: 1.7,
                        }}
                      >
                        <span style={{ fontSize: '1.3rem', color: '#cc0000', marginRight: 12, minWidth: 28, textAlign: 'center' }}>💬</span>
                        {item.topic}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* アコーディオン部分 */}
            <div className="simulation-accordion" style={{ maxWidth: '800px', margin: '0 auto' }}>
              {table.accordionItems.map((item, index) => (
                <div key={index} className={`accordion-item ${openAccordionIndex === index ? 'open' : ''}`} style={{ background: '#fff', marginBottom: '1.2rem', border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden', transition: 'box-shadow 0.3s', boxShadow: openAccordionIndex === index ? '0 4px 16px rgba(204,0,0,0.08)' : 'none' }}>
                  <button
                    className="accordion-header"
                    style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '1.3rem 1.7rem', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'Noto Sans JP, sans-serif', fontSize: '1.13rem', color: '#8b0000', fontWeight: 600,
                    }}
                    onClick={() => toggleAccordion(index)}
                  >
                    {/* 仮アイコン：Qマーク */}
                    <span style={{ marginRight: 8, fontSize: '1.2rem' }}>❓</span>
                    <span>{item.title}</span>
                    <span className="accordion-icon" style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#cc0000', transition: 'transform 0.3s', transform: openAccordionIndex === index ? 'rotate(45deg)' : 'none' }}>{openAccordionIndex === index ? '-' : '+'}</span>
                  </button>
                  <div
                    className="accordion-content"
                    style={{
                      maxHeight: openAccordionIndex === index ? 500 : 0,
                      overflow: 'hidden',
                      padding: openAccordionIndex === index ? '1.6rem 1.7rem' : '0 1.7rem',
                      background: '#f9f9f9',
                      transition: 'max-height 0.4s, padding 0.4s',
                      fontSize: openAccordionIndex === index ? '1.05rem' : 0,
                      lineHeight: openAccordionIndex === index ? 1.7 : 0,
                      color: '#555',
                      visibility: openAccordionIndex === index ? 'visible' : 'hidden',
                    }}
                  >
                    {/* 仮アイコン：Aマーク */}
                    <span style={{ marginRight: 8, fontSize: '1.1rem', color: '#cc0000' }}>💡</span>
                    <span>{item.content}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 