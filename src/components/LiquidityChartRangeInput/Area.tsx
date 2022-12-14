import { area, curveStepAfter, ScaleLinear } from 'd3'
import React, { useMemo } from 'react'
import styled from 'styled-components/macro'

import { ChartEntry } from './types'

const Path = styled.path<{ fill: string | undefined }>`
  opacity: 0.7;
  fill: ${({ fill, theme }) => 'url(#linear-gradient)'};
`

//linear-gradient(90.39deg,#6d00f3 0.66%,#ff0052 50.34%)

export const Area = ({
  series,
  xScale,
  yScale,
  xValue,
  yValue,
  fill,
}: {
  series: ChartEntry[]
  xScale: ScaleLinear<number, number>
  yScale: ScaleLinear<number, number>
  xValue: (d: ChartEntry) => number
  yValue: (d: ChartEntry) => number
  fill?: string | undefined
}) =>
  useMemo(
    () => (
      <>
        <linearGradient id="linear-gradient" gradientTransform="rotate(90)">
          <stop offset="0.66%" stopColor="#6d00f3" />
          <stop offset="50.34%" stopColor="#ff0052" />
        </linearGradient>
        <Path
          fill={fill}
          d={
            area()
              .curve(curveStepAfter)
              .x((d: unknown) => xScale(xValue(d as ChartEntry)))
              .y1((d: unknown) => yScale(yValue(d as ChartEntry)))
              .y0(yScale(0))(
              series.filter((d) => {
                const value = xScale(xValue(d))
                return value > 0 && value <= window.innerWidth
              }) as Iterable<[number, number]>
            ) ?? undefined
          }
        />
      </>
    ),
    [fill, series, xScale, xValue, yScale, yValue]
  )
