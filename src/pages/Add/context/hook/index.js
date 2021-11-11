import React, { useReducer } from "react";
export function useUserData() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_ACTIVE_TABS":
          return {
            ...state,
            activetab: action.payload,
          };
        default:
          return state;
      }
    },
    {
      activetab: "datadiri",
    }
  );

  const userdata = React.useMemo(
    () => ({
      setActiveTab: (payload) => {
        const tabsSection = ["datadiri", "education", "experiance", "skills"];
        const activeIndex = tabsSection.indexOf(payload);
        const selected = tabsSection[activeIndex + 1];
        dispatch(createAction("SET_ACTIVE_TABS", selected));
      },
      setPrevTab: (payload) => {
        const tabsSection = ["datadiri", "education", "experiance", "skills"];
        const activeIndex = tabsSection.indexOf(payload);
        const selected = tabsSection[activeIndex - 1];
        dispatch(createAction("SET_ACTIVE_TABS", selected));
      },
      setBulletData: (payload) => {
        dispatch(createAction("SET_ACTIVE_TABS", payload));
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

  return { userdata, state };
}
