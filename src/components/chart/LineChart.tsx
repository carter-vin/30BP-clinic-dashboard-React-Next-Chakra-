/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const options = {
  chart: {
    stacked: false,
    height: 350,
    zoom: {
      enabled: false,
      autoScaleYaxis: true,
    },
  },
  yaxis: {
    title: {
      text: 'Systolic',
    },
  },
  markers: {
    size: 8,
  },

  xaxis: {
    title: {
      text: 'Diastolic',
    },
    categories: [30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
  },
  toolbar: {
    autoSelected: 'zoom',
  },
  stroke: {
    curve: 'smooth',
  },
  tooltip: {
    custom: function ({ seriesIndex, dataPointIndex, w }: any) {
      const data = w.globals.initialSeries[seriesIndex].data[dataPointIndex]
      return `
          <ul class="apex-tooltip">
            <li>
              <span>
                <strong>Systolic</strong>
              </span>
              <span>
                <strong>:</strong>
              </span>
              <span>
                <strong>${data.y}</strong>
              </span>
            </li>
            <li>
              <span>
                <strong>Diastolic</strong>
              </span>
              <span>
                <strong>:</strong>
              </span>
              <span>
                <strong>${data.x}</strong>
              </span>
            </li>
            <li>
              <span>
                <strong>Average</strong>
              </span>
              <span>
                <strong>:</strong>
              </span>
              <span>
                <strong>${data.y}/${data.x}</strong>
              </span>
            </li>
          </ul>
        `
    },
  },
}

const LineChart = () => {
  const [series] = useState([
    {
      data: [
        {
          x: 40,
          y: 100,
        },
        {
          x: 50,
          y: 70,
        },
        {
          x: 60,
          y: 120,
        },
        {
          x: 70,
          y: 80,
        },
      ],
    },
  ])
  return (
    <div className="mixed-chart">
      {typeof window !== 'undefined' && (
        <Chart type="line" options={options} series={series} />
      )}
    </div>
  )
}

export default LineChart
