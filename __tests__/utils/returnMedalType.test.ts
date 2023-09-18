import Colors from "../../constants/Colors";
import { returnMedalType } from "../../utils/returnMedalType";

it("should return the correct medal type according to the rank value", () => {
    //Arrange
    const inputRankValueGold = 4;
    const expectedOutputGold = { medal: "🥇", color: Colors.goldColor }

    const inputRankValueSilver = 40;
    const expectedOutputSilver = { medal: "🥈", color: Colors.silverColor }

    const inputRankValueBronze = 400;
    const expectedOutputBronze = { medal: "🥉", color: Colors.bronzeColor }

    //Act
    const outputGold = returnMedalType(inputRankValueGold)
    const outputSilver = returnMedalType(inputRankValueSilver)
    const outputBronze = returnMedalType(inputRankValueBronze)

    //Assert
    expect(outputGold).toEqual(expectedOutputGold)
    expect(outputSilver).toEqual(expectedOutputSilver)
    expect(outputBronze).toEqual(expectedOutputBronze)

})