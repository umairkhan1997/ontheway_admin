const initial_state = {
    user: null,
    propInfo: null,
    RoomInfo: null,
    carUserInfoProp:null,
    ShowRoomInfoDataProp:null,
    updateCarCountDataProp:null
  };
  
  const reducer = (state = initial_state, action) => {
    switch (action.type) {
      case "UPDATE_USER": {
        return { ...state, user: action.user };
      }
      case "updateProp_Info": {
        return { ...state, propInfo: action.info };
      }
      case "updateRoom_Info": {
        return { ...state, RoomInfo: action.info };
      }
      case "carUser_Info": {
        return { ...state, carUserInfoProp: action.info };
      }
      case "ShowRoomInfo_Data": {
        return { ...state, ShowRoomInfoDataProp: action.info };
      }
      case "updateCarCount_Data": {
        return { ...state, updateCarCountDataProp: action.info };
      }
      default: {
        return state;
      }
    }
  };
  
  export default reducer;