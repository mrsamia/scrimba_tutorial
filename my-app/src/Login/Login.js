import React, { useState } from "react";
import "./login.css";
import sideImg from "./side.png";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";

function Login(props) {
  const[icon,setIcon]=useState(true)
  const[show,setShow]=useState(true)
  // const[username,setUsername]=useState("")
  // function usernameHandler(){
  //   setUsername(!username)
  // }
  // {username.length>=0?"form-control form-control-bg-red":"form-control form-control-bg-blue"}
  function clickIcon(){
    setIcon(!icon);
    setShow(!show);
  }
  return (
    <div className="bg vh-100 d-flex align-items-center">
      <div className="container pt-5 pb-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="bg-white rounded-3 shadow-lg">
              <div className="row pt-5 pb-sm-0 pb-md-5">
                <div className="col-sm-12 col-md-6 pt-4 pb-4">
                  <div>
                    <h3 className="text-center">Hi, Welcome Back!</h3>
                  </div>
                  <form className="ps-lg-5 pb-sm-0 ps-sm-4 pe-sm-4 pt-3 padding">
                    <div className="mb-3">
                      <label className="form-label font">Username</label>
                      <input type="email" className="form-control" placeholder="Enter Your email or Phone Number" />
                    </div>


                    <div className="mb-1 ">
                      <label className="form-label font">Password</label>
                     <div className="p-relative">
                     <input type={show ?"password":"text"} className="form-control font-sm"  placeholder="Enter Your Password" />
                      {icon? <BsFillEyeSlashFill className="eye-icon" onClick={clickIcon}/>:
                      <AiFillEye className="eye-icon" onClick={clickIcon}/>}
                     </div>
                    </div>


                    <div className="d-flex justify-content-between pb-3">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="exampleCheck1"
                        />
                        <label class="form-check-label font-sm" for="exampleCheck1">
                          Remember me
                        </label>
                      </div>
                      <div>
                        <p className="font-sm hover">Forgot Password?</p>
                      </div>
                    </div>

                    <button type="submit" className="btn sign-in-btn w-100">
                      Sign in
                    </button>
                  </form>
                </div>
                <div className="col-sm-12 col-md-6 pt-4  pb-4 ps-lg-0">
                  <img src={sideImg} alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
