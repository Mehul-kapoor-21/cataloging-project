import {React,useState} from 'react'

export default function AddDataModel() {
    const handleOnChange = (event)=>{
        setEmail(event.target.value) ;
    }
    const handleOnChange1 = (event)=>{
        setName(event.target.value) ;
      }
      const handleOnChange3 = (event)=>{
        setNumber(event.target.value) ;
      }
    const [email,setEmail]=useState('');
    const [name,setName]=useState('');
    const [number,setNumber]=useState('');
  return (
    <div>
        <form className="needs-validation" noValidate >
                    
            
                     
                    <div>
                    <div  id="allfeild">
                    <div className="was-validated mb-3 ">
                        <label for="validationCustom02" className="form-label">Name</label>
                        <input type="text" value={name} onChange={handleOnChange1} className="form-control" id="validationCustom02"  required/>
                        <div className="invalid-feedback">
                            Please enter Name
                          </div>
                    </div>
                    <div className="was-validated mb-3 ">
                        <label for="phone" className="form-label">Office</label>

                        <input type="tel" value={number} onChange={handleOnChange3} id="phone" name="phone"

                               className="form-control"  required/>
                               <div className="invalid-feedback">
                                Please enter Office
                              </div>
                              </div>
                              <div className="was-validated mb-3 ">
                        <label for="phone" className="form-label">Start Date</label>

                        <input type="tel" value={number} onChange={handleOnChange3} id="phone" name="phone"

                               className="form-control"  required/>
                               <div className="invalid-feedback">
                                Please enter your Phone number
                              </div>
                              </div>
                    <div className="was-validated mb-3 ">
                        <label for="phone" className="form-label">Age</label>

                        <input type="tel" value={number} onChange={handleOnChange3} id="phone" name="phone"

                               className="form-control"  required/>
                               <div className="invalid-feedback">
                                Please enter Age
                              </div>
                              </div>
                    <div className="was-validated mb-3 ">
                        <label for="phone" className="form-label">Start Date</label>

                        <input type="tel" value={number} onChange={handleOnChange3} id="phone" name="phone"

                               className="form-control"  required/>
                               <div className="invalid-feedback">
                                Please enter Start Date
                              </div>
                              </div>
                              <div className="was-validated mb-3 ">
                        <label for="phone" className="form-label">Salary</label>

                        <input type="tel" value={number} onChange={handleOnChange3} id="phone" name="phone"

                               className="form-control"  required/>
                               <div className="invalid-feedback">
                                Please enter  Salary
                              </div>
                              </div>
                    {/* <div className="was-validated mb-3 " id="pass">
                      <label for="exampleInputPassword1" className="form-label">Password</label>
                      <input type="password" value={pass} onChange={handleOnChange2} className="form-control" id="exampleInputPassword1" required/>
                      <div className="invalid-feedback">
                        Please enter your password
                      </div>
                    </div> */}
                </div>
                 </div>
                  </form>
    </div>
  )
}
