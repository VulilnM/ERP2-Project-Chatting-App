import React, { useEffect, useState } from "react";
import { Avatar, useChatChannel, useChatContext } from "stream-chat-react";
import { InviteIcon } from "../assets";

const ListContainer = (children) => {
  return (
    <div className="user-list__container">
      <div className="user-list__header">
        <p>User</p>
        <p>invite</p>
      </div>
    </div>
  );
};

const UserItem = () => {
  return (
    <div className="user-item__wrapper">
      <div className="user-item__name-wrapper">
        <Avatar />
      </div>
    </div>
  );
};

const UserList = () => {
  const { client } = useChatContext();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [listEmpty, setListEmpty] = useState(false);
  
  useEffect(() => {
    const getUsers = async () => {
      if (loading) return;
      setLoading(true);

      try {
        const response = await client.queryUsers(
          //return all users except from self ne = not equal
          { id: { $ne: client.userId } },
          { id: 1 }, //sort
          { limit: 8 } //limit users
        );

        if (response.users.length) {
          setUsers(response.users);
        } else {
          setListEmpty(true); //declare
        }
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };

    if (client) getUsers();
  }, []);

  return (
    <ListContainer>
      {loading ? (
        <div className="user-list__message">Loading users ...</div>
      ) : (
        users?.map((user, i) => (
          <UserItem 
          index = {i}
          key={user.id}
          user={user}
          />
        ))
      )}
    </ListContainer>
  );
};

export default UserList;
