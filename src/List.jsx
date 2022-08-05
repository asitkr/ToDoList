import React from 'react';

function List(props) {


    const handleDelete = (id) => {
        const newArray = props.list.filter((item) => {
            // if(item !== props.list[id]){
            //     return item;
            // }

            return item !== props.list[id];
        })

        props.setList(newArray);
    }

    return (
        <>
            {
                props.list.map((item, id) => {
                    return(
                        <div className='List-wrapper'>
                            <p key={id}>{item}</p>
                            <button onClick={() => handleDelete(id)}>Delete</button>
                        </div>
                    )
                })
            }
        </>
    );
}

export default List;