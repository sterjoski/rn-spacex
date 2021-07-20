import humps from 'humps'

export default (jsonData: string) => humps.camelizeKeys(JSON.parse(jsonData))
