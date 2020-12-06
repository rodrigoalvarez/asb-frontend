import React, { useState } from 'react';

interface Props {
  userName: string;
}

const FormComponent: React.FunctionComponent<Props> = ({userName}) => {
  const [number, setNumber] = useState('');
  const [CVC, setCVC] = useState('');
  const [expires, setExpires] = useState('');

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(number, CVC, expires);
    setNumber('');
    setCVC('');
    setExpires('');
    e.preventDefault();
  };

  return (
    <form className="form-component" onSubmit={(e) => submit(e)}>
      <h2 className="form-title">Welcome {userName}</h2>
      <div className="form-field">
        <div className="form-field-label">Credit card number</div>
        <input 
          value={number} 
          onChange={(e) => setNumber(e.target.value)} 
          type="number" />
      </div>
      <div className="form-field left">
        <div className="form-field-label">CVC</div>
        <input 
          value={CVC} 
          onChange={(e) => setCVC(e.target.value)} 
          type="number" 
          max="999" 
          min="0" />
      </div>
      <div className="form-field right date">
        <div className="form-field-label">Expiry date</div>
        <input 
          value={expires} 
          onChange={(e) => setExpires(e.target.value)} 
          type="date" />
      </div>
      <button 
        type="submit" 
        disabled={!number || !CVC || !expires} 
        className="form-field-button">
          Submit
        </button>
    </form>
  );
}

export default FormComponent;
