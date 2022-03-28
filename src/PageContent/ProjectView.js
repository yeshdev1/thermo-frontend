
import './pageContentStyles.css';
import ProjectInfo from '../Components/ProjectInfo';
import { ListGroup } from 'react-bootstrap';
import { COMMENTS, WEBLINKS, ARTICLES, REVIEW, LANDING_PAGE } from '../Strings/strings';
import React, { useState, useEffect } from 'react';
import { InfoTile } from '../Components/ProjectInfo';
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { request } from "../Api/api";
import '../App.css';

const RenderField = ({
    fieldName,
    fieldLastUpdatedDate,
    fieldUpdatedBy,
    fieldId,
    setFieldsData,
    data
}) => {
    const handleChange = (event) => {
        const obj = {
            "fieldId": fieldId,
            "value": event.target.value
        }
        const newData = Object.assign([], data)
        const index = newData.findIndex((element) => element.fieldId === fieldId)
        if (index !== -1) {
            newData.splice(index,1)
        }
        newData.push(obj)
        setFieldsData(newData)
    }
    return (
        <div className="pull-between small-margins section-background" key={fieldId}>
            <span className="field-name">{fieldName}</span>
            <span>
                <textarea
                    className="textAreaFields"
                    rows="3"
                    cols="70"
                    onChange={handleChange}
                ></textarea>
            </span>
            <span>
                <InfoTile>
                    <div className="parent-project-info">
                        Last updated: {fieldLastUpdatedDate || "None"}
                    </div>
                    <div className="parent-project-info">
                        Updated by: {fieldUpdatedBy || "None"}
                    </div>
                </InfoTile>
            </span>
        </div>
    )
}

const FieldsSection = ({
    fieldList,
    markerId,
    projectId
}) => {
    const [data,setFieldsData] = useState([]);
    const [fields,setFields] = useState(fieldList)
    const handleSaveFields = (data) => {
        const dataWithDetails = {
            "markerId":markerId,
            "projectId":projectId,
            "data":data
        }
        request('POST', "http://202.153.40.2:9500/MCDS/mcds/API/saveMarkerData", () => {}, dataWithDetails)
    }
    return (
        <div className="field-update-tile">
            <div className="pull-between margins">
                <span>This space is for displaying messages</span>
                <span>
                    <button
                        className="default-button"
                        onClick={() => handleSaveFields(data)}
                    >
                        Save Fields
                    </button>
                </span>
            </div>
            {fields.map(node => {
                return (
                    <RenderField
                        fieldName={node.fieldName}
                        fieldLastUpdatedDate={node.fieldLastUpdatedDate}
                        fieldUpdatedBy={node.fieldUpdatedBy}
                        fieldId={node.fieldId}
                        setFieldsData={setFieldsData}
                        data={data}
                    />
                )
            })}
        </div>
    )
}


