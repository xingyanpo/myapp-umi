export default {
  namespace: 'cinema',
  state: {
    list: []
  },
  reducers: {
    changeList(prevState:any, action: any) {
      return {
        ...prevState,
        list: action.payload
      }
    },
    clearList(prevState:any) {
      return {
        ...prevState,
        list: []
      }
    }
  },
  effects: {
    *getList(action: any, obj: any):any {
      // console.log('getList')
      const { put, call } = obj
      var res = yield call(getListForCinema, action.payload.cityId)
      yield put({
        type: 'changeList',
        payload:res
      })
    }
  }
}

async function getListForCinema(cityId:any) {
  var res = await fetch(`https://m.maizuo.com/gateway?cityId=${cityId}&ticketFlag=1&k=7265852`, {
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16597710112470525318201345"}',
      'X-Host': 'mall.film-ticket.cinema.list'
    }
  }).then(res=>res.json())
 return res.data.cinemas
}