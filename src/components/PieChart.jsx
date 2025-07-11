import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

// Replace with your real SVG flags or emojis
const IndiaFlag = () => <img src="https://img.icons8.com/?size=100&id=hxqePpNZ3R6e&format=png&color=000000" alt="" className='h-8 w-8' />;
const UsaFlag = () => <img src="https://img.icons8.com/?size=100&id=MTPUWUmsAKfT&format=png&color=000000" alt="" className='h-8 w-8' />;
const BrazilFlag = () => <img src="https://img.icons8.com/?size=100&id=Mf5IDKBchhlr&format=png&color=000000" alt="" className='h-8 w-8' />;
const GlobeFlag = () => <span>🌎</span>;

const data = [
  { label: 'India', value: 50000 },
  { label: 'USA', value: 35000 },
  { label: 'Brazil', value: 10000 },
  { label: 'Other', value: 5000 },
];

const countries = [
  {
    name: 'India',
    value: 50,
    flag: <IndiaFlag />,
    color: 'hsl(220, 25%, 65%)',
  },
  {
    name: 'USA',
    value: 35,
    flag: <UsaFlag />,
    color: 'hsl(220, 25%, 45%)',
  },
  {
    name: 'Brazil',
    value: 10,
    flag: <BrazilFlag />,
    color: 'hsl(220, 25%, 30%)',
  },
  {
    name: 'Other',
    value: 5,
    flag: <GlobeFlag />,
    color: 'hsl(220, 25%, 20%)',
  },
];

function PieCenterLabel({ primaryText, secondaryText }) {
  const { width, height, left, top } = useDrawingArea();
  const primaryY = top + height / 2 - 10;
  const secondaryY = primaryY + 24;

  return (
    <>
      <text
        x={left + width / 2}
        y={primaryY}
        textAnchor="middle"
        dominantBaseline="central"
        style={{ fontSize: '1.25rem', fontWeight: 600, fill: '#555' }}
      >
        {primaryText}
      </text>
      <text
        x={left + width / 2}
        y={secondaryY}
        textAnchor="middle"
        dominantBaseline="central"
        style={{ fontSize: '0.75rem', fill: '#888' }}
      >
        {secondaryText}
      </text>
    </>
  );
}

const colors = [
  'hsl(220, 20%, 65%)',
  'hsl(220, 20%, 42%)',
  'hsl(220, 20%, 35%)',
  'hsl(220, 20%, 25%)',
];

export default function PieCharts() {
  return (
    <div
    className='w-full sm:w-full md:w-full sm:h-[604px] md:h-[606px] lg:h-[610px] xl:h-[600px]  p-4 bg-white border rounded shadow-sm'
      // style={{
      //   className:"w-full lg:h-[710px] ",
      //   border: '1px solid #ddd',
      //   borderRadius: 8,
      //   padding: 16,
      //   display: 'flex',
      //   flexDirection: 'column',
      //   gap: 16,
       
      // }}
      
    >
      <div style={{ fontSize: '0.875rem', fontWeight: 500, color: '#444' }}>
        Users by country
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <PieChart
          colors={colors}
          margin={{ top: 80, bottom: 80, left: 80, right: 80 }}
          series={[
            {
              data,
              innerRadius: 75,
              outerRadius: 100,
              paddingAngle: 0,
              highlightScope: { fade: 'global', highlight: 'item' },
            },
          ]}
          height={260}
          width={260}
          hideLegend
        >
          <PieCenterLabel primaryText="98.5K" secondaryText="Total" />
        </PieChart>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {countries.map((country, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <div style={{ fontSize: 24 }}>{country.flag}</div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: 4,
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: '#444',
                }}
              >
                <span>{country.name}</span>
                <span style={{ color: '#777' }}>{country.value}%</span>
              </div>
              <LinearProgress
                variant="determinate"
                value={country.value}
                sx={{
                  height: 6,
                  borderRadius: 3,
                  [`& .${linearProgressClasses.bar}`]: {
                    backgroundColor: country.color,
                  },
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
