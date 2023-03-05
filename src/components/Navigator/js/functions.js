export function optionActive(e) {
  document.querySelector(`#profile`).style.boxShadow=('0px 0px 4px transparent')
  document.querySelector(`#developer`).style.boxShadow=('0px 0px 4px transparent')
  document.querySelector(`#sound`).style.boxShadow=('0px 0px 4px transparent')
  document.querySelector(`#design`).style.boxShadow=('0px 0px 4px transparent')
  document.querySelector(`#contact`).style.boxShadow=('0px 0px 4px transparent')
  console.log(e)
  if(e !== 'programation, design & sound' && e !== 'bio') return document.querySelector(`#${e}`).style.boxShadow=('0px 0px 10px yellow')
  else return document.querySelector(`#profile`).style.boxShadow=('0px 0px 10px yellow')
}