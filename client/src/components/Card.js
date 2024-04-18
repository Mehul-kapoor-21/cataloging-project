import React from "react";

export default function Card() {
  return (
    <div>
      <main class="mt-5 pt-3">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <h4>Dashboard</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 mb-3">
              <div class="card bg-primary text-white h-100">
                <div class="card-body py-5 h4 text-center">100 Total</div>
                <div class="card-footer d-flex">
                  View Details
                  <span class="ms-auto">
                    <i class="bi bi-chevron-right"></i>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-md-3 mb-3">
              <div class="card bg-warning text-dark h-100">
                <div class="card-body py-5 text-center h4">
                  20 Require Attention
                </div>
                <div class="card-footer d-flex">
                  View Details
                  <span class="ms-auto">
                    <i class="bi bi-chevron-right"></i>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-md-3 mb-3">
              <div class="card bg-success text-white h-100">
                <div class="card-body py-5 text-center h4">15 Successful </div>
                <div class="card-footer d-flex">
                  View Details
                  <span class="ms-auto">
                    <i class="bi bi-chevron-right"></i>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-md-3 mb-3">
              <div class="card bg-danger text-white h-100">
                <div class="card-body py-5 text-center h4">10 Dissaproved</div>
                <div class="card-footer d-flex">
                  View Details
                  <span class="ms-auto">
                    <i class="bi bi-chevron-right"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
