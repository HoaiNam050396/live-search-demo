import React, { useState } from "react";
import { Input, Spin, Alert } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { TableUser } from "../TableUser/displayTableUser";
import useDebounce from '../../ultils/debounce'
import { loading, search } from './data/actions'
import Axios from '../../axiosApi/index'

export const Search = (props) => {
  const [textAlert, setTextAlert] = useState('')
  const [isCheckCharacter, setIsCheckCharacter] = useState('')
  const dispatch = useDispatch()

  const [isLoading, dataUsers] = useSelector((state) => [
    state.reducersSearch.isLoading,
    state.reducersSearch.data
  ])

  const handleChange = async (e) => {
    setTextAlert('')
    setIsCheckCharacter(e?.target.value)
    if (e?.target.value.length >= 3) {
      dispatch(loading(true))
      const data = await Axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(e.target.value)}`)
      const dataFetch = []
      data.data.items.map(e => {
        return dataFetch.push({ avatar: e.avatar_url, name: e.login, type: e.type, score: e.score })
      })
      dataFetch && dispatch(search(dataFetch))
        dispatch(loading(false))
    } else {
      setTextAlert('You should input at least 3 characters')
    }
  };
  return (
    <>
      <p style={{textAlign: 'center', fontSize: 'x-large'}}>Welcome!!!</p>
      <Input placeholder="Basic usage" onChange={useDebounce(e => handleChange(e))} style={{ marginTop: '30px', width: "30vw" }} />
      {isLoading ? <Spin size="large" style={{marginTop: '30vh'}}/> : !isCheckCharacter ? '' : textAlert ? <Alert
        message="Error Text"
        description="You should input at least 3 characters"
        type="error"
        style={{marginTop: '30px'}}
      /> : <TableUser data={dataUsers} />}
    </>
  )
}