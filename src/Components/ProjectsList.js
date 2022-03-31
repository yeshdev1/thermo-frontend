import { Table } from 'react-bootstrap';
import React from 'react';

const ProjectsList = (props) => {
    const {
        onClickSummary,
        onClickContent
    } = props;
    const makeRows = (data) => {
        return data.map(node =>
            <tr>
            <td>{node.projectName}</td>
            <td>{node.status}</td>
            <td>{node.draft}</td>
            <td>{node.review}</td>
            <td>{node.approval}</td>
            <td>{node.lastUpdated.split(/(\s+)/)[0]}</td>
            <td>
                <button className="button" onClick={() => onClickSummary(node.projectId)}>Summary</button>
                <button className="button" onClick={() => onClickContent(node.projectId)}>Content</button>
            </td>
            </tr>
        )
    }
    const data = props.data;
    return (
        <div>
            <Table striped hover responsive="sm">
                <thead>
                    <tr>
                    <th>Project</th>
                    <th>Draft</th>
                    <th>Status</th>
                    <th>Review</th>
                    <th>Approval</th>
                    <th>Last Updated</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {makeRows(data)}
                </tbody>
            </Table>
        </div>
    )
}

export default ProjectsList;