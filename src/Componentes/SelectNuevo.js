import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import 'react-select/scss/default.scss';

class SelectNuevo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      SelectedOption: '',
    }
  }
  handleChange = (selectedOption) => {
    if(!selectedOption){
     
      this.setState({ SelectedOption: null,
      });
      
    }else{
      this.setState({ SelectedOption: selectedOption,
    });
    }
    
    
    this.props.Opcion(selectedOption);

    //console.log(selectedOption);
  }
  render() {
  
    return (
      <Select
        name="form-field-name"
        value={this.state.SelectedOption}
        onChange={this.handleChange}
        options={this.props.listado}
      ></Select>
    );
  }
}

export default SelectNuevo;