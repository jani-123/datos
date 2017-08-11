  var pictures = ["assets/img/a1.jpg","assets/img/a2.jpg", "assets/img/a3.jpg", "assets/img/a4.jpg"];
 
  for(var i = 0 ; i < pictures.length ; i++)
  {
  	 var secuencia = document.getElementById('secuenciaImg');
  	 var divPicture = document.createElement('div');
  	     divPicture.setAttribute('class','pImSg');
  	 var btn = document.createElement('div');
  	 var btn1 = document.createTextNode('X');
  	     btn.setAttribute('class','x');
  	     btn.setAttribute('onclick','eliminaImg');
     var picture = document.createElement('img');
     picture.setAttribute('class','pandaImg');
     picture.setAttribute('src', pictures[i]);
     btn.appendChild(btn1);
     divPicture.appendChild(btn);
     divPicture.appendChild(picture);
     secuencia.appendChild(divPicture);
  }

  function btnClik() 
  {
    var menus = document.getElementById('menus');
    var menu1 = document.createElement('div');
    var m1 = document.createTextNode('Origen');
        menu1.setAttribute('class','menu1');
        menu1.setAttribute('onclick','restaura()');
    var menu2 = document.createElement('div');
    var m2 = document.createTextNode('Extinciòn');
        menu2.setAttribute('class','menu2');
        menu2.setAttribute('onclick','eliminaText()');
    var menu3 = document.createElement('div');
    var m3 = document.createTextNode('Restaurar fotos');
        menu3.setAttribute('class','menu3');
    menu1.appendChild(m1);
    menu2.appendChild(m2);
    menu3.appendChild(m3);
    menus.appendChild(menu1);
    menus.appendChild(menu2);
    menus.appendChild(menu3);
  }
  btnClik();

  function eliminaText()
  {
  	var texto3 = document.getElementById('t3');
  	var texto4 = document.getElementById('t4');
	  	texto3.parentNode.removeChild(texto3);
	  	texto4.parentNode.removeChild(texto4);
  }

  function restaura()
  {
  	alert('netra');
    var texto3 = document.getElementById('t3');
  	var texto4 = document.getElementById('t4');
  	texto3.style.display = 'block';
  	texto4.style.display = 'block';

  }