import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main>
      <section id='left-bar'>
        <div className='name-block'>block one</div>
        <div className='contacts-block'>block two</div>
        <div className='summary-block'>block three</div>
      </section>
      <section id='right-bar'>
        im the right bar woo
      </section>
    </main>
  </React.StrictMode>,
)
