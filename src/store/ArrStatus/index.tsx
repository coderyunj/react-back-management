export default {
  state: {
    sarr: [1,2,3]
  },
  actions: {
    sarrPush(newState: {sarr: number[]},action: {type: string, val:number}){
      newState.sarr.push(action.val)
    },
  },
  sarrPush: "sarrPush"
}