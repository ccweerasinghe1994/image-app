import {getMinifiedRecords, table} from "../../lib/airtable";


const getFavouriteImages = async (req, res) => {

    let favourites = [];
    try {
        await table.select({
            maxRecords: 100
        }).eachPage(
            function (records, processNextPage) {
                favourites = getMinifiedRecords(records)
                processNextPage();

            }
        );

        res.status(200);
        res.json(favourites)

    }catch (error){
        res.json({message:"error getting the favourites"})
    }


}

export default getFavouriteImages;