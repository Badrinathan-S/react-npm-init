import axios from "axios";
import baseUrl from "../../../baseUrl";

export const postThunk = () => async (dispatch, getState) => {
  dispatch({ type: "POST_REQUEST" });
  await axios
    .get(`${baseUrl}/posts`)
    .then((res) => {
      let data = res.data;
      dispatch({
        type: "POST_SUCCESS",
        payload: data.filter((post) => post.id <= 20),
      });
    })
    .catch((e) => {
      console.log(e);
      dispatch({ type: "POST_FAILURE" });
    });
};
