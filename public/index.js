
function genFun(x)
{
    document.getElementById("gift-entered").valuee=""
    const gift=document.getElementById("gift-generate-id")
    gift.innerHTML=""
    var msgContainer = document.createDocumentFragment();

    for (var i = 0; i < x; i++) {
        var option = msgContainer.appendChild(document.createElement("div"));
        var p=document.createElement("p")
        var img=document.createElement("img")

        p.innerHTML=i+1
        img.src="./images/gift.png"
        img.width="100"
        img.height="100"

        option.appendChild(p)
        option.appendChild(img)
    }
    gift.appendChild(msgContainer);
}