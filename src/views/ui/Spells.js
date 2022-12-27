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
import SpellsJson from "../../static/spells.json";
import React from "react";
import {useNavigate} from "react-router";
import MetaTags from "react-meta-tags";

const qs = require('query-string');


const Spells = () => {
    const query = qs.parse(window.location.search);
    console.log(window.location.search)
    let level = query.level
    let school = query.school
    let clazz = query.clazz

    let navigate = useNavigate();
    return (
        <div>
            <div className="wrapper">
                <MetaTags>
                    <title>Заклинания</title>
                    <meta id="og-title" property="og:title" content="Заклинания"/>
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
                                            Уровень
                                        </Label>
                                        <Col sm={2}>
                                            <Input
                                                defaultValue={level === undefined ? undefined : level}
                                                id="level"
                                                name="level"
                                                type="select">
                                                <option>
                                                </option>
                                                <option>
                                                    0
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
                                            </Input>
                                        </Col>

                                        <Label
                                            for="exampleSelect"
                                            sm={3}>
                                            Школа
                                        </Label>
                                        <Col sm={2}>
                                            <Input
                                                defaultValue={school === undefined ? 0 : school}
                                                id="school"
                                                name="school"
                                                type="select">
                                                <option>
                                                </option>
                                                <option>
                                                    Очарование
                                                </option>
                                                <option>
                                                    Воплощение
                                                </option>
                                                <option>
                                                    Преобразование
                                                </option>
                                                <option>
                                                    Некромантия
                                                </option>
                                                <option>
                                                    Ограждение
                                                </option>
                                                <option>
                                                    Проявление
                                                </option>
                                                <option>
                                                    Иллюзия
                                                </option>
                                                <option>
                                                    Прорицание
                                                </option>
                                                <option>
                                                    Вызов
                                                </option>
                                            </Input>
                                        </Col>
                                        <Label
                                            for="exampleSelect"
                                            sm={3}>
                                            Класс
                                        </Label>
                                        <Col sm={2}>
                                            <Input
                                                defaultValue={clazz === undefined ? 0 : clazz}
                                                id="clazz"
                                                name="clazz"
                                                type="select">
                                                <option>
                                                </option>
                                                <option>
                                                    Жрец
                                                </option>
                                                <option>
                                                    Друид
                                                </option>
                                                <option>
                                                    Бард
                                                </option>
                                                <option>
                                                    Паладин
                                                </option>
                                                <option>
                                                    Рейнджер
                                                </option>
                                                <option>
                                                    Чародей
                                                </option>
                                                <option>
                                                    Колдун
                                                </option>
                                                <option>
                                                    Волшебник
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
                                                url.searchParams.delete('level');
                                                url.searchParams.delete('clazz');
                                                url.searchParams.delete('school');

                                                window.history.replaceState(null, null, url)
                                                navigate(`/spells`)
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

            <br/>
            <Row>
                {SpellsJson.map((nt, index) => {
                    var cl = nt.spellClass.map((nt2) => {
                        return nt2.name
                    }).join(', ');

                    if ((level === undefined || level === '' || nt.level <= level) && (level === undefined || level === '' || nt.level >= level) &&
                        (school === undefined || school === '' || nt.school?.toLowerCase() === school?.toLowerCase()) &&
                        (clazz === undefined || clazz === '' || cl?.toLowerCase().includes(clazz?.toLowerCase()))) {
                        return (
                            <Col sm="6" lg="6" xl="3" key={index}>
                                <Card>
                                    <CardBody className="p-4">
                                        <CardTitle tag="h5">{nt.name}</CardTitle>
                                        <CardSubtitle
                                            className="text-primary">Время накладывания: {nt.school}</CardSubtitle>
                                        <CardSubtitle
                                            className="text-primary">Уровень: {nt.level}</CardSubtitle>
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
                    }
                })}
            </Row>
        </div>
    );
};

export default Spells;
