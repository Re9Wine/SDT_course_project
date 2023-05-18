import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import { useDrag, useDrop } from 'react-dnd';

export class Execution extends Component {
    static displayName = Execution.name;
    
    state = {
        imageIndex: 0,
        imageIndex2: 0,
        selectedPosition: null,
        selectedImageIndex: null,
        selectedImageIndex2: null
      };
      
      images = [
        "clear.jpg",
        "/img/1-1.jpg",
        "/img/1-2.jpg" 
      ];
      
      images2 = [
        "clear.jpg",
        "/img/2-1.jpg",
        "/img/2-2.jpg" 
      ];

      handleButtonClick = () => {
        const { imageIndex } = this.state; 
        this.setState({ imageIndex: (imageIndex + 1) % this.images.length });
      };

      handleButtonClick2 = () => {
        const { imageIndex2 } = this.state;
        this.setState({ imageIndex2: (imageIndex2 + 1) % this.images2.length });
      };

    handleButtonClick3 = (position) => {
        const selectedImageIndex = position === "1,514" ? 1 : position === "5,258" ? 2 : position === "10,457" ? 3 : 2;
        this.setState({ selectedPosition: position, selectedImageIndex });
      };
    
    handleButtonClick4 = (position) => {
        const selectedImageIndex2 = position === "10,457" ? 1 : position === "1" ? 2 : position === "10,457" ? 3 : 2;
        this.setState({ selectedPosition: position, selectedImageIndex2 });
    };

    render() {
        const { imageIndex, imageIndex2, selectedPosition, selectedImageIndex, selectedImageIndex2  } = this.state;          
        return (
            <section className="wrapper">
                <div className="work-block">
                    
                    <div className="work__text">
                        <p className="work__title">Лабораторная работа №16</p>
                        <p className="work__name">Измерение оптической разности хода интерферирующих лучей.</p>
                        <p className="work__order">Порядок выполнения работы:</p>
                        <p className="work">1.	При помощи рукоятки 1 скрестить систему поляризатор-анализатор под углом 90° (свет не проходит). Получить изображение.

                            <br /><br />2.	При помощи рукоятки 1 снова повернуть систему поляризатор-анализатор под углом 90° (свет проходит). Получить изображение.

                            <br /><br />3.	При помощи рукоятки 2 снова скрестить систему поляризатор-анализатор под углом 90° (свет проходит). Получить изображение.

                            <br /><br />4.	При помощи рукоятки 2 снова повернуть систему поляризатор-анализатор под углом 90° (свет не проходит). Получить изображение.

                            <br /><br />5.	После каждого получения изображения оно должно быть обработано в окне программы "Polarize", а расчеты перенесены в таблицу.
                        </p>
                    </div>
                    <div className="work__device">
                        <figure className="rectangle">поляризатор</figure>
                        <button onClick={this.handleButtonClick} className="handle1">рукоятка 1</button>
                        <button onClick={this.handleButtonClick2} className="handle2">рукоятка 2</button>
                    </div>
                </div>

                <div className="program__block">
                    <div className="program__screen">
                        <div className="arrow1"></div>
                        <figure className="program__monitor">
                        <img src = {this.images[imageIndex]} />
                        <img src = {this.images2[imageIndex2]} />
                        </figure>
                        <div className="arrow2"></div>
                    </div>

                    <div className="program__program">
                        <p className="program__title">Расчет распределения напряжений</p>
                        <figure className="program_line" />

                        <div className="programm__images">
                            <div className="programm__firstPosition">
                                <p>Первое положение</p>
                                <div className="firstPosition__crossed">
                                {selectedImageIndex === 1 && <img className='firstPosition__crossed__img' src={this.images[selectedImageIndex]} />}
                                </div>
                                    <p className="firstPosition__crossed__text">скрещенные</p>
                                <div className="firstPosition__parallel">
                                {selectedImageIndex === 2 && <img className='secondPosition__crossed__img' src={this.images[selectedImageIndex]} />}
                                </div>
                                    <p className="firstPosition__parallel__text">параллельные</p>
                            </div>
                            <div className="programm__secondPosition">
                                <p>Второе положение</p>
                                <div className="secondPosition__crossed">
                                {selectedImageIndex2 === 1 && <img className='secondPosition__crossed__img' src={this.images2[selectedImageIndex2]} />}
                                </div>
                                <p className="secondPosition__crossed__text">скрещенные</p>
                                <div className="secondPosition__parallel">
                                {selectedImageIndex2 === 2 && <img className='secondPosition__crossed__img' src={this.images2[selectedImageIndex2]} />}
                                </div>
                                <p className="secondPosition__parallel__text">параллельные</p>
                            </div>
                        </div>

                        <div className="program__calculations">
                            <figure className="program_calculations__line" />
                            <p className="program_title">РАСЧЕТЫ</p>
                            <div className="program__flex">
                                <div className="position">
                                <button onClick={() => this.handleButtonClick3('1,514')}>Положение 1.1</button>                                </div>
                                <div className="position">
                                    <button onClick={() => this.handleButtonClick3('5,258')}>Положение 1.2</button>
                                </div>
                                <div className="position">
                                    <button onClick={() => this.handleButtonClick4('10,457')}>Положение 2.1</button>
                                </div>
                                <div className="position">
                                    <button onClick={() => this.handleButtonClick4('1')}>Положение 2.2</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {selectedPosition && <p className='result'> {selectedPosition}</p>}
                </div>

                <div className="calculations">
                    <div className="calculations__formula">
                        <p className="calculations__formula__text">Найдите разность фаз между обыкновенной и необыкновенной волнами по формуле:</p>
                        <div className="calculations__formula__img" />
                    </div>
                    <p className="calculations__text">Заполните таблицу:</p>
                    <Table striped bordered hover className="calculations_table">
                        <thead>
                            <tr>
                                <th>Положение</th>
                                <th>Состояние анализатора и поляризатора</th>
                                <th>Распределение интенсивности</th>
                                <th>Разность фаз</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Скрещенные</td>
                                <td><input type="text" name="text" placeholder="введите число" /></td>
                                <td rowspan="4"><input type="text" name="text" placeholder="введите число" /></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Параллельные</td>
                                <td><input type="text" name="text" placeholder="введите число" /></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Скрещенные</td>
                                <td><input type="text" name="text" placeholder="введите число" /></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Параллельные</td>
                                <td><input type="text" name="text" placeholder="введите число" /></td>
                            </tr>
                        </tbody>
                    </Table>
                    <div>
                    </div>
                    <form className="calculations__form">
                        <p className="calculations__form__text">В выводе опишите принцип работы установки. Поясните получаемые изображения.</p>
                        <input className="calculations__form__conclusion" type="text" name="text" placeholder="Введите вывод..." />
                        <input className="calculations__form__submit" type="submit" name="submit" value="отправить" />
                    </form>
                </div>
            </section>
        );
    }
}