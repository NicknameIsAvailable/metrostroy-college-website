import React from 'react';
import "./Footer.css";
import {ReactComponent as FullLogoWhite} from "../../Icons/FullLogoWhite.svg";

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer>
            <div className="container">
                <div>
                    <FullLogoWhite/>
                    <h3>
                        Санкт-Петербургское государственное бюджетное профессиональное образовательное учреждение «Колледж метростроя»
                    </h3>

                    <h3>
                        <a href="https://yandex.ru/maps/-/CCUzRQx2~A" target="_blank">
                            195276, г. Санкт-Петербург,
                            ул. Демьяна Бедного, дом 21, литер А
                        </a>
                    </h3>

                    <h3>
                        (812) 558-12-28
                    </h3>

                    <h3>
                        <a href="mailto:kolm@obr.gov.spb.ru" target="_blank">
                            kolm@obr.gov.spb.ru
                        </a>
                    </h3>

                    <button className="outlined-button">
                        Напишите нам
                    </button>

                    <p>
                        @ колледж метростроя {year}
                    </p>
                </div>
                <div>
                    <h3>Ссылки</h3>
                    <p>
                        <a href="http://school-collection.edu.ru/" target="_blank">
                            Единая коллекция цифровых образовательных ресурсов
                        </a>

                        <br/>
                        <a href="https://www.consultant.ru/document/cons_doc_LAW_140174/" target="_blank">
                            Закон "Об Образовании в РФ"
                        </a>

                        <br/>
                        <a href="https://docs.edu.gov.ru/document/3a928e13b4d292f8f71513a2c02086a3/download/1337/" target="_blank">
                            Государственная программа Российской Федерации "Развитие образования"
                        </a>

                        <br/>
                        <a href="https://edu.gov.ru/" target="_blank">
                            Министерство просвещения Российской Федерации
                        </a>

                        <br/>
                        <a href="https://minobrnauki.gov.ru/" target="_blank">
                            Министерство науки и высшего образования Российской Федерации
                        </a>

                        <br/>
                        <a href="https://bus.gov.ru/" target="_blank">
                            Независимой оценки качества оказания услуг организациями
                        </a>

                        <br/>
                        <a href="https://disk.yandex.ru/i/8EOhda6buSkKVg" target="_blank">
                            Телефоны горячей линии СПО
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;