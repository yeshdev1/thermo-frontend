import { Table } from "react-bootstrap"
import { mergeIntoArrays } from '../utils/common';
import React from 'react';

const Rows = ({
    data,
    checkedList,
    changedCheckedList
}) => {
    // const [bodyCheckList, changeBodyCheckList] = useState([...checkedList])

    // useEffect(() => {
    //     changeBodyCheckList(checkedList)
    // }, [checkedList])

    // useEffect(() => {
    //     changedCheckedList(bodyCheckList)
    // }, [bodyCheckList])

    const handleChange = (checkedList,markerId) => {
        const bodyCheckListClone = [...checkedList];
        if (bodyCheckListClone.indexOf(markerId) !== -1) {
            changedCheckedList([...bodyCheckListClone.filter(item => item !== markerId)]);
        } else {
            bodyCheckListClone.push(markerId)
            changedCheckedList([...bodyCheckListClone])
        }
    };

    const checkChecked = (checkedList,markerId) => {
        if (checkedList.length === 0) return false;
        const status = checkedList.indexOf(markerId) !== -1
        return status
    }

    return data.map(item => (
        <tr key={item.markerId}>
            <td>
                <input
                    type="checkbox"
                    checked={checkChecked(checkedList,item.markerId)}
                    onChange={() => handleChange(checkedList,item.markerId)}>
                </input>
            </td>
            <td>{item.markerName}</td>
            <td>{item.status}</td>
            <td>{item.type}</td>
            <td>{item.category}</td>
            <td>{item.lastUpdated}</td>
            <td>{item.updatedBy}</td>
            <td>{item.reviewedDate}</td>
            <td>{item.approvedDate}</td>
            <td>{item.gene}</td>
            <td>{item.conditionName}</td>
        </tr>
    ))
}

export const DataTable = ({
    categoryWiseDisorderMarkerList,
    categoryWiseTraitMarkerList,
    checkedList,
    changedCheckedList
}) => {
    const massagedData = mergeIntoArrays(categoryWiseDisorderMarkerList,categoryWiseTraitMarkerList)
    const length = massagedData.length
    const handleCheckAll = (checkedList) => {
        const checkedListClone = [...checkedList]
        if (checkedListClone.length === 0) {
            massagedData.forEach(node => {
                if (checkedListClone.indexOf(node.markerId) === -1) {
                    checkedListClone.push(node.markerId)
                }
            })
            changedCheckedList(checkedListClone)
        } else {
            changedCheckedList([])
        }
    }
    return (
        <div className="margins">
            <Table striped bordered bg="dark" vaiant="dark">
            <thead>
                    <tr>
                    <th>
                        <input
                            type="checkbox"
                            checked={checkedList.length === length}
                            onChange={() => handleCheckAll(checkedList)}
                        />
                    </th>
                    <th>Marker name</th>
                    <th>Status</th>
                    <th>Type</th>
                    <th>Category</th>
                    <th>Last Updated</th>
                    <th>Updated By</th>
                    <th>Reviewed</th>
                    <th>Approved</th>
                    <th>Gene</th>
                    <th>Disorder Name</th>
                    </tr>
                </thead>
                <tbody>
                    <Rows
                        data={massagedData}
                        checkedList={checkedList}
                        changedCheckedList={changedCheckedList}
                    />
                </tbody>
            </Table>
        </div>
    );
}
