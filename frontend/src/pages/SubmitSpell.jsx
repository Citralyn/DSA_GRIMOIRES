import Button from '@mui/material/Button';
import Container from "react-bootstrap/Container"

import React from "react" 
import { useState, useEffect } from "react"

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

export default function SubmitSpell() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [timeComp, setTimeComp] = useState("");
    const [timeCompDesc, setTimeCompDesc] = useState("");
    const [spaceComp, setSpaceComp] = useState("");
    const [spaceCompDesc, setSpaceCompDesc] = useState("");
    const [imageURL, setImageURL] = useState("");

    async function submitToDatabase() {
      try {
        const response = await fetch("http://localhost:3003/submitSpell", {
            method: "POST",
            credentials: "include",
            headers: {
            "Access-Control-Allow-Credentials": true,
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: title,
              description: description,
              timeComp: timeComp,
              timeCompDesc: timeCompDesc,
              spaceComp: spaceComp,
              spaceCompDesc: spaceCompDesc,
              imageURL: imageURL
            })
        })

        if (response.ok) {
            const data = await response.text();  
            console.log(`RESPONSE FROM API: ${data}`); 
        }

    } catch (error) {
      console.log(error.message); 
    }
    }

    return(
        <div id="spell-submitter" className='text-center'>
          <div style={{height: "5vh"}}></div>
          
          <Container className='bg-light shadow rounded'>
            
          <div style={{height: "5svh"}}></div>
            <SubmissionForm
              changeTitle={setTitle}
              changeDesc={setDescription}
              changeTime={setTimeComp}
              changeTimeDesc={setTimeCompDesc}
              changeSpace={setSpaceComp}
              changeSpaceDesc={setSpaceCompDesc}
              changeImg = {setImageURL}
            />
            <div style={{height: "5vh"}}></div>
            <Button onClick={submitToDatabase}>Submit Spell</Button>
            <div style={{height: "5vh"}}></div>
            </Container>
            <div style={{height: "5vh"}}></div>
         
          
        </div>
    )
}



function SubmissionForm({changeTitle, changeDesc, changeTime, 
  changeTimeDesc, changeSpace, changeSpaceDesc, changeImg}) {
    return(
        <Container className='text-center'>
            <h1>Submit a Spell</h1>
            <p>Have a spell (problem and corresponding solution) to submit? Submit it here</p>
        <TextField
        label="Title"
        id="outlined-start-adornment"
        onChange={(e) => {changeTitle(e.target.value)}}
        required
        sx={{ m: 1, width: '80vw' }}
        slotProps={{
          input: {
          },
        }}
      />

      <TextField
        label="Description"
        id="outlined-start-adornment"
        onChange={(e) => {changeDesc(e.target.value)}}
        required
        sx={{ m: 1, width: '80vw' }}
        slotProps={{
          input: {
          },
        }}
      />  


 

    <FormControl>
      <FormLabel required id="demo-row-radio-buttons-group-label">Time Complexity</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={(e) => {changeTime(e.target.value)}}
      >
        <FormControlLabel value="constant" control={<Radio />} label="O(1)" />
        <FormControlLabel value="logn" control={<Radio />} label="O(log N)" />
        <FormControlLabel value="n" control={<Radio />} label="O(N)" />
        <FormControlLabel value="nlogn" control={<Radio />} label="O(N log N)" />
        <FormControlLabel value="nsquared" control={<Radio />} label="O(N^2)" />
        <FormControlLabel value="2powern" control={<Radio />} label="O(2^N)" />
        <FormControlLabel value="nfactorial" control={<Radio />} label="O(N!)" />
        <FormControlLabel value="other" control={<Radio />} label="Other (specify below)" />
      </RadioGroup>
    </FormControl>

    <TextField
        label="Time Complexity Explanation (optional)"
        onChange={(e) => {changeTimeDesc(e.target.value)}}
        id="outlined-start-adornment"
        sx={{ m: 1, width: '80vw' }}
        slotProps={{
          input: {
          },
        }}
      />

    <FormControl>
      <FormLabel required id="demo-row-radio-buttons-group-label">Space Complexity</FormLabel>
      <RadioGroup
        onChange={(e) => {changeSpace(e.target.value)}}
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="constant" control={<Radio />} label="O(1)" />
        <FormControlLabel value="logn" control={<Radio />} label="O(log N)" />
        <FormControlLabel value="n" control={<Radio />} label="O(N)" />
        <FormControlLabel value="nlogn" control={<Radio />} label="O(N log N)" />
        <FormControlLabel value="nsquared" control={<Radio />} label="O(N^2)" />
        <FormControlLabel value="2powern" control={<Radio />} label="O(2^N)" />
        <FormControlLabel value="nfactorial" control={<Radio />} label="O(N!)" />
        <FormControlLabel value="other" control={<Radio />} label="Other (specify below)" />
      </RadioGroup>
    </FormControl>

    <TextField
        label="Space Complexity Explanation (optional)"
        onChange={(e) => {changeSpaceDesc(e.target.value)}}
        id="outlined-start-adornment"
        sx={{ m: 1, width: '80vw' }}
        slotProps={{
          input: {
          },
        }}
      />

    <TextField
        label="Image URL (optional)"
        onChange={(e) => {changeImg(e.target.value)}}
        id="outlined-start-adornment"
        sx={{ m: 1, width: '80vw' }}
        slotProps={{
          input: {
          },
        }}
      />
      </Container>
    )
}
