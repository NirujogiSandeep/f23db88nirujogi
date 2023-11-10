var sea = require('../models/sea');
// List of all sea
exports.sea_list = function(req, res) {
res.send('NOT IMPLEMENTED: sea list');
};
// for a specific sea.
exports.sea_detail = function(req, res) {
res.send('NOT IMPLEMENTED: sea detail: ' + req.params.id);
};

// Handle sea delete form on DELETE.
exports.sea_delete = function(req, res) {
res.send('NOT IMPLEMENTED: sea delete DELETE ' + req.params.id);
};
// Handle sea update form on PUT.
exports.sea_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: sea update PUT' + req.params.id);
};

// List of all sea
exports.sea_list = async function(req, res) {
    try{
    thesea = await sea.find();
    res.send(thesea);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // for a specific sea.
exports.sea_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await sea.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    

    // VIEWS
// Handle a show all view
exports.sea_view_all_Page = async function(req, res) {
    try{
    thesea = await sea.find();
    res.render('sea', { title: 'sea Search Results', results: thesea });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    // Handle Costume update form on PUT.
exports.sea_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await sea.findById( req.params.id)
// Do updates of properties
if(req.body.name)
toUpdate.name = req.body.name;
if(req.body.sizeinkm) toUpdate.cost = req.body.cost;
if(req.body.location) toUpdate.size = req.body.size;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};

    // Handle sea create on POST.
exports.sea_create_post = async function(req, res) {
    console.log(req.body)
    let document = new sea();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"sea_type":"goat", "cost":12, "size":"large"}
    //[{ name: "Jumbo", age: 10, species: "Asian"},{ name: "Torto", age: 30, species: "African"},{ name: "Marie", age: 20, species: "America"}]  
    document.name = req.body.name;
    document.sizeinkm = req.body.sizeinkm;
    document.location = req.body.location;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    