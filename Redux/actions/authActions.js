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
  const carUserInfo = info => {
    return {
      type: "carUser_Info",
      info
    };
  };
  const updateShowRoomInfoData = info => {
    return {
      type: "ShowRoomInfo_Data",
      info
    };
  };
  const updateCarCount = info => {
    return {
      type: "updateCarCount_Data",
      info
    };
  };
  export { updateUser,updatePropInfo,updateRoomInfo,carUserInfo,updateShowRoomInfoData,updateCarCount };