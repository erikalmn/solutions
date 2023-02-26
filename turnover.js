const turnoverSP = 67836.43;
const turnoverRJ = 36678.66;
const turnoverMG = 29229.88;
const turnoverES = 27165.48;
const turnoverOthers = 19849.53;

const turnoverAll = turnoverSP + turnoverRJ + turnoverMG + turnoverES + turnoverOthers;

const percentageSP = (turnoverSP / turnoverAll) * 100;
const percentageRJ = (turnoverRJ / turnoverAll) * 100;
const percentageMG = (turnoverMG / turnoverAll) * 100;
const percentageES = (turnoverES / turnoverAll) * 100;
const percentageOthers = (turnoverOthers / turnoverAll) * 100;

console.log(`Percentage of each state:
SP: ${percentageSP}%
RJ: ${percentageRJ}%
MG: ${percentageMG}%
ES: ${percentageES}%
Others: ${percentageOthers}%`);
