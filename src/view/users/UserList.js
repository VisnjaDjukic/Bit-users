import React from "react"
import { UserListItem } from "./UserListItem"
//import { UserCard } from "./UserCard"
import "./UserList.css"


const UserList = (props) => {

    const userList = props.list.map((user, i) => {
        const date = new Date(user.birthday).toLocaleDateString("en-GB").split("/").join(".");
        return <UserListItem key={i} name={user.name} image={user.image.thumbnail} email={user.email} birthday={date + "."} />
    })
    return userList;
}

export { UserList }