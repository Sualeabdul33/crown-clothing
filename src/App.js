import './App.css';
import HomePage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shop/shop.component';
import {Route, Link, Switch} from 'react-router-dom'
import CollectionPreview from'./components/pages/shop/shop.component'
import Header from './components/header/header.component'
const HatPage = (props) => (
    <div>
      <h1>Hats Page</h1>
      <button onClick={() => props.history.push('/topic')}>Topic</button>
      <Link to={props.match.url}>my Link</Link>
    </div>
  
)
// const Topic = (props) => {
  
//   return <div><h1>You are in the topic page

//   {console.log(props.match.url)}
//   </h1>
  
//   </div>
// }
// const TopicParams = props => (<div>
//   <h1>You are in the topic params page</h1>
    
//   </div>)


function App() {
  return (
    <div>
    <Header/>
    <Switch>
      <Route exact={true} path='/' component={HomePage}/>
      <Route exact path='/shop' component={ShopPage}/>
    </Switch>

    
    </div>
  );
}


export default App;
