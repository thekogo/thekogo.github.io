import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import NavBar from './navbar';
import Posts from './posts';

function App() {
  return (
    <div>
      <AppBar color="primary" position="static">
        <Toolbar>
          <TypoGraphy variant="title"
            color="inherit"
          >
            My header
          </TypoGraphy>
          <NavBar />
        </Toolbar>
      </AppBar>
      <Posts />
    </div>
  );
}

export default App;
