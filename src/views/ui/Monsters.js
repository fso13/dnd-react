import {
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    Button,
    Card,
    CardBody,
    CardSubtitle,
    CardText,
    CardTitle,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Row,
    UncontrolledAccordion,
} from "reactstrap";
import MonstersJson from "../../static/monsters.json";
import React from "react";
import {useNavigate} from "react-router";
import MetaTags from "react-meta-tags";

const qs = require('query-string');


const Monsters = () => {
    const query = qs.parse(window.location.search);
    console.log(window.location.search)
    let cr = query.cr
    let type = query.type
    let biom = query.biom

    let navigate = useNavigate();
    return (
        <div>
            <div className="wrapper">
                <MetaTags>
                    <title>Игротеки</title>
                    <meta id="og-title" property="og:title" content="Монстры"/>
                </MetaTags>
            </div>

            <div>
                <div>
                    <UncontrolledAccordion
                        toggle={function noRefCheck() {
                        }}
                    >
                        <AccordionItem>
                            <AccordionHeader targetId="1">
                                Фильтр
                            </AccordionHeader>
                            <AccordionBody accordionId="1">
                                <Form>
                                    <FormGroup row>
                                        <Label
                                            for="exampleSelect"
                                            sm={3}>
                                            Опасность
                                        </Label>
                                        <Col sm={2}>
                                            <Input
                                                defaultValue={cr === undefined ? undefined : cr}
                                                id="cr"
                                                name="cr"
                                                type="select">
                                                <option>
                                                </option>
                                                <option>
                                                    0
                                                </option>
                                                <option>
                                                    1/8
                                                </option>
                                                <option>
                                                    1/4
                                                </option>
                                                <option>
                                                    1/2
                                                </option>
                                                <option>
                                                    1
                                                </option>
                                                <option>
                                                    2
                                                </option>
                                                <option>
                                                    3
                                                </option>
                                                <option>
                                                    4
                                                </option>
                                                <option>
                                                    5
                                                </option>
                                                <option>
                                                    6
                                                </option>
                                                <option>
                                                    7
                                                </option>
                                                <option>
                                                    8
                                                </option>
                                                <option>
                                                    9
                                                </option>
                                                <option>
                                                    10
                                                </option>
                                                <option>
                                                    11
                                                </option>
                                                <option>
                                                    12
                                                </option>
                                                <option>
                                                    13
                                                </option>
                                                <option>
                                                    14
                                                </option>
                                                <option>
                                                    15
                                                </option>
                                                <option>
                                                    16
                                                </option>
                                                <option>
                                                    17
                                                </option>
                                                <option>
                                                    18
                                                </option>
                                                <option>
                                                    19
                                                </option>
                                                <option>
                                                    20
                                                </option>
                                                <option>
                                                    21
                                                </option>
                                                <option>
                                                    22
                                                </option>
                                                <option>
                                                    23
                                                </option>
                                                <option>
                                                    24
                                                </option>
                                                <option>
                                                    25
                                                </option>
                                                <option>
                                                    26
                                                </option>
                                                <option>
                                                    27
                                                </option>
                                                <option>
                                                    28
                                                </option>
                                                <option>
                                                    29
                                                </option>
                                                <option>
                                                    30
                                                </option>
                                            </Input>
                                        </Col>

                                        <Label
                                            for="exampleSelect"
                                            sm={3}>
                                            Тип
                                        </Label>
                                        <Col sm={2}>
                                            <Input
                                                defaultValue={type === undefined ? 0 : type}
                                                id="type"
                                                name="type"
                                                type="select">
                                                <option>
                                                </option>
                                                <option>
                                                    гуманоид
                                                </option>
                                                <option>
                                                    аберрация
                                                </option>
                                                <option>
                                                    монстр
                                                </option>
                                                <option>
                                                    нежить
                                                </option>
                                                <option>
                                                    зверь
                                                </option>

                                                <option>
                                                    великан
                                                </option>
                                                <option>
                                                    конструкт
                                                </option>
                                                <option>
                                                    небожитель
                                                </option>
                                                <option>
                                                    слизь
                                                </option>
                                                <option>
                                                    дракон
                                                </option>
                                                <option>
                                                    растение
                                                </option>
                                                <option>
                                                    демон
                                                </option>
                                                <option>
                                                    рой крошечных зверей
                                                </option>

                                                <option>
                                                    элементаль
                                                </option>
                                                <option>
                                                    фея
                                                </option>
                                                <option>
                                                    исчадие
                                                </option>
                                            </Input>
                                        </Col>
                                        <Label
                                            for="exampleSelect"
                                            sm={3}>
                                            Место обитания
                                        </Label>
                                        <Col sm={2}>
                                            <Input
                                                defaultValue={biom === undefined ? 0 : biom}
                                                id="biom"
                                                name="biom"
                                                type="select">
                                                <option>
                                                </option>
                                                <option>
                                                    Холмы
                                                </option>
                                                <option>
                                                    Побережье
                                                </option>
                                                <option>
                                                    Подземье
                                                </option>
                                                <option>
                                                    Болота
                                                </option>
                                                <option>
                                                    Лес
                                                </option>
                                                <option>
                                                    Заполярье
                                                </option>
                                                <option>
                                                    Равнина
                                                </option>
                                                <option>
                                                    Город
                                                </option>
                                                <option>
                                                    Горы
                                                </option>
                                                <option>
                                                    Пустыня
                                                </option>
                                            </Input>
                                        </Col>
                                        <Label
                                            for="exampleSelect">
                                        </Label>
                                        <Col
                                            sm={{
                                                size: 1
                                            }}>
                                            <Button>
                                                Поиск
                                            </Button>
                                        </Col>
                                        <Label
                                            for="exampleSelect">
                                        </Label>
                                        <Col>
                                            <Button onClick={() => {
                                                const url = new URL(window.location);
                                                url.searchParams.delete('cr');
                                                url.searchParams.delete('biom');
                                                url.searchParams.delete('type');

                                                window.history.replaceState(null, null, url)
                                                navigate(`/monsters`)
                                            }}>
                                                Очистить
                                            </Button>
                                        </Col>
                                    </FormGroup>
                                </Form>

                            </AccordionBody>
                        </AccordionItem>
                    </UncontrolledAccordion>
                </div>
            </div>

            <Row>
                {MonstersJson.map((nt, index) => {
                    if ((biom === undefined || biom === '' || nt.bioms.join(', ').toLowerCase().includes(biom.toLowerCase())) &&
                            (cr === undefined || cr === '' || nt?.cr === cr) &&
                            (type === undefined || type === '' || nt?.type.toLowerCase() === type?.toLowerCase())) {

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
                    }
                )
                }
            </Row>
        </div>
    );
};

export default Monsters;
