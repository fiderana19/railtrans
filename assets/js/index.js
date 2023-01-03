    /*the image slider gallery*/
    var img = document.getElementById("gallery2");
    var img1 = document.getElementById("gallery1");
    var img2 = document.getElementById("gallery3");

    var image = ["./assets/image/gallery/paris1.jpg" , "./assets/image/gallery/paris2.jpg" , "./assets/image/gallery/paris3.jpg" , "./assets/image/gallery/paris4.jpg" , "./assets/image/gallery/paris5.jpg"];
    var image1 = ["./assets/image/gallery/paris5.jpg" , "./assets/image/gallery/paris1.jpg" , "./assets/image/gallery/paris2.jpg" , "./assets/image/gallery/paris3.jpg" , "./assets/image/gallery/paris4.jpg"];
    var image2 = ["./assets/image/gallery/paris2.jpg" , "./assets/image/gallery/paris3.jpg" , "./assets/image/gallery/paris4.jpg" , "./assets/image/gallery/paris5.jpg" , "./assets/image/gallery/paris1.jpg"];
    var i = 0 ;
    
    Marcher();
    DefilerAuto();

    function Marcher() {
        img.src = image[i] ;
        img1.src = image1[i];
        img2.src = image2[i];
        i++;
    }

    function DefilerAuto() {
        img.src = image[i];
        img1.src = image1[i];
        img2.src = image2[i];
        i++;
        if (i==5) {
            i=0;
        }
    }

    setInterval(DefilerAuto,5000);