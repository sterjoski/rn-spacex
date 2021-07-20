class CrewMember {
    id: string
    name: string
    agency: string
    image: string
    status: string

    constructor(data: any) {
        this.id = data.id || '-'
        this.name = data.name || '-'
        this.agency = data.agency || '-'
        this.image = data.image
        this.status = data.status
    }

    get isActive() {
        return this.status === 'active'
    }
}

export default CrewMember
