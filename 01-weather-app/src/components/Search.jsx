import React from "react";
import { AsyncPaginate } from 'react-select-async-paginate'
import React, { useState } from 'react'

const Search = (handleOnChange) => {

const [search, setSearch] = useState([])



    return (
        <>
            <AsyncPaginate
                className="h-10 rounded-lg p-2"
                placeholder="Search for city..."
                debounceTimeout={1000}
                value={search}
                onChange={handleOnChange}
                loadOptions={loadOptions}
            />
        </>
    );
};

export default Search;
