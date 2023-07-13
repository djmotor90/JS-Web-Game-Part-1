function newImage(url, left, bottom){
    let bimage = document.createElement('img')
    bimage.src = url
    bimage.style.position = 'fixed'
    bimage.style.left = left +'px'
    bimage.style.bottom = bottom +'px'
    document.body.append(bimage)
    return bimage
}


function newItem(url, left, bottom) {
    let bimage2 = newImage(url, left, bottom)
  
    bimage2.addEventListener('click', () => {
      bimage2.remove()
    })
  }
  


// Images
newImage('assets/green-character.gif', 100, 100)
newImage('assets/tree.png', 200, 300)
newImage('assets/tree.png' , 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)







// newItem.addEventListener('click', function(){
//     newItem.remove()


// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

// 
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)