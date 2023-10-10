import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { cardAction } from "../store/slice/card";
import { drawerAction } from "../store/slice/drawerSlide";
 
const allActions = {
    ...cardAction,
    ...drawerAction
}

export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(allActions, dispatch)
}