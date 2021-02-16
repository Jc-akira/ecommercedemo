import React from 'react';
const Contact = () => {
    return(
      <div className="contfrm">
     <h1>Contact Page</h1>
     <form>
    <input type="text" placeholder="Name"></input><br/>
    <input type="email" placeholder="Email"></input><br/>
    <input type="text" placeholder="Password"></input><br/>
    <button type="submit">Submit</button>
     </form>
     </div>
    );
  };
  
  export default Contact;