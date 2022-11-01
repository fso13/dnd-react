import {Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Media, Row,} from "reactstrap";
import React from "react";
import MonstersJson from "../../static/monsters.json";
import {useParams} from "react-router";

const Monster = () => {

    let {name} = useParams();
    const monsterJson = MonstersJson.filter(function (item) {
        return item.pdfName === name;
    })[0];

    console.log(monsterJson)
    console.log(monsterJson.imgStaticUrl)


    const src = require(`../../assets/images/monsters/${monsterJson.imgStaticUrl}`);

    return (

        <div>
            <Row className="mt-3">
                <Col xs="auto">
                    <Media body>
                        <div className="bg-light p-2 border">
                            <Card>
                                <Col sm="8" lg="8" xl="4"
                                     lg={{
                                         offset: 4,
                                         size: 5,
                                     }}
                                     md={{
                                         offset: 3,
                                         size: 5,
                                     }}
                                     sm={{
                                         offset: 1,
                                         size: 10,
                                     }}
                                >
                                    <div style={{position: 'relative'}}>
                                        <div className="card-img"
                                             style={{
                                                 backgroundSize: "cover",
                                                 backgroundPosition: "top",
                                                 paddingBottom: "100%",
                                                 width: "100%",
                                                 backgroundImage: `url(${src.default})`
                                             }}>
                                        </div>
                                    </div>
                                </Col>
                                <CardBody className="p-4">
                                    <CardTitle tag="h4">{monsterJson.name}</CardTitle>
                                    <CardSubtitle className="mt-3">{'\n'}</CardSubtitle>
                                    <CardSubtitle className="text-primary">
                                        <Row>
                                            <Col className={'bg-dark text-white'} xs="4"  sm="4" lg="4" xl="4">Броня</Col>
                                            <Col className={' bg-dark text-white text-center'} xs="4"  sm="4" lg="4"
                                                 xl="4">HP</Col>
                                            <Col className={'bg-dark text-white text-end'}  xs="4" sm="4" lg="4"
                                                 xl="4">Скорость</Col>
                                        </Row>
                                        <Row>
                                            <Col className={'text-dark'}  xs="4" sm="4" lg="4" xl="4">{monsterJson.ac} </Col>
                                            <Col className={'text-center text-dark'} xs="4"  sm="4" lg="4"
                                                 xl="4">{monsterJson.hp} </Col>
                                            <Col className={'text-end text-dark'}  xs="4" sm="4" lg="4"
                                                 xl="4">{monsterJson.speed} </Col>
                                        </Row>
                                        <Row>
                                            <Col className={'bg-dark text-white'} xs="2" sm="2" lg="2" xl="2">СИЛ </Col>
                                            <Col className={'bg-dark text-white'} xs="2" sm="2" lg="2" xl="2">ЛОВ </Col>
                                            <Col className={'bg-dark text-white'} xs="2" sm="2" lg="2" xl="2">ХАР </Col>
                                            <Col className={'bg-dark text-white'} xs="2" sm="2" lg="2" xl="2">ИНТ </Col>
                                            <Col className={'bg-dark text-white'} xs="2" sm="2" lg="2" xl="2">МУД </Col>
                                            <Col className={'bg-dark text-white'} xs="2" sm="2" lg="2" xl="2">ТЕЛ </Col>
                                        </Row>
                                        <Row>
                                            <Col className={'text-dark'} xs="2" sm="2" lg="2" xl="2">{monsterJson.str} </Col>
                                            <Col className={'text-dark'} xs="2" sm="2" lg="2" xl="2">{monsterJson.dex} </Col>
                                            <Col className={'text-dark'} xs="2" sm="2" lg="2" xl="2">{monsterJson.cha} </Col>
                                            <Col className={'text-dark'} xs="2" sm="2" lg="2" xl="2">{monsterJson.intilect} </Col>
                                            <Col className={'text-dark'} xs="2" sm="2" lg="2" xl="2">{monsterJson.wis} </Col>
                                            <Col className={'text-dark'} xs="2" sm="2" lg="2" xl="2">{monsterJson.con} </Col>
                                        </Row>
                                        <Row>
                                            <Col className={'bg-dark text-white'}  xs="4" sm="4" lg="4" xl="4">Навыки </Col>
                                            <Col className={'bg-dark text-white text-center'}  xs="4" sm="4" lg="4"
                                                 xl="4">Чувства </Col>
                                            <Col className={'bg-dark text-white text-end'}  xs="4" sm="4" lg="4"
                                                 xl="4">Языки</Col>
                                        </Row>
                                        <Row>
                                            <Col className={'text-dark'}  xs="4" sm="4" lg="4"
                                                 xl="4">{monsterJson.skill.join(', ')} </Col>
                                            <Col className={'text-center text-dark'}  xs="4" sm="4" lg="4"
                                                 xl="4">{monsterJson.senses} </Col>
                                            <Col className={'text-end text-dark'} xs="4"  sm="4" lg="4"
                                                 xl="4">{monsterJson.languages} </Col>
                                        </Row>
                                        <Row>
                                            <Col className={'bg-dark text-white'}  xs="6" sm="6" lg="6" xl="6">Размер</Col>
                                            <Col className={'bg-dark text-white text-end'} xs="6"  sm="6" lg="6"
                                                 xl="6">Окружение</Col>
                                        </Row>
                                        <Row>
                                            <Col className={'text-dark'} xs="6"  sm="6" lg="6" xl="6">{monsterJson.size} </Col>
                                            <Col className={'text-end text-dark'}  xs="6" sm="6" lg="6"
                                                 xl="6"> {monsterJson.bioms.join(', ')} </Col>
                                        </Row>
                                    </CardSubtitle>
                                    <CardSubtitle className="mt-3">{'\n'}</CardSubtitle>
                                    <CardSubtitle className="mt-3">
                                        <Row className={'h5 text-dark '}><strong>Черты</strong></Row>
                                        {monsterJson.monsterTrait.map((monsterTrait) => {
                                            return (
                                                <div>
                                                    <Row>
                                                        <Col className={'bg-dark text-white'}  xs="6" sm="6" lg="6"
                                                             xl="6"
                                                             dangerouslySetInnerHTML={{__html: monsterTrait.name}}/>
                                                        <Col className={'bg-dark text-white text-end'}  xs="6" sm="6" lg="6"
                                                             xl="6"
                                                             dangerouslySetInnerHTML={{__html: monsterTrait.attack}}/>
                                                    </Row>
                                                    <Row>
                                                        <Col className={'text-dark'}
                                                             dangerouslySetInnerHTML={{__html: monsterTrait.text}}/>
                                                    </Row>
                                                </div>

                                            )
                                        })}
                                    </CardSubtitle>
                                    <CardSubtitle className="mt-3">{'\n'}</CardSubtitle>
                                    <CardSubtitle className="mt-3">
                                        <Row className={'h5 text-dark '}><strong>Действия</strong></Row>
                                        {monsterJson.monsterAction.map((monsterAction) => {
                                            return (
                                                <div>
                                                    <Row>
                                                        <Col className={'bg-dark text-white'}  xs="6" sm="6" lg="6"
                                                             xl="6" className={'text-dark'}
                                                             dangerouslySetInnerHTML={{__html: monsterAction.name}}/>
                                                        <Col className={'bg-dark text-white text-end'}  xs="6" sm="6" lg="6"
                                                             xl="6" className={'text-dark'}
                                                             dangerouslySetInnerHTML={{__html: monsterAction.attack}}/>
                                                    </Row>
                                                    <Row>
                                                        <Col className={'text-dark'}
                                                             dangerouslySetInnerHTML={{__html: monsterAction.text}}/>
                                                    </Row>
                                                </div>

                                            )
                                        })}
                                    </CardSubtitle>
                                    <CardText className="mt-3">
                                        <div className="mt-3"
                                             dangerouslySetInnerHTML={{__html: monsterJson.fiction}}/>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </div>
                    </Media>
                </Col>
            </Row>
        </div>
    );
};

export default Monster;
