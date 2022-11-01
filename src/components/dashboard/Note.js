import {
    Card,
    CardBody,
    CardImg,
    CardSubtitle,
    CardText,
    CardTitle,
    Button,
} from "reactstrap";

const Note = (props) => {
    return (
        <Card>
            <CardImg alt="Card image cap" src={props.image}/>
            <CardBody className="p-4">
                <CardTitle tag="h5">{props.title}</CardTitle>
                <CardSubtitle className="text-primary">{props.subtitle}</CardSubtitle>
                <CardText className="mt-3 truncate-text">
                    <div className="mt-3 truncate-text" dangerouslySetInnerHTML={{__html: props.text}}/>
                </CardText>
                <Button color={props.color}>Read More</Button>
            </CardBody>
        </Card>
    );
};

export default Note;
