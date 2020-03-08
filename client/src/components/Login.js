import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

function Login(props) {
  return (
    <div>
      <h2>Log in</h2>
      <Form>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="text" name="email" id="email" placeholder="email" value={props.email} onChange={props.handleInputChange} />
        </FormGroup>

        <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="password" value={props.password} onChange={props.handleInputChange} />
                </FormGroup>
                <Button onClick={props.handleLogin} color="primary" block>Login</Button>
                <p className="signupLink">
                    <Link to="/signup">dont have an account?  Sign up here</Link>
                    </p>
      </Form>
    </div>

  );
}

// function Login() {

//   const [userState, setUserState] = useState({
//     email: "",
//     password:"",
//     loggedIn: false,
//   });

// const [state, dispatch] = useStoreContext();

// React.useEffect(() => {
//   console.log("state", state)
// }, [state] )

//  const handleInputChangeEmail = event => {
//     const{name, value}  =  event.target
//     setUserState({
//       email:value,
//       password: ""
//    });
//  }

//  const handleInputChangePassword = event => {
//   const{name, value}  =  event.target
//   setUserState({
//     email: userState.email,
//     password: value
//  });
// }

// const handleFormSubmit = event => {
//   event.preventDefault();

//   console.log(userState.email, userState.password)
//   let loginInfo = {
//     email: userState.email,
//     password: userState.password
//   }

//     API.login(loginInfo).then(function(data){
//       console.log("response data", data.data)
//       dispatch({
//         type:LOGIN,
//         loggedIn: true
//       })
//         window.location.href="/home"
//         console.log("user state after dispatch", state)
//       })
// };

//   return (
//     <StoreProvider value={userState}>
//     <div>
//     <div className="container">
//     <div className="row">
//       <div className="col-md-6 col-md-offset-3"></div>
//       <h1>Log In</h1>
//       <form className="login">
//           <div className="form-group">
//             <Label for="username">Email</Label>
//             <input 
//               type="email" 
//               className="form-control" 
//               id="email-input" 
//               placeholder="username" 
//               name="email"
//               value={userState.email}
//               onChange={handleInputChangeEmail}
//               />

//             <label htmlFor="exampleInputPassword1">Password</label>
            
//             <input 
//               type="password" 
//               className="form-control" 
//               id="password-input" 
//               placeholder="Password" 
//               value={userState.password}
//               name="password"
//               onChange={handleInputChangePassword}
//               />
//           </div>
//           <Button 
//             className="btn btn-default" 
//             onClick={handleFormSubmit} 
//             Link to="/home">Login</Button>
//         </form>
//         <br />
//         <p className="signupLink"> <Link to="/signup">Don't have an account? Launch your account here!</Link></p>
//       </div>
//       </div>
//     </div>
//     </StoreProvider>
//   );
// };

export default Login;
