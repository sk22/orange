import { getDayFormatted } from "./utils"

// import daily from '../mock-api-data/2021-04-05.json'
// import current from '../mock-api-data/current_with-song.json'

const fetchData = async url => await (await fetch(url)).json()

export const progInfo = {
  baseUrl: 'https://prog-info.o94.at/api.php',

  current: async () => fetchData(`${progInfo.baseUrl}/current`),
  daily: async (date = getDayFormatted(new Date())) =>
    fetchData(`${progInfo.baseUrl}/daily/${date}`)
}
