export const formatValue = (value: string) => {
    let numberValue = Number(value)
    if(isNaN(numberValue)) return "N/A"
    let numberOfMiles = numberValue / 1000;
    if(numberOfMiles >= 100000000) return (numberOfMiles / 100000000).toFixed(2) + "B"
    if(numberOfMiles >= 100000) return (numberOfMiles / 100000).toFixed(2) + "kM"
    if(numberOfMiles >= 1000) return (numberOfMiles / 1000).toFixed(2) + "M"
    if(numberOfMiles >= 1) return numberOfMiles.toFixed(2) + "k"
    return numberValue.toFixed(2)
}