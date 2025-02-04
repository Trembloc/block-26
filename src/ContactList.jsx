import { useEffect, useState } from "react";

const ContactList = (props) => {
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    //get the users
    const getUsers = async () => {
      const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users`);
      const users = await response.json();
      //console.log(users);
      //store the users
      setAllUsers(users);

    }
    getUsers();
  }, []);
  return (
    <ul>
      {
        allUsers.map(({ name }) => {
          return (
            <li>{name}</li>
          )
        })
      }
    </ul>
  )
};

export default ContactList
