import React, { Component } from 'react';

export class HomePage extends Component {
    static displayName = HomePage.name;
    render() {
        return (
                    <section>
                <div className="container-Home">
                    <div className="img_home1"></div>
                    <p className="text_home1">Физика — это попытка человека исследовать и объяснить самые фундаментальные законы природы. Физики пытаются создать математическую модель, которая описывает экспериментально наблюдаемое явление. Если данная модель адекватно описывает явление и позволяет сделать прогнозы, которые могут быть доказаны экспериментально, то мы называем это физической теорией или физическим законом.
                    </p>
                    <div className="img_home2"></div>
                    <p className="text_home2">Виртуальная лаборатория представляет собой программное обеспечение или даже целый программно-аппаратный комплекс, который позволяет проводить разного рода эксперименты без прямого контакта с реальным оборудованием или объектом исследования. Виртуальная лаборатория предназначена для организации дистанционного образования, проведения опытов и лабораторных работ по предмету «Физика»
                    </p>

                            <div className="container-Advantages">
                                <div className="adv">
                                    <div className="img_icon1"></div>
                            <p className="text-adv">СВЯЗЬ С ПРЕВОДАВАТЕЛЕМ</p>
                                </div>
                        <div className="adv">
                            <div className="img_icon2"></div>
                                    <p className="text-adv">ЛЕГКИЙ ДОСТУП</p>
                                </div>
                        <div className="adv">
                            <div className="img_icon3"></div>
                                    <p className="text-adv">ДИСТАНЦИОННОЕ ОБУЧЕНИЕ</p>
                                </div>
                            </div>
                        </div>
                    </section>
        );
    }
}
