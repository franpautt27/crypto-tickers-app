import { TICKERS_TESTING_DATA } from "../../data/TICKERS_TESTING_DATA";
import { fetchTickers } from "../../services/tickers";
import api from "../../services/api";

describe("fetchTickers()", () => {
  it("should fetch successfully the tickers data from API", async () => {
    const expectedResponseFromApiGet = {
      data: {
        data: TICKERS_TESTING_DATA,
        info: {
          coins_num: 1969,
          time: 1538560355,
        },
      },
    };
    // to mock the function
    jest.spyOn(api, "get").mockResolvedValue(expectedResponseFromApiGet);

    const result = await fetchTickers({});

    expect(result).toEqual(expectedResponseFromApiGet.data);
  });
});
