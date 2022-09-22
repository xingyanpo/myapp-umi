export default {
  namespace: 'city',  // 命名空间，作用：引入使用，为了区分其他model，不写以文件名为准
  state: {
    cityName: '北京',
    cityId: '110100'
  },
  reducers: {
    changeCity(prevState:any, action: any) {
      return {
        ...prevState,
        cityName: action.payload.cityName,
        cityId: action.payload.cityId
      }
    }
  }
}