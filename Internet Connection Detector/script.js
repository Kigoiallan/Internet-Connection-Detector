const wrapper = document.querySelector(".wrapper"),
toast = wrapper.querySelector(".toast"),
title = toast.querySelector("span"),
subtitle = toast.querySelector("p"),
wifiIcon = toast.querySelector(".icon"),
closeIcon = toast.querySelector(".close-icon");
window.onload = () => {
    function ajax(){
        let xhr = new XMLHttpRequest();//create new XML Object
        xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
        //sending get request on this url
        xhr.onload = () => {
            //once the ajax is loaded
            //if ajax status is equal to 200 or less than 300 that mean user
            //is getting data from that provided url
            //or his/her respinse status is 200 that means he/her is online
            if (xhr.status == 200 && xhr.status < 300) {
                toast.classList.remove("offline");
                title.innerText = "You're online now";
                subTitle.innerText = "Hurray! iNTERNET IS CONNECTED.";
                wifiIcon.innerHTML = '<i class"uil uil-wifi"></i>';
                closeIcon.onclick = () => {
                    wrapper.classList.add("hide");
                }
                setTimeout( () =>{ //hide toast notification on close icon
                    wrapper.classList.add("hide");
                }, 5000);
            }else{
                Offline(); /* calling offline function if ajax status
                            is not equal to 200 or not less that 300 */
            }
        }
        xhr.onerror = () => {
            offline();
        }
        xhr.send(); //sending get request to the passed url
    }
    function offline(){//function for offline
        wrapper.classList.remove("hide");
        toast.classList.add("offline");
        title.innerText = "You're offline now";
        subtitle.innerText = "Opps! Internet is disconnected.";
        wifiIcon.innerHTML = '<i class="uil uil-wifi-slash"></i>';
    }
    setInterval( ()=>{
        ajax();
    }, 100);
}
