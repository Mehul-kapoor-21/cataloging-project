import React from 'react'
import Chart1 from './Chart1'
import Chart2 from './Chart2'

export default function Chart() {
  return (
    <div>
         <main class="pt-3">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 mb-3">
            <div class="card h-100">
              <div class="card-header">
                <span class="me-2"><i class="bi bi-bar-chart-fill"></i></span>
                Area Chart Example
              </div>
              <div class="card-body">
                <Chart1/>
                
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <div class="card h-100">
              <div class="card-header">
                <span class="me-2"><i class="bi bi-bar-chart-fill"></i></span>
                Area Chart Example
              </div>
              <div class="card-body">
                <Chart2/>
              </div>
            </div>
          </div>
        </div>
    </div>
    </main>
    </div>
  )
}
