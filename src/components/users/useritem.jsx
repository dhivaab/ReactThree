import React from 'react';

const UserItemComponent = (props) => {
    return (
        <div>
            <div>
                <h5 >{props.user.name}</h5>
                <h6 >{props.user.email}</h6>
                <p >{props.user.address.city}</p>
            </div>
        </div>
    )
}

export default UserItemComponent;