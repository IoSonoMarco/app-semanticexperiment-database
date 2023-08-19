const container = document.querySelector(".container")
const rectContainer = container.getBoundingClientRect()

const player = document.querySelector("#player")

const slider = document.querySelector(".slider")
const sliderFill = document.querySelector(".slider-fill")

// VARIABLES
const img1 = document.querySelector("#img-1")
const img2 = document.querySelector("#img-2")

// CONSTANTS
const RADIUS = rectContainer.height/2
const IMAGE_RADIUS = img1.getBoundingClientRect().width/2
const OFFSET_FROM_CENTER = RADIUS/2

// EVENT LISTENERS
player.oninput = () => sliderFill.style.width = player.value + "%"
player.addEventListener("mouseup", () => {
    console.log(player.value)
    slider.classList.add("slider-mouse-up")
    sliderFill.classList.add("slider-fill-mouse-up")
    slider.disabled = true
    sliderFill.disabled = true
})

// CLASSES
class ImagePairsPlane {
    // Whenever "Relative Position" reference appears it means relative to the main plane circle center
    constructor(rho) {
        this.rho = rho,
        this.posDelta = RADIUS,
        this.anchorImagePosition = null,
        this.anchorImageDistanceFromCenter = null,
        this.gamma = null
        this.pairedImagePosition = null,
        this.intersectionPointACoord = null,
        this.intersectionPointBCoord = null,
        this.alphaBounds = null
        this.alpha = null
    }

    relativeToAbsoluteCoord(coord) {
        return {
            x: coord.x + this.posDelta,
            y: coord.y + this.posDelta
        }
    }

    sampleAnchorImageRelativePosition() {
        const gamma = Math.random() * 2*Math.PI
        this.gamma = gamma
        const distFromCenter = Math.floor(Math.random() * (RADIUS - OFFSET_FROM_CENTER + 1) + OFFSET_FROM_CENTER)
        const coord = {
            x: distFromCenter * Math.cos(gamma), 
            y: distFromCenter * Math.sin(gamma)
        }
        this.anchorImagePosition = coord
        this.anchorImageDistanceFromCenter = distFromCenter
    }

    setIntersectionPoints() {
        const first_term = 1/2 * (1 + (RADIUS**2 - this.rho**2)/(this.anchorImageDistanceFromCenter**2))
        const second_term = 1/2 * Math.sqrt(2*(RADIUS**2 + this.rho**2)/(this.anchorImageDistanceFromCenter**2) - ((RADIUS**2 - this.rho**2)**2)/(this.anchorImageDistanceFromCenter**4) - 1)
        const intersectionPointACoord = {
            x: first_term*this.anchorImagePosition.x + second_term*this.anchorImagePosition.y,
            y: first_term*this.anchorImagePosition.y - second_term*this.anchorImagePosition.x
        }
        const intersectionPointBCoord = {
            x: first_term*this.anchorImagePosition.x - second_term*this.anchorImagePosition.y,
            y: first_term*this.anchorImagePosition.y + second_term*this.anchorImagePosition.x
        }

        this.intersectionPointACoord = intersectionPointACoord
        this.intersectionPointBCoord = intersectionPointBCoord
    }

    setAmchorAngleBoundaries () {
        const coordA = this.intersectionPointACoord
        const coordB = this.intersectionPointBCoord

        const xA = coordA.x + this.anchorImagePosition.y
        const yA = coordA.y - this.anchorImagePosition.x
        const xB = coordB.x - this.anchorImagePosition.y
        const yB = coordB.y + this.anchorImagePosition.x

        let lowerBound = Math.atan(yB/xB)
        if ((yB < 0) && (xB > 0)) lowerBound += 2*Math.PI 
        if (xB < 0) lowerBound += Math.PI

        let upperBound = Math.atan(yA/xA) 
        if ((yA < 0) && (xA > 0)) upperBound += 2*Math.PI 
        if (xA < 0) upperBound += Math.PI

        if (upperBound < lowerBound) upperBound += 2*Math.PI

        this.alphaBounds = [lowerBound, upperBound]
    }

    sampleImagePairedRelativePosition() {
        const lb = this.alphaBounds[0] + 60 * Math.PI/180
        const ub = this.alphaBounds[1] - 60 * Math.PI/180
        const alpha = Math.random() * (ub - lb) + lb
        this.alpha = alpha
        const left = this.rho * Math.cos(alpha)
        const bottom = this.rho * Math.sin(alpha)
        const coord = {
            x: left + this.anchorImagePosition.x, 
            y: bottom + this.anchorImagePosition.y
        }
        this.pairedImagePosition = coord
    }

    createStimuli() {
        this.sampleAnchorImageRelativePosition()
        this.setIntersectionPoints()
        this.setAmchorAngleBoundaries()
        this.sampleImagePairedRelativePosition()
    }

