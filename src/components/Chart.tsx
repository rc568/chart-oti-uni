import { useState, useEffect } from "react";
import { SensorData } from "../interface/data";
import { properties } from "../data/properties";
import { CartesianGrid, Label, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const dataPath = 'src/data/simulated_data.json'

export const Chart = () => {

    const [dataInfo, setDataInfo] = useState<SensorData[] | null>();

    useEffect(() => {
        fetch(dataPath)
            .then(response => response.json())
            .then(data => {
                setDataInfo(data)
            })
            .catch(err => {
                throw new Error(err)
            })
    }, [])

    return (
        <>
            <Label value={properties["calidad_de_aire"]} />
            <LineChart width={800} height={280} data={dataInfo}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="entity_type" />
                <YAxis>
                </YAxis>
                <Tooltip />
                <Legend />
                {/* <Line type="monotone" dataKey="calidad_de_aire" stroke="#8884d8" /> */}
                <Line type="monotone" dataKey="sulfuro_de_hidrogeno" stroke="#82ca9d" />
            </LineChart>
            {
                dataInfo?.slice(0, 10).map(({ calidad_de_aire, humedad, intensidad_de_sonido, presion_1, temperatura_2 }) =>
                    <ul className="text-cyan-600 p-3">
                        <li>{properties["calidad_de_aire"]} {calidad_de_aire}</li>
                        <li>{properties["humedad"]} {humedad}</li>
                        <li>{properties["intensidad_de_sonido"]} {intensidad_de_sonido}</li>
                        <li>{properties["presion_1"]} {presion_1}</li>
                        <li>{properties["temperatura_2"]} {temperatura_2}</li>
                    </ul>
                )
            }
        </>
    )
}