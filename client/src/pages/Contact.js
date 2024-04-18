import React from 'react'

export default function Contact() {
    const myFunction=(e)=>{
        alert("We will contact you soon")
        e.preventdefault();
    }
  return (
    <div>
         <div class="container my-4">
            <h2>CONTACT US</h2>
        <form>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Select your Query</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>--select query--</option>   
                    <option>Diet</option>
                    <option>Exercise</option>
                    <option>Others</option>
                </select>
                </div>
                <h2> Select your option</h2>
                <input type="radio" id="member" name="query" value="Are you a member?"/>
                <label for="html">Are you a member?</label><br/>
                <input type="radio" id="Trainer" name="query" value="Are you a Trainer?"/>
                <label for="css">Are you a Trainer?</label><br/>
                <input type="radio" id="Beginner" name="query" value="Are you a Beginner?"/>
                <label for="javascript">Are you a Beginner?</label><br/>

                <div class="form-group">
                    <label for="exampleFormControlTextarea1"><h2>Tell us about yourself</h2></label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea2"><h2>Elaborate Your Concern</h2></label>
                    <textarea class="form-control" id="exampleFormControlTextarea2" rows="3"></textarea>
                </div><br/>
                <button class="btn btn-primary" onclick={myFunction}>Submit</button>
            </form>

    </div>
    </div>
  )
}
