import { shallowEqual, useSelector } from 'react-redux'

export default function MyComponent(){
  const [value1, value2, value3] = useSelector(
    // @ : 여러 개의 상탯값을 배열에 담아서 반환
    state => [state.value1, state.value2, state.value3],
    // @ : 두 번째 매개변수에 sE를 입력하면 배열의 각 원소가 변경됐는지 검사한다. 반환값은 배열 or 객체 가능
    shallowEqual,
  )
}