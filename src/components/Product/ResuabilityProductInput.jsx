import React from 'react'

export default function ResuabilityProductInput(props) {
  const {type,className,id,placeholder,required,autoFocus,onChange}=props;
  return (
    <React.Fragment>
      <div className="form-group mb-4">
            <label>{placeholder}</label>
            <input
              type={type}
              className={className}
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
