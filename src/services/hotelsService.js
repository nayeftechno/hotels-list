import { api } from "./api";
const hotelsService = {
  getHotels() {
    try {
      const url = "/5eb8fcb12d0000d088357f2a";
      return new Promise((resolve, reject) => {
        api
          .get(url)
          .then(({ data }) => {
            resolve({ hotels: eval(data) });
          })
          .catch((error) => {
            reject({ error });
          });
      });
    } catch (error) {
      console.error(error);
    }
  },
};
export { hotelsService };
