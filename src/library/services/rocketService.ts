import { API } from 'library/api/api'
import Rocket from 'library/models/Rocket'

class RocketService {
    async getRockets(): Promise<Rocket[]> {
        const path = `/rockets`

        const { data } = await API.get(path)

        return data.map((rocket: any) => new Rocket(rocket))
    }
}

export const rocketService = new RocketService()
