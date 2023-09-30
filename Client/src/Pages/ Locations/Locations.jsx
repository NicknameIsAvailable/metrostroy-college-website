import React, {useEffect, useState} from 'react';
import styles from "./Locations.module.css"
import "../../App.css"
import {ReactComponent as Delete} from "../../Icons/DeleteIcon.svg";
import {ReactComponent as Edit} from "../../Icons/EditIcon.svg";
import Modal from "../../Components/Modal";
import axios from "../../axios";

const Locations = () => {
    const [addLocationModalOpen, setAddLocationModalOpen] = useState(false)
    const [editLocationModalOpen, setEditLocationModalOpen] = useState(false)
    const [deleteLocationModalOpen, setDeleteLocationModalOpen] = useState(false)
    const [locations, setLocations] = useState([])
    const [locationName, setLocationName] = useState("")
    const [locationId, setLocationId] = useState(0)

    const getAllLocations = async () => {
        try {
            const data = await axios.post("/selectListLocations.php")
            setLocations(data.data.locations)
        } catch (e) {
            alert('Не удалось получить площадки')
            console.log(e)
        }
    }

    const deleteLocation = async (id) => {
        try {
            setDeleteLocationModalOpen(false)
            const data = await axios.delete(`/saveLocationAddress.php?id=${id}`)
            const newArray = locations.filter(location => location.id !== id)
            setLocations(newArray)
        } catch (e) {
            alert('Не удалось удалить площадку')
            console.log(e)
        }
    }

    const updateLocation = async () => {
        try {
            setAddLocationModalOpen(false)
            const data = await axios.patch(`/saveLocationAddress.php?id=${locationId}`, {name: locationName})
            setLocations([...locations, {id: locationId, name: locationName}])
        } catch (e) {
            alert('Не удалось обновить площадку')
            console.log(e)
        }
    }

    const createLocation = async () => {
        try {
            setAddLocationModalOpen(false)
            const data = await axios.post("/saveLocationAddress.php", {name: locationName})
            getAllLocations()
        } catch (e) {
            alert('Не удалось добавить площадку')
            console.log(e)
        }
    }

    useEffect(() => {
        getAllLocations();
    }, []);


    return (
        <div className={styles.locations}>
            <div className={styles.container}>
                <Modal visible={deleteLocationModalOpen} setVisible={setDeleteLocationModalOpen}>
                    <h1>
                        Удалить площадку?
                    </h1>
                    <div className={styles.location}>
                        {locationName}
                    </div>
                    <div className={styles.buttons}>
                        <button className="outlined-button" onClick={() => deleteLocation(locationId)}>
                            Удалить
                        </button>
                        <button className="outlined-button" onClick={() => setDeleteLocationModalOpen(false)}>
                            Не удалять
                        </button>
                    </div>
                </Modal>

                <Modal visible={addLocationModalOpen} setVisible={setAddLocationModalOpen}>
                    <h1>
                        Новая площадка
                    </h1>
                    <input className="underlined-input" placeholder="Введите адрес новой площадки" onChange={(e) => setLocationName(e.target.value)}/>
                    <button className="outlined-button" onClick={createLocation}>
                        Добавить площадку
                    </button>
                </Modal>

                <Modal visible={editLocationModalOpen} setVisible={setEditLocationModalOpen}>
                    <h1>
                        Изменить площадку
                    </h1>
                    <input className="underlined-input" placeholder="Введите новое название площадки" onChange={(e) => setLocationName(e.target.value)}/>
                    <button className="outlined-button" onClick={updateLocation}>
                        Обновить площадку
                    </button>
                </Modal>
                <div>
                    <h1 style={{textAlign: 'center'}}>Площадки</h1>
                    <div className={styles.locationsList}>
                        {locations.length > 0 ?
                            locations.map((location, index) =>
                            <div className={styles.location}>
                                <p>
                                    {location.name}
                                </p>

                                <div className={styles.buttons}>
                                    <button className={styles.delete} onClick={() => {
                                        setLocationName(location.name)
                                        setLocationId(location.id)
                                        setDeleteLocationModalOpen(true)
                                    }}>
                                        <Delete/>
                                    </button>
                                    <button className={styles.edit} onClick={() => {
                                        setEditLocationModalOpen(true)
                                        setLocationId(location.id)
                                    }}>
                                        <Edit/>
                                    </button>
                                </div>
                            </div>
                        ) :
                            <h2>Нет площадок</h2>
                        }

                        <button className="outlined-button" style={{marginTop: 16}} onClick={() => setAddLocationModalOpen(true)}>
                            Добавить площадку
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Locations;