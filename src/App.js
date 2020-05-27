import React from 'react';
import axios from 'axios';
import { Api }from './NASAapi';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background : {}
    }
  }
  componentDidMount() {
    axios.get(Api('planetary')+'&hd=true')
    .then(res => {
      console.log("res", res.data);
      this.setState({ 
        background : {
          backgroundImage : `url(${res.data.hdurl})`,
          backgroundSize : 'cover',
          height: '790px',
          backgroundRepeat : 'no-repeat',
          backgroundPosition : 'center center'
          }}
        )
    })
  }
  

  render() {
    console.log("state", this.state.background)
    return (
      <div style={this.state.background}>
        <form>
          <input input="search"/>
        </form>
      </div>
    )
  }
}

export default App;
