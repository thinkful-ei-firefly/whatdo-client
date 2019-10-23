import React from 'react'
import './Search.css'
export default class Search extends React.Component {
  render() {
    return (
      <div className="Search">
      <h2>
      Search event near you
    </h2>
    <h3>"Have fun, be yourself ,enjoy life and stay positive" - Tatiana Maslany</h3>

        <form className='form'  onSubmit={this.handleSubmit} >
      {/**
      <div role='alert' className='alert' >
          {error && <p>{error}</p>}
        </div>
      */}
        

        <div className='form-section'>
          
          <input type="text"
          className='input'
          
            id='zipcode'
            name='zipcode'
            autoComplete='off'
            required
          />
          <label 
          className='label-name'
          htmlFor='zipcode'>
          <span className='content-name' >Enter your zipcode</span>  
          </label>
        </div>

        <div className='form-section'>
          
          <input
          type="text"
          className='input'
          
            id='mile'
            name='mile'
            autoComplete='off'
            required
          />
          <label 
          className='label-name'
          htmlFor='mile'>
          <span className='content-name' >Mile around you</span>  
          </label>
        </div>

          <div className='form-section'>
          <input
          className='input'
            type="date"
            id="date"
            name="date"
            defaultValue="2019-10-21"
            min="2019-01-01"
            max="2019-12-31"
          />
          </div>
          <h4>Select event type</h4>
          
          

          <div className='form-section checkbox__section'>

        <input type="checkbox" id='box1' name='box1' value='Concert'></input>
        <label htmlFor="box1" >Concert</label>
        <input type="checkbox" id='box2' name='box2' value='Sports'></input>
        <label htmlFor="box2" >Sports</label>
        <input type="checkbox" id='box3' name='box3' value='Museum'></input>
        <label htmlFor="box3" >Museum</label>
        <input type="checkbox" id='box4' name='box4' value='Arts'></input>
        <label htmlFor="box4" >Arts</label>
        <input type="checkbox" id='box5' name='box5' value='Bars'></input>
        <label htmlFor="box5" >Bars</label>
        <input type="checkbox" id='box6' name='box6' value='Other'></input>
        <label htmlFor="box6" >Other</label>

        </div>
       

          <div className='form-btn' >
        <button className='searchForm__btn' type='submit'>
          Search
        </button>
        </div>
        
        
        </form>
      </div>
    )
  }
}



