import {getMinifiedRecords, getRecordId, table} from "../../lib/airtable";

const deleteFavourite = async (req, res) => {

    if (req.method ===  "DELETE") {
        const {id} = req.body;
        if (id) {
            try {
                const findId = await table.select({
                    filterByFormula: `id="${id}"`
                }).firstPage();
                if (findId.length > 0) {
                     const record = getRecordId(findId)[0];

                    const deleteRecord = await table.destroy(record,  (err, deletedRecord) =>{
                        if (err) {
                            console.error("table.destroy error:", err);
                            res.status(500);
                            res.json({message: "something went wrong"});
                            return;
                        }

                       return deletedRecord;
                    });
                    console.log('Deleted record', deleteRecord);
                    if (deleteRecord===id){
                        res.status(200);
                        res.json({message:"image deleted successfully"})
                        return;
                    }
                } else {
                    res.status(404)
                    res.json({message: "image does not exist"});
                    return;
                }
            } catch (error) {
                console.log("error deleting image", error);
                res.status(500);
                res.json({message: "something went wrong"});
                return;
            }


        }
        res.status(400);
        res.json({message: "id is required"});
        return;


    }

    res.status(405);
    res.json({message: "only delete request"})


}

export default deleteFavourite;