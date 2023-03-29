import React from 'react';
import "../Schedule/Components/GroupsList/GroupsList.css";

const GroupsListAdmin = (props) => {
    const groups = props.groups;
    const weekdays = props.weekdays;
    const teacherSearching = props.teacherSearching;
    const arraySchedule = props.arraySchedule;
    const inputs = props.inputs;
    const lesson = props.lesson;

    return (
        <div className="groups-list">
            {/*{groups?.map((gObj, gIndex) =>*/}
            {/*    <div className="group-block">*/}
            {/*        <h2>*/}
            {/*            Группа {gObj}*/}
            {/*        </h2>*/}
            {/*        <table>*/}
            {/*            <td>*/}
            {/*                {weekdays.map((wObj, wIndex) =>*/}
            {/*                    <td>*/}
            {/*                        <tr>*/}
            {/*                            <h3 className="day-cell">{wObj}</h3>*/}
            {/*                        </tr>*/}
            {/*                        {arraySchedule.filter(item => item.weekDay === weekdays[wIndex]*/}
            {/*                            && item.groupNumber === groups[gIndex]).map((obj, index) =>*/}
            {/*                            <CellAdmin*/}
            {/*                                obj={obj}*/}
            {/*                                inputs={inputs}*/}
            {/*                                teacherSearching={teacherSearching}*/}
            {/*                                index={index}*/}
            {/*                                lesson={lesson}*/}
            {/*                            />*/}
            {/*                        )}*/}
            {/*                    </td>*/}
            {/*                )}*/}
            {/*            </td>*/}
            {/*        </table>*/}
            {/*    </div>*/}
            {/*)}*/}
        </div>
    );
};

export default GroupsListAdmin;