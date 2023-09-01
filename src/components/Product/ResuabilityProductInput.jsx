import React from 'react'

export default function ResuabilityProductInput(props) {
  const {type,classNameInput,id,placeholder,required,autoFocus,onChange,label}=props;
  return (
    <React.Fragment>
      <div className="form-group mb-4">
            <label>{label}</label>
            <input
              type={type}
              className={classNameInput}
              id={id}
              name={id}
              placeholder={placeholder}
              required={required}
              autoFocus={autoFocus}
              onChange={onChange}
            />
          </div>
    </React.Fragment>
  ) 
}
