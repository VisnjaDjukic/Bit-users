import React from "react"
import './UserListItem.css'
import PropTypes from 'prop-types'

const UserListItem = ({ image, name, email, birthday }) => {
    // console.log(props);
    return (
        <div className="profile">
            <img src={image} alt="images" />
            <p>Name: {name = "fali ime"}</p>
            <p>Email: {email}</p>
            <p>Date of birth: {birthday}</p>

        </div>
    )
}

UserListItem.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    birthday: PropTypes.string
}
UserListItem.defaultProps = {
    image: "https://media.mnn.com/assets/images/2018/07/cat_eating_fancy_ice_cream.jpg.838x0_q80.jpg"
}
export { UserListItem }