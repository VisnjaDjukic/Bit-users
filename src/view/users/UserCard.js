import React from "react"
import './UserCard.css'
const UserCard = (props) => {

    return (
        <div className="card col-3">
            <img className="card-img-top" src={props.image} alt="images" />
            <div className="card-body">
                <p className="card-text">Name: {props.name}</p>
                <p className="card-text">Email: {props.email}</p>
                <p className="card-text">Date of birth: {props.birthday}</p>
            </div>
        </div>
    )
}
export { UserCard }