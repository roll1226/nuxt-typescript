import * as Vuex from 'vuex'

interface ICommit {
  commit: Vuex.Commit
}

export interface IMovie {
  genre: string
}

// export type loadStates = 'loading' | 'done' | 'error' | 'none'
// export type submitStates = 'submitting' | 'done' | 'error' | 'none'

export interface IState {
  text: string,
  bool: boolean
}

export const state = (): IState => ({
  text: '眠くない',
  bool: false
})

export type loadStates = true | false

export const mutations = {
  SET_TEXT(state: IState, payload: string) {
    state.text = payload
  },
  CHANGE_BOOL(state: IState, payload: boolean) {
    state.bool = payload
  }
}
