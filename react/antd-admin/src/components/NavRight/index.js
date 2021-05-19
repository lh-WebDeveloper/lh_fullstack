import React, { useState, useEffect } from 'react';
import { Tag, Button, Divider } from 'antd';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './index.css';
const NavRight = () => {
  const [tagList, setTagList] = useState([])
  const getTagAPIList = () =>{
    axios
      .get('/tags')
      .then(res => {
        setTagList(res.data.tags.result)
      })
  }
  useEffect(() => {
    getTagAPIList()
  }, [])
  const renderRight = (data) => {
    return data.map(item => {
      if (item.list) {
        return (
          <div key={item.classid}>
            <Divider orientation="left" key={item.classid}>{item.name}</Divider>
            <div className="rightTag">
              {renderRight(item.list)}
            </div>
          </div>
        )
      }
      return <Tag color="red" key={item.classid}>{item.name}</Tag>
    })
  }
  const tagsRight = renderRight(tagList);
  return (
    <>
      <div className="rightTag">
        <strong className="text">热门标签</strong>
        <NavLink to="/search">
          <Button type="link">
            更多
          </Button>
        </NavLink>
      </div>
      {
        tagsRight
      }
    </>
  );
}
export default NavRight;
