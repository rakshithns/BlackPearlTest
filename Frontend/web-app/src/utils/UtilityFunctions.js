export default function getLocationAvgTempertaure (locationData, temperature) {
    let value = 0;
    if (locationData) {
        const sum = locationData.timeLines.daily.reduce((a, c) => a + c.values[temperature], 0);
        const totalEntries = locationData.timeLines.daily.length;
        value = (sum/totalEntries).toFixed(2);
    }
    return value;
}