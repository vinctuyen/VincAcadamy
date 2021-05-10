import CallAPI from "./request.js";
import MODULE from "./constAPI";

const getNameUser = (params) => {
  let service = CallAPI(
    params.store,
    params.url,
    params.token,
    params.cookies,
    params.router
  );
  let data = params.data;
  return service({
    url: MODULE.GET_NAME,
    method: "GET",
    params: data,
  });
};

export { getNameUser };
