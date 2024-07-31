const validate = (Schema) => {
    return (req, res, next) => {
        try {
            const { error, value } = Schema.validate(req.body);
            if (error === undefined || typeof error === "undefined") return next();
            const err = new Error(
                error.details.map((errorObject) => errorObject.message).toString()
            );
            err.statusCode = 422;
            next(err);
        }
        catch (err) {
            next(err);
        }
    }
};

module.exports = validate
