function startclssification()
{
navigator.mediaDevices.getUserMedia({audio: true});

classifier = m15.soundClassifier('https://teacheblemachine.withgoogle.com/models/bkaDrKcBl/model.json',modelReady);
}
function modelReady()
{
classifier.classify( gotResults);
}
// A função gotResults conterá o resultado da comparação. Agora, começamos a definir a função
// gotResults
function gotResults(error, results) 
{
//   A função gotResults, a qual contém o resultado da comparação possui dois parâmetros dentro dela -
// um é error (erro) e o outro é o results (resultado).

  if (error) 
  {
    console.error(error)
  } 
  else 
  {
    console.log
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'Posso ouvir: '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Precisão: '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('alien1') 
    img1 = document.getElementById('alien2')
    img2 = document.getElementById('alien3')
    img3 = document.getElementById('alien4')

    if (results[0].label == "Palmas") 
    {
      img.src = 'aliens-01.gif';
      img1.src = 'aliens-02.png';
      img2.src = 'aliens-03.png';
      img3.src = 'aliens-04.png';
    } 
    else if (results[0].label == "Sino") 
    {
      img.src = 'aliens-01.png';
      img1.src = 'aliens-02.gif';
      img2.src = 'aliens-03.png';
      img3.src = 'aliens-04.png';
    } 
    else if (results[0].label == "Estalos") 
    {
      img.src = 'aliens-01.png';
      img1.src = 'aliens-02.png';
      img2.src = 'aliens-03.gif';
      img3.src = 'aliens-04.png';
    }
    else
    {
      img.src = 'aliens-01.png';
      img1.src = 'aliens-02.png';
      img2.src = 'aliens-03.png';
      img3.src = 'aliens-04.gif';
    }
  }
}

