let color = 'red';
function myComponent(){
  function onClick(){
    color='blue'
  }
  return(
    <button style={{backgroundColor: color}} onClick={onClick}>
      좋아요
    </button>
  )
}