import * as Vuex from 'vuex'

interface ICommit {
  commit: Vuex.Commit
}

export interface IMovie {
  genre: string
}

// export type loadStates = 'loading' | 'done' | 'error' | 'none'
// export type submitStates = 'submitting' | 'done' | 'error' | 'none'

export interface IText {
  text: string,
  bool: boolean
}

interface IState {
  texts: IText
}

export const state = (): IState => ({
  texts: {
    text: '眠くない',
    bool: false
  }
})

export type loadStates = true | false

export const mutations = {
  SET_TEXT(state: IState, payload: string) {
    state.texts.text = payload
  },
  CHANGE_BOOL(state: IState, payload: boolean) {
    state.texts.bool = payload
  }
}
