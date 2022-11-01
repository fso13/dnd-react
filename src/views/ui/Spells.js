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
import SpellsJson from "../../static/spells.json";
import React from "react";
import {useNavigate} from "react-router";
import MetaTags from "react-meta-tags";

const Spells = () => {

    let navigate = useNavigate();
    return (
        <div>
            <div className="wrapper">
                <MetaTags>
                    <title>Заклинания</title>
                    <meta id="og-title" property="og:title" content="Заклинания"/>
                </MetaTags>
            </div>
            <br/>
            <Row>
                {SpellsJson.map((nt, index) => {
                    var cl = nt.spellClass.map((nt2) => {return nt2.name}).join(', ');
                    return (
                        <Col sm="6" lg="6" xl="3" key={index}>
                            <Card>
                                <CardBody className="p-4">
                                    <CardTitle tag="h5">{nt.name}</CardTitle>
                                    <CardSubtitle
                                        className="text-primary">Время накладывания: {nt.school}</CardSubtitle>
                                    <CardSubtitle
                                        className="text-primary">Дистанция: {nt.level}</CardSubtitle>
                                    <CardSubtitle
                                        className="text-primary">классы: {cl}</CardSubtitle>
                                    <CardText className="mt-3 truncate-text">
                                        <div className="mt-3 truncate-text"
                                             dangerouslySetInnerHTML={{__html: nt.text}}/>
                                    </CardText>
                                    <Button style={{opacity: 0, height: '0px', width: '0px', padding: 0}}></Button>
                                    <Button style={{zIndex: 20, position: 'absolute'}} color="primary"
                                            onClick={() => navigate(`/spells/${nt.name}`)}>Читать
                                        далее</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
};

export default Spells;
