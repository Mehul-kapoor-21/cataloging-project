import React from 'react'
import AddDataModel from './AddDataModel'

export default function AddToTable() {
  
  return (
    <div>
     <main>
      <div class="container-fluid">
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
 Add Item
</button>


<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Add Items</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <AddDataModel/>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
    </main>
    </div>
  )
}
