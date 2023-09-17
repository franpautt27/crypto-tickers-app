import Colors from "../constants/Colors";

export const returnMedalType = (rankValue: number) => {
  if (rankValue < 10) return { medal: "🥇", color: Colors.dark.goldColor };

  if (rankValue < 100) return { medal: "🥈", color: Colors.dark.silverColor };

  return { medal: "🥉", color: Colors.dark.bronzeColor };
};
