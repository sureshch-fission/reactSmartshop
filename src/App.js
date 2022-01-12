import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Login from "./components/loginPage";
import MainPage from "./screens/MainScreen";
import ProductDetail from "./screens/productDetailScreen";
import Cart from "./screens/cartScreen";
import PlaceOrder from "./screens/PlaceorderScreen";
import UserDetails from "./screens/userdetailsScreen";
import NotFound from "./components/Notfound";
import Footer from "./components/footer";
import { useSelector } from "react-redux";
import Header from "./components/header";
import { Container } from "react-bootstrap";
import '../src/UI/products.css'
import ProtectedRoute from "./components/protectedRoute";

function App() {

  const Products = useSelector((state) => state.Products.products);
  const isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated'));
  console.log(isAuthenticated)

  return (
    <div>
      <Router>
        
        <Header/>
        <main className="py-3">
          <Container>
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/products" exact > <ProtectedRoute component={MainPage} /></Route
              >
              <Route path="/product/:productId" exact >
                <ProtectedRoute component={ProductDetail} />
              </Route>
              <Route path="/cart" exact >
                <ProtectedRoute component={Cart} />
              </Route>
              <Route path="/placeorder" exact ><ProtectedRoute component={PlaceOrder} /></Route>
              <Route path="/userDetails" exact >
                <ProtectedRoute component={UserDetails} />
              </Route>
              <Route path="*" exact component={NotFound} />
            </Switch>
          </Container>
        </main>



      </Router>
      {Products.length === 0 ? "" : <Footer />}

    </div>
  );
}

export default App;
