//declare constant variable message set to a new div element, give it an id of message and class of beautText.
let message = document.createElement("div");
message.setAttribute("id","message");
message.setAttribute("class", "beautText");
message.textContent = "Get back to your coding dreams!";

//get the URL of the jpegs from images file in extension and set it to constant variables matching their names
const imageFlowersURL = chrome.runtime.getURL("images/flower.jpeg");
const imageLeavesURL = chrome.runtime.getURL("images/leaves.jpeg");
const imagePlantsURL = chrome.runtime.getURL("images/plants.jpeg");
const imageTrackURL = chrome.runtime.getURL("images/track.jpeg");
const imageBibleURL = chrome.runtime.getURL("images/bible.jpeg");

//create array of images
const arrayOfImages = [imageBibleURL,imageFlowersURL,imageTrackURL,imagePlantsURL,imageLeavesURL];

//declare a function that returns a random image URL from arrayOfImages
function getRandomImage(){
	return arrayOfImages[Math.floor(Math.random() * (arrayOfImages.length - 1))]
}

//declare a variable image
let image = document.createElement("img");

image.setAttribute("src",getRandomImage());


if($('#contents').length){
	const contents = $('#contents'); //declare a constant variable contents and set it to the element with ID 'contents' in the document 
	//store the location of contents parent
	const contentsParent = contents.parent();
	 //remove contents from the parentNode in the document
	contents.remove();
	//append message to where contents used to be
	contentsParent.append(message);
	//append the image of flowers to the end of contentsParent
	contentsParent.append(image);

}
else if($('#ssrb_root_start').length ){
	const facebook = $('#ssrb_root_start').parent();
	const facebookParent = facebook.parent();
	facebook.remove();
	facebookParent.append(message)
	facebookParent.append(image)
}
 



