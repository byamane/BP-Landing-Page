import './Donate.css'

const Donate = (props) => {
  return (
    <div id="donate-container">
      <h2>DONATE TO SUPPORT SAMANTHA'S CAMPAIGN</h2>
      <div className='donate-buttons'>
        <button>
          $25
        </button>
        <button>
          Other
        </button>
      </div>
      <div className='donate-buttons'>
        <button>
          $50
        </button>
        <button>
          $100
        </button>
      </div>
    </div>
  )
}

export default Donate;