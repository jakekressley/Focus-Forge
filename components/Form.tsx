import React from 'react'

const Form = () => {
  return (
    <div className="bg-transparent --border">
      <img src="" alt="" />
      <form id="form" noValidate>
        <h2>Login</h2>
        <div className="--form-control">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter email" className="--input-gradient w-[50%]"/>
        </div>
      </form>
    </div>
  )
}

export default Form
