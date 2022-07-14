/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { Box } from '@chakra-ui/react'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const options = {
  chart: {
    stacked: false,
    padding: 0,
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
  stroke: {
    show: true,
    width: 2,
  },
  xaxis: {
    title: {
      text: 'Diastolic',
    },
  },
  toolbar: {
    autoSelected: 'zoom',
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
    <Box height={[350, 400, 450]}>
      <Chart
        type="line"
        options={options}
        series={series}
        width="100%"
        height="100%"
      />
    </Box>
  )
}

export default LineChart
