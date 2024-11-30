import { useState, useEffect } from "react";
import { CalidadAiresExt } from "../interface/data";
import { propertiesNames } from "../data/properties";
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis, ResponsiveContainer, TooltipProps } from "recharts";
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";

type PropertyName = keyof typeof propertiesNames;
const apiPath = 'src/data/data.json'
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

const getMinMaxDates = (data: CalidadAiresExt[]) => {
    const dates = data.map(({ time_index }) => new Date(time_index)).sort((a, b) => a.getTime() - b.getTime())
    return {
        minDate: dates[0],
        maxDate: dates.at(-1)!,
    }
}

const convertToLocalDate = (date: Date) => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')

    return `${year}-${month}-${day}`
}

export const Chart = () => {

    const [selectedProperty, setSelectedProperty] = useState('calidad_de_aire');

    const [minDate, setMinDate] = useState('');
    const [maxDate, setMaxDate] = useState('');
    const [data, setData] = useState<CalidadAiresExt[]>();
    const [filterData, setFilterData] = useState<CalidadAiresExt[]>();

    const onDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectDate = e.target.value
        let currentMinDate = minDate
        let currentMaxDate = maxDate

        if (e.target.id === "minDate") {
            setMinDate(selectDate)
            currentMinDate = selectDate
        } else if (e.target.id === "maxDate") {
            setMaxDate(selectDate)
            currentMaxDate = selectDate
        }

        setFilterData(data?.filter(({ time_index }) => {
            const date = convertToLocalDate(new Date(time_index))
            return date >= currentMinDate && date <= currentMaxDate
        }))
    }

    useEffect(() => {
        fetch(apiPath)
            .then(response => response.json())
            .then(data => {
                setData(data)
                setFilterData(data)
                const { minDate, maxDate } = getMinMaxDates(data)
                setMinDate(convertToLocalDate(minDate))
                setMaxDate(convertToLocalDate(maxDate))
            })
            .catch(err => {
                throw new Error(err)
            })
    }, [])

    return (
        <>
            <div className="flex items-center border rounded-xl overflow-clip h-[500px]">
                <aside className="bg-primary text-onPrimary w-fit h-full basis-0 px-6 place-content-center">
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
                    <div className="py-3">
                        <label>
                            Evolución:
                        </label>
                        <select
                            className="pl-3 py-2 block text-sm rounded-sm text-black w-full"
                        >
                            <option value="hora">Horaria</option>
                            <option value="dia">Día</option>
                            <option value="semana">Semana</option>
                        </select>
                    </div>
                    <div className="py-3">
                        <label htmlFor="minDate">Desde:</label>
                        <input type="date" name="minDate" id="minDate" onChange={(e) => onDateChange(e)} className="p-3 py-2 text-sm rounded-sm text-black w-full" />
                    </div>
                    <div className="py-3">
                        <label htmlFor="maxDate">Hasta:</label>
                        <input type="date" name="maxDate" id="maxDate" onChange={(e) => onDateChange(e)} className="p-3 py-2 text-sm rounded-sm text-black w-full" />
                    </div>
                </aside>
                <ResponsiveContainer width="70%" height={320}>
                    <LineChart data={filterData} margin={{ bottom: 20 }}>
                    <h1>Gráfico de NO2</h1>
                        <CartesianGrid strokeDasharray="5" />
                        <XAxis dataKey="time_index" tickFormatter={(date) => new Date(date).toLocaleTimeString()} tick={{ fontSize: "1em" }} label={{ value: "Tiempo", position: "bottom" }} />
                        <YAxis label={{ value: propertiesNames[selectedProperty as PropertyName], angle: -90, position: "Left" }} width={100} padding={{ top: 20, bottom: 20 }}/>
                        <Tooltip content={<CustomTooltip />} />
                        <Line type="monotone" dataKey={selectedProperty} stroke="#1cbacc" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}