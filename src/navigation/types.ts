import { Screen } from 'config/constants'

import CrewMember from 'library/models/CrewMember'

export type NavigationParams = {
    [Screen.Rockets]: undefined
    [Screen.CrewMembers]: undefined
    [Screen.CrewMember]: {
        crewMember: CrewMember
    }
}
