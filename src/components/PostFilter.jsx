import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

function PostFilter({filter, setFilter}){

    return (
    <div>
        <MyInput placeholder="поиск..."
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}/>
        <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue="Сортировка"
        options={[
          {value: 'title', name: 'По значению'},
          {value: 'body', name: 'По описанию'}
        ]}/>
    </div>
    )
}

export default PostFilter