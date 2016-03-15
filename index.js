
elements = document.getElementsByTagName('td');

players = [];
players[0] = { name: 'Илья', passanger: 0, prevDes: 0, destination: 0, count: 0};
players[1] = { name: 'Дима', passanger: 0, prevDes: 0, destination: 0, count: 0};
players[2] = { name: 'Максим', passanger: 0, prevDes: 0, destination: 0, count: 0};
passangers = ["Конь", "Корова", "Свинка", "Баран", "Заяц"];
destinations = ["Ферма", "Аэропорт", "Стройка", "Вокзал", "Заправка", "Пожарная станция", "Школа", "Супермаркет", "Конюшня", "Яблоневый сад", "Мельница"];

function fNew(playerCode)
{
  newPassanger = passangers[Math.trunc(Math.random()*passangers.length)];
  // новый пассажир и предыдущий не должны совпадать, новый пассажир и пассажир другого игрока не должны совпадать
  while (newPassanger==players[0].passanger || newPassanger==players[1].passanger || newPassanger==players[2].passanger )
  {
  	newPassanger = passangers[Math.trunc(Math.random()*passangers.length)];
  }
  players[playerCode].passanger = newPassanger;
  imagePath = '"'+players[playerCode].passanger+'.jpg"';
  elements[playerCode*5+1].innerHTML = "<img src="+imagePath +"> <br/>" + players[playerCode].passanger;


// новое место назначение и предыдущее не должны совпадать
while (players[playerCode].prevDes==players[playerCode].destination)
{
  players[playerCode].destination=destinations[Math.trunc(Math.random()*destinations.length)];
}
  imagePath='"'+players[playerCode].destination+'.jpg"';  
  elements[playerCode*5+2].innerHTML = "<img src="+imagePath +"> <br/>" +  players[playerCode].destination;


  players[playerCode].prevPas=players[playerCode].passanger;
  players[playerCode].prevDes=players[playerCode].destination;
}

function fTasksCount(playerCode)
{  
  players[playerCode].count++;
  elements[playerCode*5+4].innerHTML = ' заданий '+players[playerCode].count;
  fNew(playerCode);
  
}

function fReset()
{  
  for (i=0; i<players.length; i++)
	{
	  fRecordReset(i);
	}
}

function fRecordReset(recNo)
{
	players[recNo].passanger = 0;
	players[recNo].prevDes = 0;
	players[recNo].destination = 0;
	players[recNo].count = 0;
	elements[recNo*5+1].innerHTML = "-";
	elements[recNo*5+2].innerHTML = "-";
	elements[recNo*5+4].innerHTML = "0";
}

