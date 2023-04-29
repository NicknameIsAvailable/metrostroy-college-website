import React from 'react';
import "./Footer.css";

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    const contactInfo = [
        {
            title: "Санкт-Петербургское государственное бюджетное профессиональное образовательное учреждение «Колледж метростроя»"
        },
        {
            title: "195276, г. Санкт-Петербург, ул. Демьяна Бедного, дом 21, литер А",
            link: "https://yandex.ru/maps/-/CCUzRQx2~A",
            target: "_blank"
        },
        {
            title: "(812) 558-12-28"
        },
        {
            title: "kolm@obr.gov.spb.ru",
            link: "mailto:kolm@obr.gov.spb.ru",
            target: "_blank"
        }
    ];

    const resources = [
        {
            title: "Единая коллекция цифровых образовательных ресурсов",
            link: "http://school-collection.edu.ru/",
            target: "_blank"
        },
        {
            title: "Закон \"Об Образовании в РФ\"",
            link: "https://www.consultant.ru/document/cons_doc_LAW_140174/",
            target: "_blank"
        },
        {
            title: "Государственная программа Российской Федерации \"Развитие образования\"",
            link: "https://docs.edu.gov.ru/document/3a928e13b4d292f8f71513a2c02086a3/download/1337/",
            target: "_blank"
        },
        {
            title: "Министерство просвещения Российской Федерации",
            link: "https://edu.gov.ru/",
            target: "_blank"
        },
        {
            title: "Министерство науки и высшего образования Российской Федерации",
            link: "https://minobrnauki.gov.ru/",
            target: "_blank"
        },
        {
            title: "Независимой оценки качества оказания услуг организациями",
            link: "https://bus.gov.ru/",
            target: "_blank"
        },
        {
            title: "Телефоны горячей линии СПО",
            link: "https://disk.yandex.ru/i/8EOhda6buSkKVg",
            target: "_blank"
        }
    ];

    const renderContactInfo = () => {
        return contactInfo.map((info, index) => (
            <h3 key={index}>
                {info.link ? (
                    <a href={info.link} target={info.target}>
                        {info.title}
                    </a>
                ) : (
                    info.title
                )}
            </h3>
        ));
    };

    const renderResources = () => {
        return resources.map((resource, index) => (
            <div key={index}>
                <a href={resource.link} target={resource.target}>
                    {resource.title}
                </a>
            </div>
        ));
    };

    return (
        <footer>
            <div>
                {renderContactInfo()}
                <button className="outlined-button">Напишите нам</button>
            </div>
            <div>
                <p>{renderResources()}</p>
                <h2>@ колледж метростроя {year}</h2>
            </div>
        </footer>
    );
};

export default Footer;