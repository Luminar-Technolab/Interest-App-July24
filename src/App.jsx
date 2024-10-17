import { TextField,Stack,Button } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {

  const [interest,setInterset] = useState(0)
  const [principle,setPrinciple] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)

  const [invalidPrinciple,setInvalidPrinciple] = useState(false)
  const [invalidRate,setInvalidRate] = useState(false)
  const [invalidYear,setInvalidYear] = useState(false)

  const validateInputs = (inputTag)=>{
    console.log(typeof inputTag);
    const {name,value} = inputTag
    console.log(name, value);
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    console.log(!!value.match(/^\d*\.?\d+$/));
    if(name=="principle"){
      setPrinciple(value)
      if(!!value.match(/^\d*\.?\d+$/)){
        setInvalidPrinciple(false)
      }else{
        setInvalidPrinciple(true)
      }
    }else if(name=="rate"){
      setRate(value)
      if(!!value.match(/^\d*\.?\d+$/)){
        setInvalidRate(false)
      }else{
        setInvalidRate(true)
      }
    }else if(name=="year"){
      setYear(value)
      if(!!value.match(/^\d*\.?\d+$/)){
        setInvalidYear(false)
      }else{
        setInvalidYear(true)
      }
    }
  }

  const handleCalculate = (e)=>{
    e.preventDefault()
    console.log("inside handleCalculate");
    if(principle && rate && year){
      setInterset(principle*rate*year/100)
    }else{
      alert("Please fill the form completely!!!")
    }
  }

  const handleReset = ()=>{
    setInterset(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInvalidPrinciple(false)
    setInvalidRate(false)
    setInvalidYear(false)
  }

  return (
    <div style={{width:'100%',minHeight:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark' >
      <div style={{width:'600px'}} className='bg-light rounded p-5'> 
        <h3>Simple Interest Calculator</h3>
        <p>Calculate your simple interest Easily!</p>
        <div className="bg-warning p-3 text-light text-center rounded">
          <h1> ₹ {interest}</h1>
          <p className='fw-bolder'>Total Simple Interest</p>
        </div>
        <form className="mt-5">
          {/* principle */}
          <div className="mb-3">
            <TextField value={principle || ""} name='principle' onChange={(e)=>validateInputs(e.target)} className='w-100' id="outlined-principle" label="₹ Principle Amount" variant="outlined" />
          </div>
          {/* invalid principle */}
          { invalidPrinciple && <div className="mb-3 text-danger fw-bolder">
              Invalid Principle Amount!!!
          </div>}
           {/* Rate */}
           <div className="mb-3">
            <TextField value={rate || ""} name='rate' onChange={(e)=>validateInputs(e.target)} className='w-100' id="outlined-rate" label="Rate of Interest (%)" variant="outlined" />
          </div>
          {/* invalid rate */}
          { invalidRate && <div className="mb-3 text-danger fw-bolder">
              Invalid Rate!!!
          </div>}
           {/* Year */}
           <div className="mb-3">
            <TextField value={year || ""} name='year' onChange={(e)=>validateInputs(e.target)} className='w-100' id="outlined-year" label="Time Period (Yr)" variant="outlined" />
          </div>
          {/* invalid year */}
          { invalidYear && <div className="mb-3 text-danger fw-bolder">
              Invalid Year!!!
          </div>}
          <Stack direction="row" spacing={2}>
            <Button type='submit' onClick={handleCalculate} disabled={invalidPrinciple || invalidRate || invalidYear} variant="contained" style={{width:'50%',height:'70px'}} className='bg-dark'>CALCULATE</Button>
            <Button onClick={handleReset} style={{width:'50%',height:'70px'}} className='border border-dark text-dark' variant="outlined">RESET</Button>
          </Stack>
        </form>
      </div>
    </div>
  )
}

export default App
