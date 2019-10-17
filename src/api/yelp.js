import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization:
            "Bearer myNZDZOpV3R0u5XnTPauZ5FILRtg5pN0eMoLpGWUL-A6Iy5tECkG6Hy-gZ6AZhLq1crxjw0gsQsU8X91XSD8B8F5khzfj3XVer-8FHBJ9Ofl3OD1RYHZjU3TuImoXXYx"
    }
});
