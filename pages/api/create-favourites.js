import {getMinifiedRecords, table} from "../../lib/airtable";

const createImageRecord = async (req, res) => {

    if (req.method === "POST") {
        const {id, color, likes, small, regular, full, username, profile_image} = req.body;

        try {
            //    find a record;
            if (id) {
                const findRecord = await table.select({
                    filterByFormula: `id="${id}"`
                }).firstPage();
                if (findRecord.length > 0) {
                    const records = getMinifiedRecords(findRecord)
                    res.json(records)
                } else {

                    const createRecord = await table.create([
                        {
                            "fields": {
                                id, color, likes, small, regular, full, username, profile_image
                            }
                        },

                    ])
                    const records = getMinifiedRecords(createRecord);
                    res.json(records)
                    res.json({message: "created a record", records})


                }
            }
            res.status(400);
            res.json({message: "id is not provided"});
        } catch (error) {

            res.status(500);
            res.json({message: "Error creating or finding a favourite", error})
        }

    }

}
export default createImageRecord;
