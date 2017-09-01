import { get } from '@molgenis/molgenis-api-client'
import {SET_BIOBANKS, SET_ERROR} from './mutations'

export const GET_BIOBANKS = '__GET_BIOBANKS__'

export default {
  /**
   * Example action for retrieving all EntityTypes from the server
   */
  [GET_BIOBANKS] ({commit}) {
    /**
     * Pass options to the fetch like body, method, x-molgenis-token etc...
     * @type {{}}
     */
    const options = {}
    get('/api/v2/eu_bbmri_eric_biobanks?num=10000', options).then(response => {
      commit(SET_BIOBANKS, response.items)
    }, error => {
      commit(SET_ERROR, error)
    })
  }
}
