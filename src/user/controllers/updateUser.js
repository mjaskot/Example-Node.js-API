const { userModel } = require("../user.model");

function updateUser(req, res, next) {
    const id = req.params.id;
    try {
        const user = await userModel.findByIdAndUpdate(id, req.body, { new: true }).exec();
        return res.status(200).json(user);  
    } catch (err) {
        return next(err);
    }
}
