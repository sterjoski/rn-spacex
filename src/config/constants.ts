const second = 1000
const minute = 60 * second
const hour = 60 * minute

export enum Screen {
    Rockets = 'Rockets',
    CrewMembersStack = 'CrewMembersStack',
    CrewMembers = 'Crew Members',
    CrewMember = 'Crew Member',
}

export enum CacheDuration {
    Short = 15 * minute,
    Medium = 60 * minute,
    Long = 6 * hour,
}

export enum CacheKeys {
    Rockets = 'Rockets',
    CrewMembers = 'CrewMembers',
}
