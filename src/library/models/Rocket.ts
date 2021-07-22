class Rocket {
    id: string
    name: string
    active: boolean
    stages: number
    boosters: number
    costPerLaunch: number
    successRatePercentage: number
    firstFlight: Date
    country: string
    company: string
    description: string
    image: string

    constructor(data: any) {
        this.id = data.id || '-'
        this.name = data.name || '-'
        this.active = Boolean(data.active)
        this.stages = data.stages
        this.boosters = data.boosters
        this.costPerLaunch = data.costPerLaunch
        this.successRatePercentage = data.successRatePct
        this.firstFlight = new Date(data.firstFlight)
        this.country = data.country
        this.company = data.company
        this.description = data.description
        this.image = data.flickrImages?.[0] ?? ''
    }
}

export default Rocket
