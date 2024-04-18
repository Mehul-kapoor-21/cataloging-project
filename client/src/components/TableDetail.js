import React from 'react'
import TableDetailPage from './TableDetailPage'

export default function TableDetail() {
    
  return (
    
      <div class="container-fluid">
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1">
 View Details
</button>


<div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Item Details</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <TableDetailPage/>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    </div>
    
  )
}
