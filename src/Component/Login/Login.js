import React from "react";
import { Button, Form } from "react-bootstrap";
import Header from "../Home/Header/Header";
import "./Login.css";
const Login = () => {
  // const style ={

  //   backgroundColor:'white',
  //   textColo
  // }
  return (
    <div>
      <Header></Header>
      <section class="vh-40" style={{backgroundColor: '#508bfc'}}>
  <div class="container  h-30">
    <div class="row d-flex justify-content-center align-items-center h-30">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style={{borderRadius: '1rem'}}>
          <div class="card-body  text-center">

            <h3 class="mb-3">Login</h3>

            <div class="form-outline ">
              <input type="email" id="typeEmailX" class="form-control form-control-lg" />
              <label class="form-label" for="typeEmailX">Email</label>
            </div>

            <div class="form-outline ">
              <input type="password" id="typePasswordX" class="form-control form-control-lg" />
              <label class="form-label" for="typePasswordX">Password</label>
            </div>

          
            <div class="form-check d-flex justify-content-start ">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="form1Example3"
              />
              <label class="form-check-label" for="form1Example3"> Remember password </label>
            </div>

            <button class="btn btn-success " style={{backgroundColor:'green'}} type="submit">Login</button>

            <hr class="my-4" />
            <button class="btn btn-lg btn-block btn-primary mt-3" style={{backgroundColor:'blue'}} type="submit"><i class="fab fa-facebook-f me-2"></i>Sign in with facebook</button><br/><br/>
            <button class="btn btn-lg btn-block shadow-sm p-3 mb-5 bg-white rounded "  type="submit"><i class="fab fa-google me-2"></i> Sign in with google</button> <br/>
  
            <div><br/>
              <p class="mb-0">Don't have an account? <a href="/signup" class="signup fw-bold">Sign Up</a></p>
            </div>


          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default Login;
