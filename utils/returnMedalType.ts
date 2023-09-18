import Colors from "../constants/Colors";

export const returnMedalType = (rankValue: number) => {
  if (rankValue < 10) return { medal: "🥇", color: Colors.goldColor };

  if (rankValue < 100) return { medal: "🥈", color: Colors.silverColor };

  return { medal: "🥉", color: Colors.bronzeColor };
};
