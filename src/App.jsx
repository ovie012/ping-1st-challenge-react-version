import { useState } from 'react'
import './App.css'

function App() {

  function handleError(e) {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const formDiv = document.querySelector('form div');
    const formDivInput = document.querySelector('form div input');
    if (formDivInput.value === '' || !emailRegex.test(formDivInput.value)) {
      formDiv.classList.add('active');
    } else {
      formDiv.classList.remove('active');
    }
  };

  return (
    <>
      <main>
        <h2>PING<span>.</span></h2>
        <h1>We are launching <span>soon!</span></h1>
        <h3>Subscribe and get notified</h3>
        <form>
          <div>
            <input type="text" placeholder='Your email address..' />
            <p>Please provide a valid email address</p>
          </div>
            <button onClick={handleError}>Notify Me</button>
        </form>
        <img src="/illustration-dashboard.png" alt="main image" />
        <footer>
          <div>
            <i class='bx bxl-facebook'></i>
            <i class='bx bxl-twitter'></i>
            <i class='bx bxl-instagram' ></i>
          </div>
          <p>&copy; Copyright Ping. All rights reserved.</p>
        </footer>
      </main>
    </>
  )
}

export default App