    drawStimuliForDebugging(verbose=false) {
        // Draw Main Circle Plane Center
        const p = document.createElement("div")
        p.style.cssText = "width: 10px; height: 10px; position: absolute; transform: translateX(-50%) translateY(50%); background-color: black; border-radius: 100%;"
        p.style.left = this.posDelta + "px"
        p.style.bottom = this.posDelta + "px"
        container.appendChild(p)
        // Draw the Anchor Stimulus
        const anchorImageAbsoluteCoord = this.relativeToAbsoluteCoord(this.anchorImagePosition)
        const sq = document.createElement("div")
        sq.style.cssText = "width: 20px; height: 20px; position: absolute; transform: translateX(-50%) translateY(50%); background-color: green; border-radius: 100%;"
        sq.style.left = anchorImageAbsoluteCoord.x + "px"
        sq.style.bottom = anchorImageAbsoluteCoord.y + "px"
        container.appendChild(sq)
        // Draw the Circle around the Anchor Stimulus based on rho
        const c = document.createElement("div")
        c.style.cssText = "border: 1px solid green; border-radius: 100%; position: absolute; translateX(-50%) translateY(50%);"
        c.style.left = anchorImageAbsoluteCoord.x - this.rho + "px"
        c.style.bottom = anchorImageAbsoluteCoord.y - this.rho + "px"
        c.style.width = this.rho*2 + "px"
        c.style.height = this.rho*2 + "px"
        container.appendChild(c)
        // Draw the points A and B that intersect the anchor circle the main plane circle
        const intersectionPointAAbsoluteCoord = this.relativeToAbsoluteCoord(this.intersectionPointACoord)
        const sqA = document.createElement("div")
        sqA.style.cssText = "width: 20px; height: 20px; position: absolute; transform: translateX(-50%) translateY(50%); background-color: red; border-radius: 100%;"
        sqA.style.left = intersectionPointAAbsoluteCoord.x + "px"
        sqA.style.bottom = intersectionPointAAbsoluteCoord.y + "px"
        container.appendChild(sqA)
        const intersectionPointBAbsoluteCoord = this.relativeToAbsoluteCoord(this.intersectionPointBCoord)
        const sqB = document.createElement("div")
        sqB.style.cssText = "width: 20px; height: 20px; position: absolute; transform: translateX(-50%) translateY(50%); background-color: red; border-radius: 100%"
        sqB.style.left = intersectionPointBAbsoluteCoord.x + "px"
        sqB.style.bottom = intersectionPointBAbsoluteCoord.y + "px"
        container.appendChild(sqB)
        // Draw the Paired Stimulus
        const pairedImageAbsoluteCoord = this.relativeToAbsoluteCoord(this.pairedImagePosition)
        const sqNew = document.createElement("div")
        sqNew.style.cssText = "width: 20px; height: 20px; position: absolute; transform: translateX(-50%) translateY(50%); background-color: orange; border-radius: 100%; z-index: 20;"
        sqNew.style.left = pairedImageAbsoluteCoord.x + "px"
        sqNew.style.bottom = pairedImageAbsoluteCoord.y + "px"
        container.appendChild(sqNew)

        if (verbose) {
            console.log("Anchor Image Relative Position", this.anchorImagePosition)
            console.log("Anchor Image Absolute Position", anchorImageAbsoluteCoord)
            console.log("Plane Center Angle (Gamma)", this.gamma)
            console.log("Intersection Point A Relative", this.intersectionPointACoord, "Intersection Point A Absolute", intersectionPointAAbsoluteCoord)
            console.log("Intersection Point B Relative", this.intersectionPointBCoord, "Intersection Point B Absolute", intersectionPointBAbsoluteCoord)
            console.log("Alpha UL Boundaries", this.alphaBounds)
            console.log("Anchor Angle (Alpha)", this.alpha)
            console.log("Paired Image Relative Position", this.pairedImagePosition)
            console.log("Paired Image Absolute Position", pairedImageAbsoluteCoord)
        }
    }
}

const rho = 500
const plane = new ImagePairsPlane(rho)

plane.createStimuli()
plane.drawStimuliForDebugging(true)

