import React from 'react';

function List({list=[]}) {
    return list.length > 0 ? <ul>
        {
            list.map((item, index) => <li key={index}>{item}</li>)
        }
    </ul> : null;
}

export default List;