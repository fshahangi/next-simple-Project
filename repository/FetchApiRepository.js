import constants from "@/configuration/Constants.json";

export const GET = (url) => {
  return fetch(`${constants.REST_API_ADDRESS}${url}`);
};
