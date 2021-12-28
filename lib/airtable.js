const Airtable = require('airtable');
const base = new Airtable({apiKey: process.env.AIR_TABLE_API_KEY}).base(process.env.AIR_TABLE_BASE_KEY);

export const table = base('favourites');


export const getMinifiedRecords = (records) => {
    return records.map(({fields}) => ({
        ...fields
    }))
}

export const getRecordId = (records) => {
    return records.map(({id})=>(id))
}

