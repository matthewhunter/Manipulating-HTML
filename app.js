const elementColor = randomColor()
let textColor = randomColor()
let divTempColor
let materialSwitch = true
let customButtonPressed = false
let friendsButtonToggle = false


const contentContainer = createDocument()

// 1
createSection('Basic Text Alert')
const basicButton = createButton('pan_tool', 'greeting')

// 2
createSection('Custom Text Alert')
const textInput = createTextInput()
const customButton = createButton('announcement', 'text')
checkInput(textInput)

// 3
createSection('Element Changes Background Color On Hover')
createDiv()

// 4
createSection('Text Color Changes On Click')
createParagraph(paragraphString)

// 5
createSection('Add Name On Button Click')
const myNameButton = createNameDiv()

// 6
createSection('List Friends On Button Click')
const myFriendsButton = createFriendsList(friends)