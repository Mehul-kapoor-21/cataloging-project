import {React,useState} from 'react'

export default function Profile() {
    const [p,setP]=useState(false);
    const [a,setA]=useState(false);
    const [e,setE]=useState(false);
    const showa = () =>{
            setE(false);
            setA(true);
            setP(false);
        }
        const showp = () =>{
            setE(false);
            setA(false);
            setP(true);
            }
            const showe = () =>{
                setE(true);
                setA(false);
                setP(false);
                }
               
  return (
    <div>
        <section class="vh-100" style={{backgroundColor: "#eee"}}>
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-12 col-xl-4">

        <div class="card" style={{borderRadius: "15px"}}>
          <div class="card-body text-center">
            <div class="mt-3 mb-4">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                class="rounded-circle img-fluid" style={{width: "100px"}} />
            </div>
            <h4 class="mb-2">Parush Uppal</h4>
            <p class="text-muted mb-4">Devloper <span class="mx-2">|</span> <a
                href="#!">parush-uppal.netlify.app/</a></p>
            <div class="mb-4 pb-2">
            <ul class="nav mx-5">
  <li class="nav-item">
    <a class="nav-link active" onClick={showa} aria-current="page" href="#">Address</a>
  </li>
  <li class="nav-item">
    <a  onClick={showp} class="nav-link" href="#">Phone Info</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" onClick={showe} href="#">Email</a>
  </li>
  
</ul>
{p&&<p>8222066101</p>}
{e&&<p>parush.uppal@gmail.com</p>}
{a&&<p>Panchkula</p>}
            </div>
            <button type="button" class="btn btn-primary btn-rounded btn-lg">
              Message now
            </button>
            
            <div class="d-flex justify-content-between text-center mt-5 mb-2">
              <div>
                <p class="mb-2 h5">State</p>
                <p class="text-muted mb-0">Haryana</p>
              </div>
              <div class="px-3">
                <p class="mb-2 h5">Joined</p>
                <p class="text-muted mb-0">1 year Ago</p>
              </div>
              <div>
                <p class="mb-2 h5">Age</p>
                <p class="text-muted mb-0">20 years</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
    </div>
  )
}
