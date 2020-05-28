import React from 'react';
import axios from 'axios';
import { Api }from './NASAapi';
import {InputGroup, FormControl, Button, Carousel}from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background : {},
      searchInput : ''
    }
  }
  componentDidMount() {
    axios.get(Api('planetary')+'&hd=true')
    .then(res => {
      this.setState({ 
        background : {
          backgroundImage : `url(${res.data.hdurl})`,
          backgroundSize : '100% 100%',
          backgroundRepeat : 'no-repeat',
          backgroundPosition : '0% 0%',
          height: '100vh'
          }}
        )
    })
  }
  
  Click_Search_Button = () => {
  }

  Write_Search_Input = (e) => {
    this.setState({
      searchInput: e.target.value 
    })
  }

  render() {
    return (
      <Carousel>
        <Carousel.Item>
        <div className="first-search-page" style={this.state.background}>
            <InputGroup className="search-input" >
              <FormControl
                value={this.state.searchInput}
                onChange={this.Write_Search_Input}
                placeholder="Search for Space News"
                />
              <InputGroup.Append>
                <Button variant="light" onClick={this.Click_Search_Button}>Search</Button>
              </InputGroup.Append>
            </InputGroup>
        </div>
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default App;
