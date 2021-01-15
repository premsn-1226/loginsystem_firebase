import { Container } from "react-bootstrap";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
import Login from './Login';
import AuthProvider  from '../contexts/AuthContext'
import{BrowserRouter ,Switch, Route} from 'react-router-dom'
import PrivateRoute from "./PrivateRoute";
import Forgot from './Forgot'
import Newlogin from "./Newlogin";
function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
      <div className="w-100" style={{maxWidth: "450px"}}>
        <BrowserRouter>
          <AuthProvider>
            <Switch>
              <Route exact path="/" component={Newlogin}></Route>
              <PrivateRoute  path="/dashboard" component={Dashboard}></PrivateRoute>
              <Route path="/signup" component={SignUp}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/forgot-password" component={Forgot}></Route>
            </Switch>
          </AuthProvider>
          </BrowserRouter>
      </div>
    </Container>
  );
}

export default App;
