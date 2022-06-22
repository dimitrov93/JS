exports.getErrorMsg = (err) => {
    let errorMsg = err.message;

    console.log('ErrorMsg  ' + errorMsg );

    if (err.errors) {
        errorMsg = Object.values(err.errors)[0].message;
    }

    return errorMsg;
};
