import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Nav from 'react-bootstrap/Nav'

export class Works extends Component {
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
                                    <th>Оценка</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>4</td>
                                    <td id="name__works"><Nav.Link href="/Execution4">Определение радиуса кривизны линзы с помощью колец Ньютона</Nav.Link></td>
                                    <td>проверено</td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td id="name__works"><Nav.Link href="/Execution11">Измерение длины световой волны с помощью дифракционной решетки</Nav.Link></td>
                                    <td>отправлено</td>
                                </tr>
                                <tr>
                                    <td>16</td>
                                    <td id="name__works"><Nav.Link href="/Execution">Измерение оптической разности хода интерферирующих лучей</Nav.Link></td>
                                    <td>проверено</td>
                                </tr>
                                <tr>
                                    <td>№</td>
                                    <td id="name__works">текст</td>
                                    <td>не готово</td>
                                </tr>
                                <tr>
                                    <td>№</td>
                                    <td id="name__works">текст</td>
                                    <td>не готово</td>
                                </tr>
                                <tr>
                                    <td>№</td>
                                    <td id="name__works">текст</td>
                                    <td>не готово</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        );
    }
}
