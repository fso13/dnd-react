import {
    Button,
    Card,
    CardBody,
    CardSubtitle,
    CardText,
    CardTitle,
    Col,
    Row,
} from "reactstrap";
import MonstersJson from "../../static/monsters.json";
import React from "react";
import {useNavigate} from "react-router";
import MetaTags from "react-meta-tags";

const Monsters = () => {
    let navigate = useNavigate();
    return (
        <div>
            <div className="wrapper">
                <MetaTags>
                    <title>Игротеки</title>
                    <meta id="og-title" property="og:title" content="Игротеки"/>
                </MetaTags>
            </div>
            <Row>
                {MonstersJson.map((nt, index) => {
                        const src = require(`../../assets/images/monsters/${nt.imgStaticUrl}`);

                        return (<Col sm="6" lg="6" xl="3" key={index}>
                            <Card>
                                <div style={{position: 'relative'}}>
                                    <div name={nt.name[0]} id={nt.name[0]} className="card-img" style={{
                                        backgroundSize: "cover",
                                        backgroundPosition: "top",
                                        paddingBottom: "100%",
                                        width: "100%",
                                        backgroundImage: `url(${src.default})`
                                    }}>
                                    </div>
                                </div>

                                <CardBody className="p-4">
                                    <CardTitle tag="h5">{nt.name}</CardTitle>
                                    <CardSubtitle
                                        className="text-primary">класс опасности: {nt.cr}</CardSubtitle>
                                    <CardSubtitle
                                        className="text-primary">тип: {nt.type}</CardSubtitle>
                                    <CardSubtitle
                                        className="text-primary">среда обитания: {nt.bioms.join(', ')}</CardSubtitle>
                                    <CardText className="mt-3 truncate-text">
                                        <div className="mt-3 truncate-text"
                                             dangerouslySetInnerHTML={{__html: nt.fiction}}/>
                                    </CardText>
                                    <Button style={{opacity: 0, height: '0px', width: '0px', padding: 0}}></Button>
                                    <Button style={{zIndex: 20, position: 'absolute'}} color="primary"
                                            onClick={() => navigate(`/monsters/${nt.pdfName}`)}>Читать
                                        далее</Button>
                                </CardBody>
                            </Card>
                        </Col>);
                    }
                )
                }
            </Row>
        </div>
    );
};

export default Monsters;