const CommentsSection = ({
    commentList,
    addCommentToMarker
}) => {
    const [currentComment,setCurrentCommet] = useState("");
    const handleChange = (event) => {
        setCurrentCommet(event.target.value);
    };

    return (
        <div className="text-area-center">
            <textarea className="commentTextArea" value={currentComment} onChange={handleChange}></textarea>
            <button
                className="default-button"
                onClick={() => addCommentToMarker(currentComment)}
            >
                Add
            </button>
            {commentList.map(comment => (
                <div className="pull-apart">
                    <div className="comment">
                        {comment.commentText}
                    </div>
                    <div>
                        <div className="date-time">
                            {comment.commentDateTime.split(" ")[0]}
                        </div>
                        <div className="date-time">
                            {comment.commentDateTime.split(" ")[1]}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

const WebLinks = ({
    webLinksList,
    addWebLinkToMarker
}) => {
    const [currentTitle, setCurrentTitle] = useState("");
    const [currentLink, setCurrentLink] = useState("");
    const [currentDescription, setCurrentDescription] = useState("");
    const handleChangeCurrentTitle = (event) => {
        setCurrentTitle(event.target.value)
    }
    const handleChangeCurrentLink = (event) => {
        setCurrentLink(event.target.value)
    }
    const handleChangeCurrentDescription = (event) => {
        setCurrentDescription(event.target.value)
    }
    return (
        <div className="text-area-center">
            <div className="pull-between">
                <span className="field-name">Title</span>
                <span><input type="text" value={currentTitle} onChange={handleChangeCurrentTitle}/></span>
            </div>
            <div className="pull-between">
                <span className="field-name">URL</span>
                <span><input type="text" value={currentLink} onChange={handleChangeCurrentLink}/></span>
            </div>
            <div className="pull-between">
                <span className="field-name">Description</span>
                <span><textarea value={currentDescription} onChange={handleChangeCurrentDescription}></textarea></span>
            </div>
            <button
                className="default-button"
                onClick={() => addWebLinkToMarker({
                    "title": currentTitle,
                    "webLinkUrl": currentLink,
                    "description": currentDescription
                })}
            >
                Add
            </button>
            {webLinksList.map(node => (
                <div className="weblink">
                    <a href={node.url} className="link">{node.title}</a>
                    <div className="pull-between">
                        <div className="webLinkText">
                            {node.description}
                        </div>
                        <div>
                            <div className="date-time">
                                {node.createdDateTime.split(" ")[0]}
                            </div>
                            <div className="date-time">
                                {node.createdDateTime.split(" ")[1]}
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
            ))}
        </div>
    )
}

const Articles = ({
    articalList,
    addArticleToMarker
}) => (
    <div className="text-area-center">
        <div className="pull-apart">
            <span className="field-name">Title</span>
            <span><input type="text"/></span>
        </div>
        <div className="pull-apart">
            <span className="field-name">Article File</span>
            <span><input type="text"/></span>
            <span><button>Upload File</button></span>
        </div>
        <div className="pull-apart">
            <span className="field-name">Description</span>
            <span><textarea></textarea></span>
        </div>
        <button
            className="default-button"
            onClick={addArticleToMarker}
        >
            Add
        </button>
        {articalList.map(node => (
            <div className="weblink">
                <a href={node.url} className="link">{node.title}</a>
                <div className="pull-between">
                        <div className="webLinkText">
                            {node.description}
                        </div>
                        <div>
                            <div className="date-time">
                                {node.createdDateTime.split(" ")[0]}
                            </div>
                            <div className="date-time">
                                {node.createdDateTime.split(" ")[1]}
                            </div>
                        </div>
                    </div>
                <hr />
            </div>
        ))}
    </div>
)

const ToggleFunctions = ({
    commentList,
    webLinksList,
    articalList,
    projectId,
    markerId
}) => {
    const [value,setValue] = useState(0)
    const [comments,setComments] = useState(commentList)
    const [webLinks,setWebLinks] = useState(webLinksList)
    const [articles,setArticles] = useState(articalList)
    const handleChange = (index) => {
        setValue(index)
    }
    const addCommentToMarker = (currentComment) => {
        console.log('logging comments post request sent')
        const comment = {
            "comment": currentComment,
            "projectId": projectId,
            "markerId":markerId
        }
        request('POST', "http://202.153.40.2:9500/MCDS/mcds/API/saveMarkerComments", setComments, comment)
    }
    const addWebLinkToMarker = (currentWebLink) => {
        console.log('logging weblinks post request sent')
        const weblink = {
            "title":currentWebLink.title,
            "weblinkurl":currentWebLink.webLinkUrl,
            "description":currentWebLink.description,
            "markerId":markerId,
            "projectId":projectId
        }
        request('POST', "http://202.153.40.2:9500/MCDS/mcds/API/saveMarkerWebLink", setWebLinks, weblink)
    }
    const addArticleToMarker = () => {
        console.log('logging articles post request sent')
        request('POST', "http://202.153.40.2:9500/MCDS/mcds/API/saveMarkerArticles", setArticles, {})
    }

    return (
        <div>
            <div>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="wrapped label tabs example"
                    variant="scrollable"
                    scrollButtons="auto"
                >
                <Tab value={0} label="Comments" onClick={() => handleChange(0)} />
                <Tab value={1} label="Weblinks" onClick={() => handleChange(1)} />
                <Tab value={2} label="Articles" onClick={() => handleChange(2)} />
                </Tabs>
            </div>
            {value === 0 &&
                <CommentsSection
                    commentList={commentList}
                    addCommentToMarker={addCommentToMarker}
                />
            }
            {value === 1 &&
                <WebLinks
                    webLinksList={webLinksList}
                    addWebLinkToMarker={addWebLinkToMarker}
                />
            }
            {value === 2 &&
                <Articles
                    articalList={articalList}
                    addArticleToMarker={addArticleToMarker}
                />
            }   
        </div>
    );
}

const SpecificContent = ({
    fieldList,
    commentList,
    webLinksList,
    articalList,
    markerId,
    projectId
}) => {
    return (
        <div>
            <div className="floater-section-left">
                <FieldsSection
                    fieldList={fieldList}
                    markerId={markerId}
                    projectId={projectId}
                />
            </div>
            <div div className="floater-section-right">
                <ToggleFunctions
                    commentList={commentList}
                    webLinksList={webLinksList}
                    articalList={articalList}
                    markerId={markerId}
                    projectId={projectId}
                />
            </div>
        </div>
    );
}

const DefinitionTile = () => {
    return (
        <div>
            <div>Project View</div>
            <div className="header-size">Canine TD v1 2.0</div>
        </div>
    )
}

const ColoredLine = (props) => {
    const {
        color = "black",
        type = 'hr'
    } = props;
    return (
        type === 'hr' ?
            <hr
                style={{
                    color: color,
                    backgroundColor: color,
                    height: 5
                }}
            />
            : <div style={{borderLeft:"1px solid #000", height:"500px"}}></div>
    )
}

const Info = ({
    markerName,
    markerType,
    markerCategory,
    currentStatus,
    approvedBy,
    approvedDate,
    createdDate,
    lastUpdatedBy,
    lastUpdatedDate,
    reviewedBy,
    reviewedDate
}) => {
    return (
        <div className="pull-apart horizontal-tile">
            <div className="pull-apart">
                <span>
                    <InfoTile>
                        <span className="parent-project-info">Marker</span>
                        <span className="child-project-info">{markerName}</span>
                    </InfoTile>
                </span>
            </div>
            <div className="pull-apart">
                <span>
                    <InfoTile>
                        <span className="parent-project-info">Marker Type</span>
                        <span className="child-project-info">{markerType}</span>
                    </InfoTile>
                    <InfoTile>
                        <span className="parent-project-info">Category</span>
                        <span className="child-project-info">{markerCategory}</span>
                    </InfoTile>
                </span>
            </div>
            <div className="pull-apart">
                <span>
                    <InfoTile>
                        <span className="parent-project-info">Last updated</span>
                        <span className="child-project-info">{lastUpdatedDate.split(" ")[0]}</span>
                    </InfoTile>
                    <InfoTile>
                        <span className="parent-project-info">Updated by</span>
                        <span className="child-project-info">{lastUpdatedBy}</span>
                    </InfoTile>
                </span>
            </div>
            <div className="pull-apart">
                <span>
                    <InfoTile>
                        <span className="parent-project-info">Created date</span>
                        <span className="child-project-info">{createdDate.split(" ")[0]}</span>
                    </InfoTile>
                    <InfoTile>
                        <span className="parent-project-info">Current Status</span>
                        <span className="child-project-info">{currentStatus}</span>
                    </InfoTile>
                </span>
            </div>
            <div className="pull-apart">
                <span>
                    <InfoTile>
                        <span className="parent-project-info">Reviewed Date</span>
                        <span className="child-project-info">{reviewedDate.split(" ")[0]}</span>
                    </InfoTile>
                    <InfoTile>
                        <span className="parent-project-info">Reviewed by</span>
                        <span className="child-project-info">{reviewedBy}</span>
                    </InfoTile>
                </span>
            </div>
            <div className="pull-apart">
                <span>
                    <InfoTile>
                        <span className="parent-project-info">Approved Date</span>
                        <span className="child-project-info">{approvedDate.split(" ")[0]}</span>
                    </InfoTile>
                    <InfoTile>
                        <span className="parent-project-info">Approved by</span>
                        <span className="child-project-info">{approvedBy}</span>
                    </InfoTile>
                </span>
            </div>
            <button className="default-button">
                Send to Review
            </button>       
        </div>
    )
}

export default ({
    changePage,
    projectId
}) => {
    if (projectId === null || projectId === undefined) return null;
    const [view,setView] = useState(COMMENTS);
    const [active,setActive] = useState(0)
    const [data, setChangedData] = useState([])
    const [markerList,setMarkerList] = useState([]);
    const [currentMarker,setCurrentMarker] = useState({})


    useEffect(() => {
        request('GET', "http://202.153.40.2:9500/MCDS/mcds/API/project-content?projectId=" + projectId, setChangedData)
    }, [])

    useEffect(() => {
        if (data.length !== 0) {
            let arr = []
            data[0].markerList.forEach(node => {
                arr.push({
                    markerId: node.id,
                    markerName: node.markerName
                })
            });
            setMarkerList(arr)
            setCurrentMarker(data[0].markerList[0])
        }
    }, [data])

    //getting the appropriate index and getting data using the index only
    useEffect(() => {
        if (data.length !== 0) {
            setCurrentMarker(data[0].markerList[active])
        }
    }, [active])


    if (data.length !== 0 && markerList.length !== 0) {
        return (
            <>
                <div className="pull-apart margins">
                    <DefinitionTile />
                    <ProjectInfo
                        projectStatus={data[0].projectStatus}
                        lastUpdated={data[0].lastUpdatedDate}
                        createdDate={data[0].createdDate}
                        updatedBy={data[0].updatedBy}
                        productPanel={data[0].productPanel}
                        parentProject={data[0].parentProject}
                        teamData={data[0].teamData}
                        statusData={data[0].statusData}
                    />
                    <button className="default-button" onClick={() => changePage(LANDING_PAGE)}>
                        Close View
                    </button>
                </div>
                <ColoredLine color="black" />
                <div>
                    <div className="margins">
                        <h4>
                            Canine TD v1
                        </h4>
                        <ListGroup as="ul" className="custom-list-group">
                            {markerList.map((group,index) => {
                                if (active === index) {
                                    return (
                                        <ListGroup.Item as="li" key={group.markerId} active className="list-item">{group.markerName}</ListGroup.Item>
                                    )
                                }
                                return (
                                    <ListGroup.Item as="li" key={group.markerId}  onClick={() => setActive(index)} className="list-item">{group.markerName}</ListGroup.Item>
                                )
                            })}
                        </ListGroup>
                    </div>
                    <Info
                        markerName={currentMarker.markerName || "None"}
                        markerType={"Disorder" || "None"}
                        markerCategory={"None" || "None"}
                        currentStatus={currentMarker.currentStatus || "Unavailable"}
                        approvedBy={currentMarker.statusData.approvedBy || "None"}
                        approvedDate={currentMarker.statusData.approvedDate || "None"}
                        createdDate={currentMarker.statusData.createdDate || "None"}
                        lastUpdatedBy={currentMarker.statusData.lastUpdatedBy || "None"}
                        lastUpdatedDate={currentMarker.statusData.lastUpdatedDate || "None"}
                        reviewedBy={currentMarker.statusData.reviewedBy || "None"}
                        reviewedDate={currentMarker.statusData.reviewedDate|| "None"}
                    />
                    <SpecificContent
                        fieldList={currentMarker.fieldList}
                        commentList={currentMarker.commentList}
                        webLinksList={currentMarker.webLinksList}
                        articalList={currentMarker.articalList}
                        markerId={currentMarker.markerId}
                        projectId={projectId}
                    />
                </div>
            </>
        )
    }
    return (<div id="loader"></div>);
}