

function accessObject(obj, defaultValue, properties) {
    if (properties) {
        let objPropertySelected = obj;
        properties = properties.split('.');
        properties.forEach((property) => {
            if (objPropertySelected[property]) {
                objPropertySelected = objPropertySelected[property];
            }
        });
        return objPropertySelected ? objPropertySelected : defaultValue;
    }
    return function (properties) {
        accessObject(obj, defaultValue, properties)
    }
}
