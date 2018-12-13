
function createFood(arr){
	for(let i=0;i<arr.length;i++){
		let foodSpace=document.createElement("div");
		foodSpace.className="foodSpace";
		Ele("#foods").appendChild(foodSpace);
		let theFir=document.createElement("div");
		theFir.className="first";
		foodSpace.appendChild(theFir);
		let theSec=document.createElement("div");
		theSec.className="second";
		foodSpace.appendChild(theSec);
		let imgs=document.createElement("img");
		imgs.src=arr[i].img;
		theFir.appendChild(imgs);
		let hFive=document.createElement("h5");
		hFive.innerHTML=arr[i].font;
		theFir.appendChild(hFive);
		let foodChild=document.createElement("div");
		foodChild.className="foodChild";
		theSec.appendChild(foodChild);
		let blank=document.createElement("div");
		foodChild.appendChild(blank);
		let aEle=document.createElement("a");
		aEle.innerHTML="添加";
		aEle.style.cursor="pointer";
		foodChild.appendChild(aEle);
		let priceSpan=document.createElement("span");
		priceSpan.innerHTML=arr[i].price;
		blank.appendChild(priceSpan);
		let fontSpan=document.createElement("span");
		fontSpan.innerHTML="起";
		blank.appendChild(fontSpan);
	}
}
