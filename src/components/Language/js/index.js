export default function lan(e) {
  document.querySelector('#EN').style.background='linear-gradient(230deg, rgb(185, 185, 185), #bfbfbf 85%)'
  document.querySelector('#EN').style.color='black'
  document.querySelector(`#EN`).style.boxShadow= 'none'
  document.querySelector('#ES').style.background='linear-gradient(230deg, rgb(185, 185, 185), #bfbfbf 85%)'
  document.querySelector('#ES').style.color='black'
  document.querySelector(`#ES`).style.boxShadow='none'
  return(
    document.querySelector(`#${e}`).style.background='linear-gradient(230deg, rgb(27, 27, 27), #000000 85%)',
    document.querySelector(`#${e}`).style.boxShadow= '0px 0px 8px black',
    document.querySelector(`#${e}`).style.color='white'
  )
}