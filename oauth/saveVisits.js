//important------> This file contains updating of the visits collections

const Visits = require("./models/Visits");
const saveVisits = async ({ type: visitType }) => {
  let visits = await Visits.findOne({ visitId: "visitID" });
  const { impressions, numOfSignUps, numOfLogins, numOfLogouts } = visits;
  // console.log(visits);
  switch (visitType) {
    case "impressions": {
      const newImpression = impressions + 1;
      //await Visits.updateOne({ visitId: "visitID" }, { impressions: newImpression });
      break;
    }
  }
};

module.exports = { saveVisits };


//  "engines": {
//     "node": ">=14"
//   }