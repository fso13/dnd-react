import {
    Card,
    CardBody,
    CardSubtitle,
    CardText,
    CardTitle,
    Col,
    Media,
    Row,
} from "reactstrap";
import React from "react";
import SpellsJson from "../../static/spells.json";
import {useParams} from "react-router";
import MetaTags from "react-meta-tags";

const Spell = () => {

    let {name} = useParams();

    const spellJsons = SpellsJson.filter(function (item) {
        return item.name === name || item.nameEn.toUpperCase() === name.toUpperCase();
    });
    var cl;

    console.log(spellJsons.length > 0)
    let spellJson = null;
    if (spellJsons.length > 0) {
        spellJson = spellJsons[0];
        cl = spellJson.spellClass.map((nt2) => {
            return nt2.name
        }).join(', ');
    }


    return (
        <div>
            {spellJson != null ? (

                <div>
                    <div className="wrapper">
                        <MetaTags>
                            <title>{spellJson.name}</title>
                            <meta id="og-title" property="og:title" content={spellJson.name}/>
                            <meta id="og-type" property="og:type" content="article"/>
                            <meta id="meta-description" name="og:description" content={spellJson.name}/>
                            <meta id="og-image-alt" name="og:image:alt" content={spellJson.name}/>
                        </MetaTags>
                    </div>
                    <Row className="mt-3">


                        <Col xs="auto">
                            <Media>
                                <Media body>
                                    <div className="bg-light p-2 border">
                                        <Card>
                                            <CardBody className="p-4">
                                                <CardTitle tag="h4">{spellJson.name}</CardTitle>
                                                <CardSubtitle className="mt-3">{'\n'}</CardSubtitle>
                                                <CardSubtitle className="text-primary">
                                                    <Row>
                                                        <Col className={'bg-dark text-white'} xs="12" sm="12" lg="12" xl="12">Уровень</Col>
                                                    </Row>
                                                    <Row>
                                                        <Col  xs="12" sm="12" lg="12" xl="12">{spellJson.level} </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col className={'bg-dark text-white'} xs="6" sm="6" lg="6" xl="6">Время
                                                            накладывания</Col>
                                                        <Col className={'text-end bg-dark text-white'} xs="6" sm="6" lg="6"
                                                             xl="6">Дистанция</Col>
                                                    </Row>
                                                    <Row>
                                                        <Col  xs="6" sm="6" lg="6"
                                                             xl="6">{spellJson.castingTime} </Col>
                                                        <Col className={'text-end'} xs="6" sm="6"
                                                             lg="6"
                                                             xl="6">{spellJson.range} </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col className={'bg-dark text-white'} xs="6"  sm="6" lg="6"
                                                             xl="6">Компоненты</Col>
                                                        <Col className={'text-end bg-dark text-white'} xs="6"  sm="6" lg="6"
                                                             xl="6">Длительность</Col>
                                                    </Row>
                                                    <Row>
                                                        <Col xs="6" sm="6" lg="6"
                                                             xl="6">{spellJson.components} </Col>
                                                        <Col className={'text-end'} xs="6" sm="6" lg="6"
                                                             xl="6">{spellJson.duration} </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col className={'bg-dark text-white'} xs="6" sm="6" lg="6" xl="6">Доступные классы</Col>
                                                        <Col className={'text-end bg-dark text-white'} xs="6"  sm="6" lg="6"
                                                             xl="6">Школа</Col>
                                                    </Row>
                                                    <Row>
                                                        <Col xs="6" sm="6" lg="6" xl="6">{cl} </Col>
                                                        <Col className={'text-end'} xs="6"  sm="6" lg="6"
                                                            xl="6">{spellJson.school} </Col>
                                                    </Row>
                                                </CardSubtitle>
                                                <CardText className="mt-3">
                                                    <div className="mt-3"
                                                         dangerouslySetInnerHTML={{__html: spellJson.text}}/>
                                                </CardText>
                                            </CardBody>
                                        </Card>
                                    </div>
                                </Media>
                            </Media>
                        </Col>
                    </Row>
                </div>
            ) : (<Row className="mt-3">
                <Col xs="auto"
                     md={{
                         offset: 3,
                         size: 5,
                     }}>
                    <div className="code"> 404</div>
                    <div className="message">
                        Not Found
                    </div>
                </Col>
            </Row>)}
        </div>

    );


};

export default Spell;
