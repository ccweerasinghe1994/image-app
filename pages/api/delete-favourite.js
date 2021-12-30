import {getMinifiedRecords, getRecordId, table} from "../../lib/airtable";

const deleteFavourite = async (req, res) => {
    const {id} = req.body;
    const findId = await table.select({
                        filterByFormula: `id="${id}"`
                    }).firstPage();
    const record = getRecordId(findId)[0];

    table.destroy(record, function(err, deletedRecord) {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Deleted', deletedRecord, 'records');
        res.status(300);
        res.json( {id:deletedRecord.id})
    });


}

export default deleteFavourite;