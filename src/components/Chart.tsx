import { useState, useEffect } from "react";
import { CalidadAiresExt } from "../interface/data";
import { propertiesNames } from "../data/properties";
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis, ResponsiveContainer, TooltipProps } from "recharts";
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";

type PropertyName = keyof typeof propertiesNames;
const apiPath = 'src/data/simulated_data.json'
const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white bg-opacity-60 p-4 border">
                <p>{new Date(label).toLocaleString()}</p>
                <p>{propertiesNames[payload[0].dataKey as PropertyName]}: {payload[0].value}</p>
            </div>
        );
    }

    return null;
};

export const Chart = () => {

    const [selectedProperty, setSelectedProperty] = useState('calidad_de_aire');
    const [calidadAiresExt, setCalidadAiresExt] = useState<CalidadAiresExt[]>();




    useEffect(() => {
        fetch(apiPath)
            .then(response => response.json())
            .then(data => {
                setCalidadAiresExt(data)
            })
            .catch(err => {
                throw new Error(err)
            })
    }, [])

    return (
        <>
            <div className="flex items-center border rounded-xl overflow-clip h-[500px]">
                <aside className="bg-primary text-onPrimary w-[800px] h-full basis-0 px-6 place-content-center">
                    <label className="py-3 inline-block">
                        Parámetro Contaminante:
                        <select
                            value={selectedProperty}
                            onChange={e => setSelectedProperty(e.target.value)}
                            className="pl-3 py-2 text-sm rounded-sm text-black"
                        >
                            <option value="calidad_de_aire">{propertiesNames["calidad_de_aire"]}</option>
                            <option value="humedad">{propertiesNames["humedad"]}</option>
                            <option value="intensidad_de_sonido">{propertiesNames["intensidad_de_sonido"]}</option>
                            <option value="presion_1">{propertiesNames["presion_1"]}</option>
                            <option value="temperatura_2">{propertiesNames["temperatura_2"]}</option>
                        </select>
                    </label>
                    <label className="py-3 inline-block">
                        Evolución:
                        <select
                            value={selectedProperty}
                            onChange={e => setSelectedProperty(e.target.value)}
                            className="pl-3 py-2 text-sm rounded-sm text-black"
                        >
                            <option value="calidad_de_aire">{propertiesNames["calidad_de_aire"]}</option>
                            <option value="humedad">{propertiesNames["humedad"]}</option>
                            <option value="intensidad_de_sonido">{propertiesNames["intensidad_de_sonido"]}</option>
                            <option value="presion_1">{propertiesNames["presion_1"]}</option>
                            <option value="temperatura_2">{propertiesNames["temperatura_2"]}</option>
                        </select>
                    </label>
                    <label className="py-3 inline-block">
                        Desde:
                        <select
                            value={selectedProperty}
                            onChange={e => setSelectedProperty(e.target.value)}
                            className="pl-3 py-2 text-sm rounded-sm text-black"
                        >
                            <option value="calidad_de_aire">{propertiesNames["calidad_de_aire"]}</option>
                            <option value="humedad">{propertiesNames["humedad"]}</option>
                            <option value="intensidad_de_sonido">{propertiesNames["intensidad_de_sonido"]}</option>
                            <option value="presion_1">{propertiesNames["presion_1"]}</option>
                            <option value="temperatura_2">{propertiesNames["temperatura_2"]}</option>
                        </select>
                    </label>
                    <label className="py-3 inline-block">
                        Hasta:
                        <select
                            value={selectedProperty}
                            onChange={e => setSelectedProperty(e.target.value)}
                            className="pl-3 py-2 text-sm rounded-sm text-black"
                        >
                            <option value="calidad_de_aire">{propertiesNames["calidad_de_aire"]}</option>
                            <option value="humedad">{propertiesNames["humedad"]}</option>
                            <option value="intensidad_de_sonido">{propertiesNames["intensidad_de_sonido"]}</option>
                            <option value="presion_1">{propertiesNames["presion_1"]}</option>
                            <option value="temperatura_2">{propertiesNames["temperatura_2"]}</option>
                        </select>
                    </label>
                </aside>
                <ResponsiveContainer width="80%" height={320} >
                    <LineChart data={calidadAiresExt} margin={{ top: 5, right: 10, left: 10, bottom: 20 }}>
                        <CartesianGrid strokeDasharray="5" />
                        <XAxis dataKey="time_index" tickFormatter={(date) => new Date(date).toLocaleTimeString()} tick={{ fontSize: "1em" }} label={{ value: "Tiempo", position: "bottom" }} />
                        <YAxis label={{ value: propertiesNames[selectedProperty as PropertyName], angle: -90, position: "Left" }} width={100} />
                        <Tooltip content={<CustomTooltip />} />
                        <Line type="monotone" dataKey={selectedProperty} stroke="#1cbacc" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}