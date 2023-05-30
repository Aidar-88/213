import { useEffect, useState } from 'react'
import CarItem from './car-item/CarItem'
import CreateCarForm from './create-car-from/CreateCarForm'
import { carService } from '../../../service/car.service'


const Home = () => {

    const [cars, setCars] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await carService.getAll();


            setCars(data)
        }

        fetchData()
    }, [])

    // const filteredCars = useMemo(() => cars.filter(car => car.price > 20000), [])

    return (
        <div>
            <h1>Cars catalog</h1>
            <CreateCarForm setCars={setCars} />
            <div>
                {cars.length ? (
                    cars.map(car =>
                        <CarItem key={car.id} car={car} />
                    )
                ) : (<p>there are no cars</p>
                )}
            </div>

        </div>
    )
}

export default Home