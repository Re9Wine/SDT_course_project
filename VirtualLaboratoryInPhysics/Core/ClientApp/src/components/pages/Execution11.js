import { event } from 'jquery';
import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

export class Execution11 extends Component {
    static displayName = Execution11.name;

    constructor(props){
        super(props),
        this.state = {
            isDragging: false,
            isDragging2: false,
            verticalLineLeft: 0,
            mousePosition2: 700,
            diffractionPatternLeft: 0, // начальное значение координаты left
            mousePosition: 70, // координаты мыши по горизонтали
            formData: {
                "<kl1>": 0,
                "<kr1>": 0,
                "<ka1>": 0,
                "<x1>": 0,
                "<l1>": 0,
                "<y1>": 0,
                "<kl2>": 0,
                "<kr2>": 0,
                "<ka2>": 0,
                "<x2>": 0,
                "<l2>": 0,
                "<y2>": 0,
                "<kl3>": 0,
                "<kr3>": 0,
                "<ka3>": 0,
                "<x3>": 0,
                "<l3>": 0,
                "<y3>": 0,
                "<kl4>": 0,
                "<kr4>": 0,
                "<ka4>": 0,
                "<x4>": 0,
                "<l4>": 0,
                "<y4>": 0,
            }
          }
        }
    
        submit = async (event) => {
         event.preventDefault();

         try{
            await fetch("Report", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "formData": this.state.formData,
                    "report": {
                        "LaboratoryWorkId": "BC09F700-DCD0-401C-034E-08DB66AF2CBB",
                        "UserId": "CC689CF9-23F4-4DF9-40DD-08DB66A02F4C",
                        "Content": "admin_Thermodynamic_System.docx"
                    }
                })
            })
            .then(async response => {
                if(response.status == 200){
                    this.setState({formData : {
                        "<kl1>": 0,
                        "<kr1>": 0,
                        "<ka1>": 0,
                        "<x1>": 0,
                        "<l1>": 0,
                        "<y1>": 0,
                        "<kl2>": 0,
                        "<kr2>": 0,
                        "<ka2>": 0,
                        "<x2>": 0,
                        "<l2>": 0,
                        "<y2>": 0,
                        "<kl3>": 0,
                        "<kr3>": 0,
                        "<ka3>": 0,
                        "<x3>": 0,
                        "<l3>": 0,
                        "<y3>": 0,
                        "<kl4>": 0,
                        "<kr4>": 0,
                        "<ka4>": 0,
                        "<x4>": 0,
                        "<l4>": 0,
                        "<y4>": 0,
                        }
                    })
                    alert("Отчет отправлен")
                }
                else{
                    throw "Ошибка запроса"
                }
            })
         }  
         catch(error){
            console.log(error)
         }
        }

      handleTableChange = (key, value) => {
        let copy = Object.assign(new Map(), this.state.formData);

        copy[key] = value;

        this.setState({ formData: copy });
      }

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
            <section className="wrapper-ex11">
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
                                <th rowSpan="2">Порядок спектра, k</th>
                                <th colSpan="3">Видимая граница спектра по шкале, м</th>
                                <th rowSpan="2">Длина волны, м</th>
                                <th rowSpan="2">Расстояние l, м</th>
                                <th rowSpan="2">Частота колебаний, Гц</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th /><th>Слева</th><th>Справа</th><th>Среднее значение</th><th /><th /><th />
                            </tr>
                            <tr>
                                <td>1</td>
                                <td><input type="number" name="text" className="cell__lab11" value={this.state.formData['<kl1>']} onChange={(event) => this.handleTableChange('<kl1>', event.target.value)} /></td>
                                <td><input type="number" name="text" className="cell__lab11" value={this.state.formData['<kr1>']} onChange={(event) => this.handleTableChange('<kr1>', event.target.value)} /></td>
                                <td><input type="number" name="text" className="cell__lab11" value={this.state.formData['<ka1>']} onChange={(event) => this.handleTableChange('<ka1>', event.target.value)} /></td>
                                <td><input type="number" name="text" className="cell__lab11" value={this.state.formData['<x1>']} onChange={(event) => this.handleTableChange('<x1>', event.target.value)} /></td>
                                <td><input type="number" name="text" className="cell__lab11" value={this.state.formData['<l1>']} onChange={(event) => this.handleTableChange('<l1>', event.target.value)} /></td>
                                <td><input type="number" name="text" className="cell__lab11" value={this.state.formData['<y1>']} onChange={(event) => this.handleTableChange('<y1>', event.target.value)} /></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td><input type="number" name="text" className="cell__lab11" value={this.state.formData['<kl2>']} onChange={(event) => this.handleTableChange('<kl2>', event.target.value)} /></td>
                                <td><input type="number" name="text" className="cell__lab11" value={this.state.formData['<kr2>']} onChange={(event) => this.handleTableChange('<kr2>', event.target.value)} /></td>
                                <td><input type="number" name="text" className="cell__lab11" value={this.state.formData['<ka2>']} onChange={(event) => this.handleTableChange('<ka2>', event.target.value)} /></td>
                                <td><input type="number" name="text" className="cell__lab11" value={this.state.formData['<x2>']} onChange={(event) => this.handleTableChange('<x2>', event.target.value)} /></td>
                                <td><input type="number" name="text" className="cell__lab11" value={this.state.formData['<l2>']} onChange={(event) => this.handleTableChange('<l2>', event.target.value)} /></td>
                                <td><input type="number" name="text" className="cell__lab11" value={this.state.formData['<y2>']} onChange={(event) => this.handleTableChange('<y2>', event.target.value)} /></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td><input type="number" name="text" className="cell__lab11" value={this.state.formData['<kl3>']} onChange={(event) => this.handleTableChange('<kl3>', event.target.value)} /></td>
                                <td><input type="number" name="text" className="cell__lab11" value={this.state.formData['<kr3>']} onChange={(event) => this.handleTableChange('<kr3>', event.target.value)} /></td>
                                <td><input type="number" name="text" className="cell__lab11" value={this.state.formData['<ka3>']} onChange={(event) => this.handleTableChange('<ka3>', event.target.value)} /></td>
                                <td><input type="number" name="text" className="cell__lab11" value={this.state.formData['<x3>']} onChange={(event) => this.handleTableChange('<x3>', event.target.value)} /></td>
                                <td><input type="number" name="text" className="cell__lab11" value={this.state.formData['<l3>']} onChange={(event) => this.handleTableChange('<l3>', event.target.value)} /></td>
                                <td><input type="number" name="text" className="cell__lab11" value={this.state.formData['<y3>']} onChange={(event) => this.handleTableChange('<y3>', event.target.value)} /></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td><input type="number" name="text" className="cell__lab11" value={this.state.formData['<kl4>']} onChange={(event) => this.handleTableChange('<kl4>', event.target.value)} /></td>
                                <td><input type="number" name="text" className="cell__lab11" value={this.state.formData['<kr4>']} onChange={(event) => this.handleTableChange('<kr4>', event.target.value)} /></td>
                                <td><input type="number" name="text" className="cell__lab11" value={this.state.formData['<ka4>']} onChange={(event) => this.handleTableChange('<ka4>', event.target.value)} /></td>
                                <td><input type="number" name="text" className="cell__lab11" value={this.state.formData['<x4>']} onChange={(event) => this.handleTableChange('<x4>', event.target.value)} /></td>
                                <td><input type="number" name="text" className="cell__lab11" value={this.state.formData['<l4>']} onChange={(event) => this.handleTableChange('<l4>', event.target.value)} /></td>
                                <td><input type="number" name="text" className="cell__lab11" value={this.state.formData['<y4>']} onChange={(event) => this.handleTableChange('<y4>', event.target.value)} /></td>
                            </tr>
                        </tbody>
                    </Table>
                    <form className="form__lab11" onSubmit={this.submit}>
                        <input className="form__conclusion__lab11" type="text" name="text" placeholder="Введите вывод..." />
                        <input className="form__submit__lab11" type="submit" name="submit" value="отправить" />
                    </form>
                </div>
            </section>
        );
    }
}