const { getAllStaffsData, addStaffData } = require("../Model/staffModel")

const getStaffContoller = (req,res) =>{
    res.json(getAllStaffsData())
};

const CreateStaffContoller = (req,res) =>{
    const newStaff = req.body;
    const data = getAllStaffsData()
    const id = data.length ? data[data.length - 1].staff_id + 1 : 1;
    data.push({staff_id : id , ...newStaff})
    addStaffData(data)
    res.json(data)
}

module.exports = {getStaffContoller,CreateStaffContoller}