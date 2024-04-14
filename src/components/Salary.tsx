import React, {useEffect, useState} from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton'
;import "./Salary.css"

const Salary = () => {
  const [currency, setCurrency] = useState("£");
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Salary', value: '1' },
    { name: 'Hourly', value: '2' },
  ];
  const handleCurrency = (eventkey) => {
    setCurrency(eventkey)
  }
  
  return (
    <div className="container">
    <div className="salary"><h3>Salary</h3>
      <ButtonGroup className="custom-button-group">
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'primary' : 'primary'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
</div>
      <InputGroup className="mb-3">
        <DropdownButton
          variant="outline-secondary"
          id="input-group-dropdown-1"
          size="sm"
          title={currency}>
          <Dropdown.Item onClick={() => handleCurrency("£")} eventKey="£">£</Dropdown.Item>
          <Dropdown.Item onClick={() => handleCurrency("$")} eventKey="$">$</Dropdown.Item>
          <Dropdown.Item onClick={() => handleCurrency("€")} eventKey="€">€</Dropdown.Item>
        </DropdownButton>
        <Form.Control aria-label="Text input with dropdown button" placeholder={radioValue == 1 ? currency+"30,000" : currency+"10.00"} />
        <InputGroup.Text>{radioValue == 1 ? "Per anum" : "Per hour"}</InputGroup.Text> 
      </InputGroup>
    </div>
  );
}

export default Salary
