import React from "react";
import Users from "../../components/user/Users";
function UsersPage () {
  const users = ["Dastan", "   Emir", "   Elina"]
  
  const user = {
    name: "Dastan",
    age: "21",
    position: "Front-end dev"
  }
  return(
    <div>
      <h1>Список пользователей</h1>
      <Users usersProps={users} user={user}/>
      
    </div>
  )
}
export default UsersPage;