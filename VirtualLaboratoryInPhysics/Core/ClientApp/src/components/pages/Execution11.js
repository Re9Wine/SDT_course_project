import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

export class Execution11 extends Component {
    static displayName = Execution11.name;

    state = {
        isDragging: false,
        isDragging: false,
        verticalLineLeft: 0,
        mousePosition2: 700,
        diffractionPatternLeft: 0, // начальное значение координаты left
        mousePosition: 70, // координаты мыши по горизонтали
      };
    
      handleMouseDown = (event) => {
        event.preventDefault();
        this.setState({ isDragging: true });
      };

      handleMouseDown2 = (event) => {
        event.preventDefault();
        this.setState({ isDragging2: true });
      };
    
      handleMouseMove = (event) => {
        if (this.state.isDragging) {
          const diffractionPatternLeft = this.state.diffractionPatternLeft + event.clientX - this.state.mousePosition;
          this.setState({ diffractionPatternLeft, mousePosition: event.clientX });
        }
      };

      handleMouseMove2 = (event) => {
        if (this.state.isDragging2) {
          const verticalLineLeft = this.state.verticalLineLeft + event.clientX - this.state.mousePosition2;
          this.setState({verticalLineLeft, mousePosition2: event.clientX });
        }
      };
    
      handleMouseUp = () => {
        this.setState({ isDragging: false });
      };

      handleMouseUp2 = () => {
        this.setState({ isDragging2: false });
      };

    render() {
        const { diffractionPatternLeft, verticalLineLeft } = this.state;

        return (
            <section className="wrapper">
                <div className="Laborator__setup">
                    <p className="lab11__titile">Лабораторная работа №11</p>
                    <p className="lab11__name">Измерение длины световой волны с помощью дифракционной решетки</p>
                    <p className="lab11_text1">На фоне экрана по обе стороны от отверстия (окна) будут видны дифракционные спектры. Причем фиолетовая часть каждого спектра будет обращена к середине шкалы (к окну). <br />
                        Для получения более точных результатов рекомендуется расстояние l установить как можно большим и, передвигая ползунок с экраном по рейке, стремиться начало или конец спектра совместить с делением шкалы.</p>
                    <div className="Laborator__setup__block" onMouseMove={this.handleMouseMove} onMouseUp={this.handleMouseUp}>
                        <img id='Laborator__setup__block' src='/img/ruler.jpg' alt='линейка'></img>
                        <div className="Diffraction__pattern" onMouseDown={this.handleMouseDown}
            style={{ left: `${diffractionPatternLeft}px` }}></div>
                    </div>
                </div>

                <div className="Border__betwee__zones"></div>

                <div className="measurements">
                    <p className="lab11_text2">Определить длины красных, желтых, зеленых и фиолетовых лучей.
                        Для этого измерить по шкале расстояния ОВ и ОВ1 от середины шкалы до
                        границы видимости лучей определенного цвета в первых спектрах, расположенных по обе стороны от окна. <br />
                        Если полученные значения для левого и правого спектров различны,
                        то необходимо найти их среднее значение.</p>
                    <div className="Explanation" onMouseMove={this.handleMouseMove2} onMouseUp={this.handleMouseUp2}>
                        <img src='/img/measurement.jpg' alt='measurement'/>
                        <div className='vertical__line' onMouseDown={this.handleMouseDown2}
            style={{ left: `${verticalLineLeft}px` }}></div>
                    </div>
                </div>

                <div className="Border__betwee__zones"></div>

                <div className="Diffraction__pattern__block">
                    <div className="lab11_text3">
                        <p>По шкале бруска определить расстояние l от решетки до экрана. Результаты измерений занести в таблицу.
                            По формуле определить значение tg φ.</p>
                        <p id="formula">tgφ = OB / l (9)</p>
                        <p>Так как угол φ мал, то без существенной погрешности можно допустить, что tg φ ≈ sin φ. Тогда с учетом формулы (6) получим формулу для расчета длины волны:</p>
                        <p id="formula">λ = b * sinφ = (d * OB) / (k * l) (10)</p>
                        <p>По полученным значениям длины волны определить частоту колебаний по формуле:</p>
                        <p id="formula">v = c / λ (11)</p>
                        <p>где с – скорость света в вакууме, с = 3∙108 м/с.
                            Результаты вычислений занести в таблицу.</p>
                    </div>
                    <div className="scale__hole">
                        <div className="hole">
                            <img src='/img/scheme.png' alt='scheme'/>
                            </div>
                    </div>
                </div>

                <div className="Border__betwee__zones"></div>

                <div className="table__and__conclusion">
                    <p className="lab11__text4">Определить абсолютные и относительные погрешности для всех
                        длин волн. <br />
                        Так как в формуле (10) k и n – постоянные величины, то погрешность определения длины волны зависит лишь от точности измерений
                        l и ОВ. <br />
                        Сравнить экспериментальные значения длин волн с табличными
                        значениями.</p>
                    <Table  className="lab11__table">
                        <thead>
                            <tr className="table__tittle_lab11">
                                <th rowspan="2">Порядок спектра, k</th>
                                <th colspan="3">Видимая граница спектра по шкале, м</th>
                                <th rowspan="2">Длина волны, м</th>
                                <th rowspan="2">Расстояние l, м</th>
                                <th rowspan="2">Частота колебаний, Гц</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th /><th>Слева</th><th>Справа</th><th>Среднее значение</th><th /><th /><th />
                            </tr>
                            <tr>
                                <td>1</td>
                                <td><input type="text" name="text" className="cell__lab11" /></td>
                                <td><input type="text" name="text" className="cell__lab11"/></td>
                                <td><input type="text" name="text" className="cell__lab11" /></td>
                                <td><input type="text" name="text" className="cell__lab11" /></td>
                                <td><input type="text" name="text" className="cell__lab11" /></td>
                                <td><input type="text" name="text" className="cell__lab11" /></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td><input type="text" name="text" className="cell__lab11" /></td>
                                <td><input type="text" name="text" className="cell__lab11" /></td>
                                <td><input type="text" name="text" className="cell__lab11" /></td>
                                <td><input type="text" name="text" className="cell__lab11" /></td>
                                <td><input type="text" name="text" className="cell__lab11" /></td>
                                <td><input type="text" name="text" className="cell__lab11" /></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td><input type="text" name="text" className="cell__lab11" /></td>
                                <td><input type="text" name="text" className="cell__lab11" /></td>
                                <td><input type="text" name="text" className="cell__lab11" /></td>
                                <td><input type="text" name="text" className="cell__lab11" /></td>
                                <td><input type="text" name="text" className="cell__lab11" /></td>
                                <td><input type="text" name="text" className="cell__lab11" /></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td><input type="text" name="text" className="cell__lab11" /></td>
                                <td><input type="text" name="text" className="cell__lab11" /></td>
                                <td><input type="text" name="text" className="cell__lab11" /></td>
                                <td><input type="text" name="text" className="cell__lab11" /></td>
                                <td><input type="text" name="text" className="cell__lab11" /></td>
                                <td><input type="text" name="text" className="cell__lab11" /></td>
                            </tr>
                        </tbody>
                    </Table>
                    <form className="form__lab11">
                        <input className="form__conclusion__lab11" type="text" name="text" placeholder="Введите вывод..." />
                        <input className="form__submit__lab11" type="submit" name="submit" value="отправить" />
                    </form>
                </div>
            </section>
        );
    }
}