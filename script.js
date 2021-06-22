const skill = document.querySelector(".skill")
const input = document.querySelector(".input")

input.focus()

input.addEventListener("keyup",(event)=>{
  return createSkill(event.target.value)
})

function createSkill(input){
 const SkillTag = input.split(",").filter(tag=>tag.trim() !=="").map(tag=>tag.trim())
 skill.innerText=" "
 SkillTag.forEach((tag)=>{
   const tagElement = document.createElement("span")
   tagElement.classList.add("skill-tag")
    tagElement.innerText=tag
   skill.appendChild(tagElement)
 })
}