import React from 'react';
import axios from 'axios';
import { Api, Search_space_Api }from './Apis';
import {InputGroup, FormControl, Button}from 'react-bootstrap';
import {AiFillCaretLeft, AiFillCaretRight}from 'react-icons/ai';
import { IconContext}from 'react-icons';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background : {},
      searchInput : '',
      buttonStyle_L : 'white',
      buttonStyle_R : 'white'
    }
  }

  componentDidMount() {
    axios.get(Api('planetary')+'&hd=true')
    .then(res => {
      this.setState({ 
        ...this.state,
        background : {
          backgroundImage : `url(${res.data.hdurl})`,
          backgroundSize : '100% 100%',
          backgroundRepeat : 'no-repeat',
          backgroundPosition : '0% 0%',
          height: '100vh',
          }}
        )
    })
  }

  handling_Button = (key) => {
    this.setState({ [key] : '#eae8e8' })
    setTimeout(() => this.setState({ [key] : 'white' }), 150)
  }
  
  Click_Search_Button = () => {
    console.log('Search_space_Api', Search_space_Api(this.state.searchInput))
    axios.get(Search_space_Api(this.state.searchInput))
    .then(res => console.log(res.data))
  }

  Write_Search_Input = (e) => {
    this.setState({
      searchInput: e.target.value 
    })
  }

  render() {
    return (
        <div className="first-search-page" style={this.state.background}>
          <IconContext.Provider value={{ className : 'carousel_Buttons'}}>
            <AiFillCaretLeft size='50' color={this.state.buttonStyle_L} onClick={()=> this.handling_Button('buttonStyle_L')}/>
          </IconContext.Provider>
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
            <IconContext.Provider value={{ className : 'carousel_Buttons'}}>
              <AiFillCaretRight  size='50' color={this.state.buttonStyle_R} onClick={()=>this.handling_Button('buttonStyle_R')}/>
            </IconContext.Provider>
        </div>
    )
  }
}

export default App;
