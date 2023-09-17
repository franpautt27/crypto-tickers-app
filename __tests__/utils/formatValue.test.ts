import { formatValue } from "../../utils/fomatValue"

it("should return a formatted k-number string for values >= 1000",()=>{
    //Arrange
    const input = "26572"
    const expectedOutput = "26.57k"

    //Act
    const receivedOutput = formatValue(input)

    //Assert
    expect(receivedOutput).toBe(expectedOutput)
})

it("should return a formatted single string for values < 1000",()=>{
    //Arrange
    const input = "0.489999"
    const expectedOutput = "0.49"

    //Act
    const receivedOutput = formatValue(input)

    //Assert
    expect(receivedOutput).toBe(expectedOutput)
})

it("should return a formatted M-number string for values >= 1000000",()=>{
    //Arrange
    const input = "7429039.58"
    const expectedOutput = "7.43M"

    //Act
    const receivedOutput = formatValue(input)

    //Assert
    expect(receivedOutput).toBe(expectedOutput)
})