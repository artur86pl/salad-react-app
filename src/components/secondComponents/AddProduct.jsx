import React from 'react';
import { Component } from 'react'; 
import { 
  Radio, 
  RadioGroup, 
  FormControlLabel, 
  Checkbox, 
  Input, 
  Card, 
  CardActions, 
  CardContent, 
  Button, 
  TextField
} from '@material-ui/core';

import WhatshotOutlinedIcon from '@material-ui/icons/WhatshotOutlined';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import ErrorIcon from '@material-ui/icons/Error';

class AddProduct extends Component {
  constructor (props) {
    super(props);
    this.state = {
      productType: [],
      id: null,
      name: null,
      kcl: null,
      description: null,
      type: null,
      allergen: false,
      spice: false,
    };
  };
  
  componentDidMount() {
    this.getProducts();
  };

  getProducts = () => {
    fetch("http://localhost:3200/productType")
    .then(response => response.json())
    .then(data => this.setState({productType: data}));
  };

  onChangeName = (changeEvent) => {this.setState({name: changeEvent.target.value})};

  onChangeType = (changeEvent) => {this.setState({type: changeEvent.target.value})};

  onChangeAllergen = (changeEvent) => {this.setState({allergen: changeEvent.target.checked})};

  onChangeSpice = (changeEvent) => {this.setState({spice: changeEvent.target.checked})};

  onChangeDescription = (changeEvent) => {this.setState({description: changeEvent.target.value})};

  onChangeKcl = (changeEvent) => {this.setState({kcl: changeEvent.target.value})};

  onSave = () => {
    const {type, name, allergen, description, spice, kcl} = this.state;

    const product = {
      id: this.props.products ? this.props.products.length : 0,
      name: name,
      kcl: kcl,
      description: description,
      type: type,
      allergen: allergen,
      spice: spice
    }

    this.getProducts();

    fetch("http://localhost:3200/products", {
      method: 'POST',
      header: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product)
      }
    )
    .then((response) => response.json())
    .catch((error) => {console.error('Error: ', error);});
}
  
  render() {
    const { productType } = this.state;
    const { expandPanel } = this.props;

  return (
    <Card className="margin-20">
      <CardContent>
        <h4>
          Dodaj Produkt
        </h4>

        <div className="flex-between">
          <TextField onChange={this.onChangeName} label="Nazwa Produktu" />
          <TextField onChange={this.onChangeDescription} label="Opis" />
        </div>

        <RadioGroup 
         onChange={this.onChangeType} 
         aria-label="position" 
         name="position"
         row
         id="productTypeChoose">
          <div id="productTypeChoose">
            {productType.map(item => 
              <FormControlLabel
               key={item.id}
               value={item.name}
               control={<Radio color="primary" />}
               label={item.name}
               labelPlacement="end"
              />
            )}
          </div>
        </RadioGroup>

        <div className="flex-between">
          <label>
            <Input
             onChange={this.onChangeKcl}
             inputProps={{
             defaultValue: 0,
             step: 10,
             min: 0,
             max: 500,
             type: 'number'}}
            />
              kcl 
          </label>
          <label>
            <Checkbox 
             icon={<WhatshotOutlinedIcon />} 
             checkedIcon={<WhatshotIcon />} 
             onChange={this.onChangeSpice} 
             color="primary" />
              Spice
          </label>         
          <label>
            <Checkbox 
             icon={<ErrorOutlineOutlinedIcon />} 
             checkedIcon={<ErrorIcon />} 
             onChange={this.onChangeAllergen} 
             color="primary" />
              <strong>
                Allergen
              </strong>
          </label>         
        </div>
      </CardContent>

      <CardActions>
          <Button 
           onClick={expandPanel} 
           size="small" 
           color="primary">
            Anuluj
          </Button>
          <Button 
           onClick={this.onSave} 
           size="small" 
           color="secondary">
            Zapisz
          </Button>
      </CardActions>
    </Card>
    );
  }
}

export default AddProduct;
