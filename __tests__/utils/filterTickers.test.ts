import { TICKERS_TESTING_DATA } from "../../data/TICKERS_TESTING_DATA";
import { Ticker } from "../../interfaces/tickerInterfaces";
import { filterTickersByNameOrId } from "../../utils/filterTickers";

describe("filterTickersByNameOrId()", () => {
  it("should filter correctly by name value", () => {
    //Arrange
    const searchTerm = "bitc";
    const arrayForSearch = TICKERS_TESTING_DATA;
    const expectedOutput = arrayForSearch.filter((ticker) =>
      ticker.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    //Act
    const output = filterTickersByNameOrId(searchTerm, arrayForSearch);

    //Assert
    expect(output).toEqual(expectedOutput);
  });

  it("should filter correctly by id value", () => {
    //Arrange
    const searchTerm = "90";
    const arrayForSearch = TICKERS_TESTING_DATA;
    const expectedOutput = [
      arrayForSearch.find((ticker) => ticker.id === searchTerm),
    ];

    //Act
    const output = filterTickersByNameOrId(searchTerm, arrayForSearch);

    //Assert
    expect(output).toEqual(expectedOutput);
  });

  it("should return an empty array if a non-existent name or id is provided", () => {
    //Arrange
    const arrayForSearch = TICKERS_TESTING_DATA;
    const nameSearchTerm = "Hello";
    const expectedOutputByName: Ticker[] = []
    const idSearchTerm = "99999"
    const expectedOutputById: Ticker[] = [];

    //Act
    const outputByName = filterTickersByNameOrId(nameSearchTerm, arrayForSearch);
    const outputById = filterTickersByNameOrId(idSearchTerm, arrayForSearch);

    //Assert
    expect(outputByName).toEqual(expectedOutputByName);
    expect(outputById).toEqual(expectedOutputById);
  });
});
