import { API } from 'library/api/api'
import CrewMember from 'library/models/CrewMember'

class CrewService {
    async getCrewMembers(): Promise<CrewMember[]> {
        const path = `/crew`

        const { data } = await API.get(path)

        return data.map((crewMember: any) => new CrewMember(crewMember))
    }
}

export const crewService = new CrewService()
