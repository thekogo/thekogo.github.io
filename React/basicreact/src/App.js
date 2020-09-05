import React from 'react';
import './App.css';
import Lab132 from './Lab132.js';
import PersonComponent from './PersonComponent.js'
import MovieComponent  from './MovieComponent.js'

const obj = {
  one: function one() {
    return <div>This is one</div>
  },
  two: function two(props) {
    return <div style={{ color: props.color }}>this is two with color {props.color}</div>
  },
  three: function three() {
    return React.createElement('Three', {}, 'This is three');
  }
}

const Lab128 = function Lab128(props) {
  const {str, num, bool, arr, obj} = props;
  return (
    <div>
      this is str = {str}<br/>
      this is num = {num}<br/>
      this is bool = {bool}<br/>
      this is arr = {arr.map( item => `${item} `)}<br />
      this is obj = {obj.name}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      {/* Lab Page 124 */}
      {React.createElement('h1', {}, 'React Create Element')}
      <h1>HTML</h1>
      {React.createElement('Hello', { firstName: "Ponlawat" }, 'Hello World')}
      {/* End Lab 124 */}

      <hr/>

      {/* Lab Page 126 */}
      <obj.one />
      <obj.two color='blue'/>
      <obj.three/>
      {/* End Lab 126 */}

      <hr/>

      {/* Lab Page 128 */}
      <Lab128 str="string is here" num="20" bool={true} arr={["item1", "item2"]} obj={{name: "Ponlawat", lastname: "Suparat"}} />
      {/* End Lab 128 */}

      <hr/>

      {/* Lab Page 132 */}
      <Lab132 />
      {/* End Lab 132 */}

      <hr/>

      {/* Lab Page 134 */}
      <PersonComponent displayName="Ponlawat Suparat" workPlace="KMUTT University" imgUrl="https://scontent.fbkk22-2.fna.fbcdn.net/v/t1.0-9/86935025_2731483173625241_4210423931384889344_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=nLr-UEwtJaMAX_Pfe4Z&_nc_oc=AQn0Bg6ysqW2fl8IbxJbxVxgs3hdFxZ1qEXrew8JgnLk6usHLdghykuynL8sYTOsq3OdwgwVngp-2uFe9MrJoUIT&_nc_ht=scontent.fbkk22-2.fna&oh=6800298728dc178ea1c527e219f5aa42&oe=5F73F17B" />
      {/* End Lab 134 */}

      <hr/>

      {/* Lab Page 139 */}
      <MovieComponent />
      {/* End Lab 139 */}

    </div>
  );
}

export default App;
