import React, { Component } from 'react';
import { Container, Row, Col, Table, Nav } from 'react-bootstrap'

export class Works extends Component {
    constructor(props){
        super(props)
    }
    static displayName = Works.name;

    render() {
        return (
            <Container fluid className="container__works">
                <Row className="title__works">
                    <Col >Выберите лабораторную работу, которую хотите выполнить</Col>
                </Row>
                <Row className="table__works">
                    <Col>
                        <Table striped>
                            <thead>
                                <tr className="th__works">
                                    <th>Номер</th>
                                    <th>Название</th>
                                    <th>Состояние</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>4</td>
                                    <td id="name__works"><Nav.Link href="/Execution4">Определение радиуса кривизны линзы с помощью колец Ньютона</Nav.Link></td>
                                    <td>не пройдена</td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td id="name__works"><Nav.Link href="/Execution11">Измерение длины световой волны с помощью дифракционной решетки</Nav.Link></td>
                                    <td>проверена</td>
                                </tr>
                                <tr>
                                    <td>16</td>
                                    <td id="name__works"><Nav.Link href="/Execution">Измерение оптической разности хода интерферирующих лучей</Nav.Link></td>
                                    <td>не пройдена</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        );
    }
}
