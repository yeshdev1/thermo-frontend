
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