import React, { useState } from "react";
import { Input, Avatar } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import './search.css'

export const Search = (props) => {

  const [displayText, setDisplayText] = useState('')
  const [dataFetch, setData] = useState([])
  const [textAlert, setTextAlert] = useState('')

  const handleChange = async (e) => {
    if(e.target.value.length >= 3){
      setTextAlert('')
      setDisplayText(e.target.value)
      await fetch(`https://api.github.com/search/users?q=${e.target.value}&per_page=5`, {
        headers: new Headers({
          'Content-Type': 'application/json'
      })}).then(res => res.json()).then(data =>data.items ? setData(data.items) : setData('No data')).catch(error => console.log(error))
    }else{
      setData([])
      setTextAlert("Input enough 3 character")
    }
  };

  const text = useSelector((state) => state.reducersSearch.text)
  return (
    <>
      <p>Hello</p>
      <Input placeholder="Basic usage" onChange={e => handleChange(e)}/>
      {textAlert}
      {displayText && dataFetch && dataFetch.map(e => {
        return (
        <div className="search" style={{display: 'flex', marginTop: '30px'}}>
          <Avatar src={e.avatar_url} size="default" />
          <p style={{marginLeft: '30px'}}>{e.login}</p>
        </div>
          )
      })}
      {text}
      
    </>
  )
}