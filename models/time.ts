import { DataTypes } from "sequelize";
import db from "../db/connection";

const Time = db.define('time', {
    startTime:{
        type: DataTypes.TIME
    },
    endTime: {
        type: DataTypes.TIME
    }, 
    day:{
        type: DataTypes.DATE
    },
    userId:{
        type: DataTypes.BIGINT
    }
});

export default Time;