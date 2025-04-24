import React, { FC, useState } from 'react'

interface FilterProps {
    onFilter:(filter:string) => void
}

const Filter: React.FC<FilterProps> = ({onFilter}) => {

    const [searchItem,setSearchItem] = useState();

    const handelChange = (e:React.ChangeEvent) => {
        setSearchItem(e.target.value);
        onFilter(e.target.value);



    }
  return (
    <div>
        <input type="text" value={searchItem} placeholder='search item here' onChange={handelChange} />
    </div>
  )
}

export default Filter