const updateUser = user => {
    return {
      type: "UPDATE_USER",
      user
    };
  };
  
  const updatePropInfo = info => {
    return {
      type: "updateProp_Info",
      info
    };
  };
  const updateRoomInfo = info => {
    return {
      type: "updateRoom_Info",
      info
    };
  };
  
  export { updateUser,updatePropInfo,updateRoomInfo };