// ELEMENTS
const container = document.querySelector(".container")
const rectContainer = container.getBoundingClientRect()

// STIMULI
const img1 = document.querySelector("#img-1")
const img2 = document.querySelector("#img-2")

// CONSTANTS
const RADIUS = rectContainer.height/2
const IMAGE_RADIUS = img1.getBoundingClientRect().width/2
const OFFSET_FROM_CENTER = RADIUS/2
const N_IMAGES = imageFiles.length

const N_TRIALS = 5

// VARIABLES
let trialStartTime
let trialEndTime

let responseTimes = []
let playerScore = []

// EVENT LISTENERS

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

        const pos = Math.floor(Math.random() * (N_IMAGES + 1))
        const imageData = imageFiles[pos]
    
        const anchorImage = imageData.anchor
        const pairedImage = imageData.pair
        const score = imageData.score

        img1.src = anchorImage
        img2.src = pairedImage
    }

    drawStimuli() {
        // Anchor Stimulus
        const anchorImageAbsoluteCoord = this.relativeToAbsoluteCoord(this.anchorImagePosition)
        img1.style.left = anchorImageAbsoluteCoord.x + "px"
        img1.style.bottom = anchorImageAbsoluteCoord.y + "px"

        // Paired Stimulus
        const pairedImageAbsoluteCoord = this.relativeToAbsoluteCoord(this.pairedImagePosition)
        img2.style.left = pairedImageAbsoluteCoord.x + "px"
        img2.style.bottom = pairedImageAbsoluteCoord.y + "px"

        img1.style.visibility = "visible"
        img2.style.visibility = "visible"
    }

    removeStimuli() {
        img1.style.visibility = "hidden"
        img2.style.visibility = "hidden"
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

let awaitForScore

class Trial {
    constructor(imagePairsPlane, stimuliDuration, idleDuration) {
        this.imagePairsPlane = imagePairsPlane,
        this.stimuliDuration = stimuliDuration,
        this.idleDuration = idleDuration,
        //
        this.playerBox = document.querySelector(".player-box"),
        this.slider = document.querySelector(".slider"),
        this.sliderFill = document.querySelector(".slider-fill"),
        //
        this.player = document.querySelector("#player"),
        this.player.oninput = () => this.sliderFill.style.width = this.player.value + "%",
        this.player.addEventListener("mouseup", () => {
            this.slider.classList.add("slider-mouse-up")
            this.sliderFill.classList.add("slider-fill-mouse-up")
            this.slider.disabled = true
            this.sliderFill.disabled = true
            this.idle()
        }),
        // 
        this.endTrialSentence = document.querySelector(".end-trial-sentence")
        this.init()
    }

    init() {
        awaitForScore = null
        this.endTrialSentence.style.visibility = "hidden"
        this.playerBox.style.visibility = "hidden"
        this.player.value = 0
        this.sliderFill.style.width = 0
        this.slider.classList.remove("slider-mouse-up")
        this.sliderFill.classList.remove("slider-fill-mouse-up")
        this.slider.disabled = false
        this.sliderFill.disabled = false

        this.imagePairsPlane.createStimuli()
    }

    play() {
        console.log("trial running")
        this.imagePairsPlane.drawStimuli()
        
        setTimeout(() => {
            this.imagePairsPlane.removeStimuli()
            this.playerBox.style.visibility = "visible"
            trialStartTime = new Date()
        }, this.stimuliDuration)
    }

    idle() {
        trialEndTime = new Date()
        responseTimes.push(trialEndTime - trialStartTime)
        playerScore.push(this.player.value)
        console.log(responseTimes, playerScore)

        this.endTrialSentence.style.visibility = "visible"

        setTimeout(() => {
            if (awaitForScore) awaitForScore()
        }, this.idleDuration)
    }
}

const awaitForResolve = () => {
    return new Promise(resolve => awaitForScore = resolve)
}

class Block {
    constructor(trialClass, nTrials, interTrialInterval) {
        this.trialClass = trialClass,
        this.nTrials = nTrials
        this.interTrialInterval = interTrialInterval
    }

    async run() {

        for (let i=0; i<this.nTrials; i++) {
            this.trialClass.init()
            this.trialClass.play()
            await awaitForResolve()
        }

    }
}

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

const rho = 500
const plane = new ImagePairsPlane(rho)

const trial = new Trial(plane, 1000, 2000)

//plane.createStimuli()
//plane.drawStimuliForDebugging(true)
//plane.drawStimuli()

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

const block = new Block(trial, N_TRIALS, 5000)
block.run()




