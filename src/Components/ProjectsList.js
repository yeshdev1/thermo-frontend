import { Table, Button } from 'react-bootstrap';
import React from 'react';

const ProjectsList = (props) => {
    const {
        onClickSummary,
        onClickContent
    } = props;
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
                    <tr>
                    <td>Canine TD v2 c2</td>
                    <td>Open</td>
                    <td>19</td>
                    <td>15</td>
                    <td>120</td>
                    <td>10/22/2021</td>
                    <td>
                        <button className="button" onClick={onClickSummary}>Summary</button>
                    </td>
                    <td>
                        <button className="button" onClick={onClickContent}>Content</button>
                    </td>
                    </tr>
                    <tr>
                    <td>Canine TD v2 c2</td>
                    <td>Open</td>
                    <td>19</td>
                    <td>15</td>
                    <td>120</td>
                    <td>10/26/2021</td>
                    <td>
                        <button className="button" onClick={onClickSummary}>Summary</button>
                    </td>
                    <td>
                        <button className="button" onClick={onClickContent}>Content</button>
                    </td>
                    </tr>
                    <tr>
                    <td>Canine TD v2 c2</td>
                    <td>Open</td>
                    <td>19</td>
                    <td>15</td>
                    <td>120</td>
                    <td>10/30/2021</td>
                    <td>
                        <button className="button" onClick={onClickSummary}>Summary</button>
                    </td>
                    <td>
                        <button className="button" onClick={onClickContent}>Content</button>
                    </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default ProjectsList;