
export const mergeIntoArrays = (arr1, arr2) => {
    const concatenatedArray = []
    arr1.forEach(node => {
        const tempObj = {}
        node.conditionList.forEach(innerNode => {
            tempObj["category"] = node.conditionCategory || "None";
            tempObj["markerName"] = innerNode.markerName || "None";
            tempObj["conditionName"] = innerNode.conditionName || "None";
            tempObj["gene"] = innerNode.gene || "None";
            tempObj["type"] = "Disorder" || "None";
            tempObj["markerId"] = innerNode.markerId || "None";
            tempObj["lastUpdated"] = innerNode?.statusData ? innerNode.statusData.lastUpdatedDate : "01/10/2021";
            tempObj["reviewedDate"] = innerNode?.statusData ? innerNode.statusData.reviewedDate : "01/10/2021";
            tempObj["approvedDate"] = innerNode?.statusData ? innerNode.statusData.approvedDate : "01/10/2021";
            tempObj["updatedBy"] = innerNode?.statusData ? innerNode.statusData.lastUpdatedBy : "srinivas udumudi";
            tempObj["status"] = innerNode.currentStatus || "";
        })
        concatenatedArray.push(tempObj)
    });

    arr2.forEach(node => {
        const tempObj = {}
        node.conditionList.forEach(innerNode => {
            tempObj["category"] = node.conditionCategory || "None";
            tempObj["markerName"] = innerNode.markerName || "None";
            tempObj["conditionName"] = innerNode.conditionName || "None";
            tempObj["gene"] = innerNode.gene || "None";
            tempObj["type"] = "trait" || "None";
            tempObj["markerId"] = innerNode.markerId || "None";
            tempObj["lastUpdated"] = innerNode?.statusData ? innerNode.statusData.lastUpdatedDate : "01/10/2021";
            tempObj["reviewedDate"] = innerNode?.statusData ? innerNode.statusData.reviewedDate : "01/10/2021";
            tempObj["approvedDate"] = innerNode?.statusData ? innerNode.statusData.approvedDate : "01/10/2021";
            tempObj["updatedBy"] = innerNode?.statusData ? innerNode.statusData.lastUpdatedBy : "srinivas udumudi";
            tempObj["status"] = innerNode.currentStatus || "";
        })
        concatenatedArray.push(tempObj)
    });
    return concatenatedArray;
}

export const fileToBase64 = (file, cb) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function () {
      cb(null, reader.result)
    }
    reader.onerror = function (error) {
      cb(error, null)
    }
}

export const convertBase64toPdfAndOpen = (b64Data, type = 'application/pdf') => {
    const byteCharacters = window.atob(b64Data);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], {type: type});
    const blobUrl = URL.createObjectURL(blob);
    return blobUrl;
}