/* // FUNCTIONS
const sampleImagePosition = (angle_=null) => {
    let angle
    if (angle_) {
        const lowerBound = 2*Math.PI-(angle_ + NON_SAMPLING_ANGLE)
        const upperBound = angle_ - NON_SAMPLING_ANGLE
        angle = Math.random() * upperBound - lowerBound 
    } else {
        angle = Math.random() * 2*Math.PI
    }
    const dist = Math.floor(Math.random() * (RADIUS - IMAGE_RADIUS/2 - OFFSET_FROM_CENTER + 1) + OFFSET_FROM_CENTER)
    const coord = [dist * Math.cos(angle), dist * Math.sin(angle)]
    const left = coord[0] + RELATIVE_CENTER[0]
    const bottom = coord[1] + RELATIVE_CENTER[1]
    return {left, bottom, angle, dist, coord}
}

const getIntersectionPoints = (d, x, y) => {
    const first_term = 1/2 * (1 + (RADIUS**2 - rho**2)/(d**2))
    const second_term = 1/2 * Math.sqrt(2*(RADIUS**2 + rho**2)/(d**2) - ((RADIUS**2 - rho**2)**2)/(d**4) - 1)
    const x1 = first_term*x + second_term*y
    const x2 = first_term*x - second_term*y
    const y1 = first_term*y - second_term*x
    const y2 = first_term*y + second_term*x
    return [[x1,y1], [x2,y2]]
}

const getPivotAngleLowerUpperBounds = (coord1, coord2, xPivot, yPivot) => {
    const x1 = coord1[0] - xPivot
    const y1 = coord1[1] - yPivot
    const x2 = coord2[0] - xPivot
    const y2 = coord2[1] - yPivot

    let lowerBound = Math.atan(y2/x2)
    if ((y2 < 0) && (x2 > 0)) lowerBound += 2*Math.PI 
    if (x2 < 0) lowerBound += Math.PI

    let upperBound = Math.atan(y1/x1) 
    if ((y1 < 0) && (x1 > 0)) upperBound += 2*Math.PI 
    if (x1 < 0) upperBound += Math.PI

    if (upperBound < lowerBound) upperBound += 2*Math.PI

    lowerBound += 10 * Math.PI/180
    upperBound -= 10 * Math.PI/180

    console.log("coord 1", [x1,y1])
    console.log("coord 2", [x2,y2])
    console.log("angle bounds", [lowerBound, upperBound])

    return {lowerBound, upperBound}
}

const sampleImagePairedPosition = (lb, ub, xPivot, yPivot) => {
    const angle = Math.random() * (ub - lb) + lb
    let left = rho * Math.cos(angle)
    let bottom = rho * Math.sin(angle)

    left += xPivot + RELATIVE_CENTER[0] 
    bottom += yPivot + RELATIVE_CENTER[1]

    return {left, bottom, angle}
}



//

const {left, bottom, angle, dist, coord} = sampleImagePosition()

const sq = document.createElement("div")
sq.style.cssText = "width: 20px; height: 20px; position: absolute; transform: translateX(-50%) translateY(50%); background-color: green; border-radius: 100%;"
sq.style.left = left + "px"
sq.style.bottom = bottom + "px"
container.appendChild(sq)
const c = document.createElement("div")
c.style.cssText = "border: 1px solid green; border-radius: 100%; position: absolute; translateX(-50%) translateY(50%);"
c.style.left = left - rho + "px"
c.style.bottom = bottom - rho + "px"
c.style.width = rho*2 + "px"
c.style.height = rho*2 + "px"
container.appendChild(c)

const coords = getIntersectionPoints(dist, left-RELATIVE_CENTER[0], bottom-RELATIVE_CENTER[1])
console.log(coords)
const {lowerBound, upperBound} = getPivotAngleLowerUpperBounds(coords[0], coords[1], left-RELATIVE_CENTER[0], bottom-RELATIVE_CENTER[1])
const {left: left2, bottom: bottom2, angle: angle2} = sampleImagePairedPosition(lowerBound, upperBound, left-RELATIVE_CENTER[0], bottom-RELATIVE_CENTER[1])
console.log("new image position", left2, bottom2, "angle", angle2)

const sqNew = document.createElement("div")
sqNew.style.cssText = "width: 20px; height: 20px; position: absolute; transform: translateX(-50%) translateY(50%); background-color: orange; border-radius: 100%; z-index: 20;"
sqNew.style.left = left2 + "px"
sqNew.style.bottom = bottom2 + "px"
container.appendChild(sqNew)

const coord1 = coords[0]
const sq1 = document.createElement("div")
sq1.style.cssText = "width: 20px; height: 20px; position: absolute; transform: translateX(-50%) translateY(50%); background-color: red; border-radius: 100%;"
sq1.style.left = coord1[0] + RELATIVE_CENTER[0] + "px"
sq1.style.bottom = coord1[1] + RELATIVE_CENTER[1] + "px"
container.appendChild(sq1)

const coord2 = coords[1]
const sq2 = document.createElement("div")
sq2.style.cssText = "width: 20px; height: 20px; position: absolute; transform: translateX(-50%) translateY(50%); background-color: red; border-radius: 100%"
sq2.style.left = coord2[0] + RELATIVE_CENTER[0] + "px"
sq2.style.bottom = coord2[1] + RELATIVE_CENTER[1] + "px"
container.appendChild(sq2) */

/* const {left: left1, bottom: bottom1, angle: angle1, coord: coord1} = sampleImagePosition()
img1.style.left = left1 + "px"
img1.style.bottom = bottom1 + "px"
img1.style.visibility = "visible"

const {left: left2, bottom: bottom2, angle: angle2, coord: coord2} = sampleImagePosition(angle1)
img2.style.left = left2 + "px"
img2.style.bottom = bottom2 + "px"
img2.style.visibility = "visible" */



