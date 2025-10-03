import qs from "qs";

const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";

/**
 * Fetches data from the Strapi API
 * @param path - The path to fetch from
 * @param urlParamsObject - The URL parameters object
 * @param options - The options object
 * @returns The response from the API
 */
export async function fetchApi(
  path: string,
  urlParamsObject = {},
  options = {}
) {
  try {
    // Merge default and user options
    const mergedOptions = {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    };

    // Build request URL
    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${STRAPI_URL}/api/${path}${
      queryString ? `?${queryString}` : ""
    }`;

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`
    );
  }
}
