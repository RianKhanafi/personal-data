import React, { useReducer } from "react";
export function useUserData() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_USERS_DATA":
          return {
            ...state,
            loading: false,
            usersData: action.payload,
          };
        default:
          return state;
      }
    },
    {
      usersData: null,
      loading: false,
    }
  );

  const userdata = React.useMemo(
    () => ({
      addUserData: (payload) => {
        dispatch(
          createAction("SET_USERS_DATA", {
            name: "Rian Khanafi",
            alamat: "wsb",
          })
        );
      },
    }),
    []
  );

  function createAction(type, payload) {
    return {
      type,
      payload,
    };
  }

  console.log("state =>", state);

  return { userdata, state };
}
