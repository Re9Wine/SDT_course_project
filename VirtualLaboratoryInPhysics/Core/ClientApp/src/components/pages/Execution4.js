import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

export class Execution4 extends Component {
    static displayName = Execution4.name;

    render() {
        return (
            <section className="wrapper">
                <div className="block1_lab4">
                    <div className="text__lab4">
                        <p className="tittle__lab4">Лабораторная работа №4</p>
                        <p className="goal__lab4">Определение радиуса кривизны линзы с помощью колец Ньютона</p>
                        <p className="text1__lab4">Порядок выполнения работы:
                            <br /> <br />
                            1.Поместить блок с линзой и пластиной на предметный столик 1 микроскопа
                            так, чтобы точка касания нижней поверхности линзы с поверхностью пластины оказалась против объектива
                            <br /> <br />
                            2.	Осветить
                            установку с помощью настольной лампы и
                            получить интерференционную картину (кольца Ньютона) в окуляре
                            <br /> <br />
                            3. При необходимости, вращением рукоятки подрегулировать четкость картины
                            <br /> <br />
                            4.	Измерить диаметры 1, 3 и 5-го темных колец
                            <br /> <br />
                            5.	Показания, снятые в делениях шкалы микроскопа, умножить на цену деления, равную 0,018 мм и разделить на 2
                            <br /> <br />
                            6.	По формуле ,для каждой пары колец (1–3, 3–5, 1–5) вычислить радиус кривизны линзы. Длину волны принять равной λ =7∙ 10–4 мм
                            <br /> <br />
                            7. Найти среднее значение R</p>
                    </div>
                    <div className="device__block_lab4">
                        <figure className="handle1__lab4" />
                        <figure className="rectangle__lab4" />
                        <figure className="handle2__lab4" />
                    </div>
                </div>
                <div className="block2_lab4">

                </div>
                <div className="block3_lab4">

                </div>
                <div className="Border__betwee__zones"></div>
            </section>
        );
    }
}