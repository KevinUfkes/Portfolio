import React from 'react';
import pm_00002_add_planter from './PMTestVideos/pm_00002_add_planter.mkv'

function PMVideos(){

    return(
        <>
            <h1>Cypress Planting Management Videos</h1>
            <video src={pm_00002_add_planter} width="1000" controls="controls"/>
        </>
    )
}

export default PMVideos;