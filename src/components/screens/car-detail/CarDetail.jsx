import { useState } from "react"
import { useParams } from "react-router-dom"
import CarItem from "../home/car-item/CarItem"
import { carService } from '../../../service/car.service'
import { useEffect } from "react"

const CarDetail = () => {

    const { id } = useParams()
    const [car, setCar] = useState({})

    useEffect(() => {
        if (!id) return

        const fetchData = async () => {
            const data = await carService.getById(id);
            setCar(data)
        }
        fetchData()
    }, [id])

    if (!car?.name) return <p>Loading...</p>

    return (
        <div>
            <CarItem car={car} />
        </div>
    );

}

export default CarDetail