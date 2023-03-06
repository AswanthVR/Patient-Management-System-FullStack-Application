import React, { Component } from "react"; 
import { Link } from "react-router-dom";
import "./Login.css";
  

function Login() {
  return (
	<div>
		<div class="login-container">
	<form action="" class="form-login">
		<ul class="login-nav">
			<li class="login-nav__item active">
				<a href="#">Sign Up</a>
			</li>

		</ul>
		<label for="login-input-user" class="login__label">
			User Name
		</label>
		<input id="login-input-user" class="login__input" type="text" />
		<label for="login-input-user" class="login__label">
			E-mail
		</label>
		<input id="login-input-user" class="login__input" type="email" />
		<label for="login-input-password" class="login__label">
			Password
		</label>
		<input id="login-input-password" class="login__input" type="password" />
		<label for="login-sign-up" class="login__label--checkbox">
			<input id="login-sign-up" type="checkbox" class="login__input--checkbox" />
			Keep me Signed in
		</label>
		<button class="login__submit" disabled><Link to="/home" style={{textDecoration:"nome",color:"white" , textUnderlineOffset:"none"}}>Sign Un</Link></button>
	   
	</form>
	 
</div>
	</div>
  )
}

export default Login