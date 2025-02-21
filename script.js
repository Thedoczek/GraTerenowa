let data = {
	"1-sopot": ['23 Marca', '3 Maja (SOP)', 'Architektow', 'Bitwy pod Plowcami', 'Bohaterow Monte Cassino', 'Brodwino', 'Brodwino - Szkola', 'Chodowieckiego', 'Chopina', 'Cmentarz', 'Dolny Sopot - Haffnera', 'Ergo Arena', 'Goyki', 'Grand Hotel', 'Grunwaldzka', 'Hestii', 'Jana z Kolna (SOP)', 'Junakow', 'Kamienny Potok - Kosciol (<300m pieszo)', 'Kamienny Potok - Kujawska', 'Kamienny Potok SKM', 'Kochanowskiego (<300m pieszo)', 'Kolberga', 'Kolej - Sopot', 'Kolej - Sopot Kamienny Potok', 'Kolej - Sopot Wyscigi', 'Korty Tenisowe', 'Kraszewskiego', 'Lokietka', 'Luzycka', 'Malczewskiego', 'Malopolska', 'Mazowiecka', 'Mieroslawskiego', 'Okrezna', 'Polna', 'Rynek Non-Stop', 'Schronisko Sopotkowo', 'Sienkiewicza', 'Sikorskiego (SOP)', 'Sobieskiego Przychodnia', 'Sopot Osiedle Przylesie', 'Sopot PKP', 'Sopot PKP - Marynarzy', 'Sopot PKP - Niepodleglosci', 'Sopot Reja', 'Sportowa', 'Uniwersytet Gdanski (SOP)', 'Wejherowska', 'Wladyslawa IV', 'Wybickiego (<300m pieszo)'],
	"2-gdynia-polnoc": ['Akademia Marynarki Wojennej', 'Alzacka', 'Arciszewskich', 'Babie Doly', 'Benislawskiego', 'Bialowieska', 'Bosmanska - Nasypowa', 'Bosmanska - Zielona', 'Cechowa', 'Czernickiego I', 'Czernickiego II', 'Czwartakow', 'Dabka - Zespol Szkol', 'Dabka - Zielona', 'Elektrocieplownia - Pucka', 'Galeria Szperk', 'Kadmowa', 'Kusnierska', 'Kwiatkowskiego', 'Muchowskiego', 'Nasypowa', 'Obluze Centrum', 'Obluze Maciejewicza', 'Oksywie Dickmana', 'Oksywie Dolne', 'Oksywie Godebskiego', 'Oksywie Gorne', 'Podgorska', 'Pogorze Dolne', 'Pogorze Dolne Zlota', 'Pogorze Gorne', 'Sikorskiego (GDY)', 'Sleyera', 'Staniewicza', 'Stare Obluze', 'Stocznia Wojenna', 'Stolarska', 'Sucharskiego', 'Turkusowa', 'Wawoz Ostrowicki', 'Zeglarzy', 'Zelazna', 'Zeliwna', 'Zielona - Dzialki I', 'Zielona - Dzialki II', 'Zielona - Kosciol', 'Zlota (linie 165 i 198)'],
	"3-gdynia-polnocny-zachod": ['Blawatna', 'Chabrowa', 'Chylonia Centrum', 'Chylonia Dworzec PKP', 'Chylonia Dworzec PKP - os. Meksyk', 'Chylonska - Kcynska', 'Cisowa SKM', 'Cisowa Sibeliusa', 'Demptowo', 'Demptowska', 'Hala \"Makro\"', 'Handlowa', 'Hutnicza - Dzialki', 'Hutnicza - Magazyny', 'Hutnicza - Piaskowa', 'Hutnicza - Stacja Paliw Lotos', 'II Urzad Skarbowy', 'Jaskolcza', 'Jeczienna', 'Kolej - Gdynia Chylonia', 'Kolej - Gdynia Cisowa', 'Kolej - Gdynia Leszczynki', 'Leszczynki SKM', 'Meksykanska', 'Morska - Kcynska', 'Owsiana', 'Piaskowa', 'Pucka', 'Pucka-Hutnicza', 'Pucka-Przemyslowa', 'Pustki Cisowskie', 'Radunska', 'Rozewska', 'Rybinskiego', 'Skarbka I', 'Skarbka II', 'Wiejska', 'Wiklinowa', 'Zamenhofa', 'Zbozowa', 'Zurawia'],
	"4-gdynia-uniwersytet": ['Bpa Okoniewskiego', 'Cmentarz Witominski', 'Gdynia Dworzec Gl. PKP - Morska', 'Gdynia Dworzec Gl. PKP - Wolnosci', 'Hutnicza - Estakada', 'Kalksztajnow', 'Kolej - Gdynia Grabowek', 'Kolej - Gdynia Stocznia - Uniwersytet Morski', 'Kollataja (<300m pieszo)', 'Mireckiego', 'Morska - Estakada', 'Olsztynska (<300m pieszo)', 'Plac Neptuna (<300m pieszo)', 'Poznanska', 'Slaska (<300m pieszo)', 'Stocznia SKM - Morska', 'Uniwersytet Morski', 'Urzad Pracy (<300m pieszo)', 'Warszawska', 'Wezel Franciszki Cegielskiej', 'Wezel Zolnierzy Wykletych', 'Witominska'],
	"5-gdynia-srodmiescie": ['10 Lutego - Skwer Kosciuszki', '3 Maja (GDY)', '3 Maja - Hala', 'Armii Krajowej', 'Celna', 'Centrum Handlowe Batory', 'Chrzanowskiego (GDY)', 'Chrzanowskiego - Przychodnia', 'Dworzec Morski - Muzeum Emigracji', 'Energetykow', 'Gdynia Dworzec Gl. PKP', 'Gdynia Dworzec Gl. PKP - Dworcowa', 'Gdynia Dworzec Gl. PKP - Hala', 'Golebia', 'I Urzad Skarbowy', 'Janka Wisniewskiego', 'Kilinskiego', 'Kolej - Gdynia Glowna', 'Plac Kaszubski', 'Plac Kaszubski - Jana z Kolna', 'Plac Kaszubski - Swietojanska', 'Portowa', 'Publiczny Terminal Promowy', 'Rotterdamska', 'Skwer Kosciuszki - Infobox', 'Starowiejska', 'Stocznia Gdynia', 'Szkola Morska', 'Terminal Kontenerowy', 'Traugutta', 'Urzad Miasta - Wladyslawa IV', 'Urzad Morski', 'Wezel Ofiar Grudnia 70', 'Wybickiego', 'Zwirki i Wigury (GDY)'],
	"6-gdynia-wschod": ['Bulwar Nadmorski (330m pieszo - widoki :D)', 'Centrum Handlowe \"Riviera\"', 'Centrum Nauki Experyment', 'Cylkowskiego', 'Dom Marynarza', 'Focha (<300m pieszo)', 'Fredry (<300m pieszo)', 'Gdynia Arena', 'Hallera', 'Harcerska', 'Kolej - Gdynia Wzgorze Sw. Maksymiliana', 'Kopernika - Kosciol', 'Lutycka', 'Luzycka', 'Moniuszki (<300m pieszo)', 'Necla (<300m pieszo)', 'Pilsudskiego', 'Plyta Redlowska', 'Powstan Chlopskich', 'Redlowo SKM', 'Redlowo SKM - Park Technologiczny', 'Redlowo Szpital', 'Ruchu Oporu', 'Stadion PKM', 'Szczeblewskiego', 'Urzad Miasta - Swietojanska', 'Wzgorze Sw. Maksymiliana - Kapliczka', 'Wzgorze Sw. Maksymiliana - Syrokomli', 'Wzgorze Sw. Maksymiliana SKM'],
	"7-gdynia-zachod": ['Amona', 'Bryla', 'Chwarzno Apollina', 'Chwarzno Polanki', 'Chwarzno Sokolka', 'Dluga', 'Filipkowskiego', 'Fregatowa', 'Gradowa', 'Jowisza', 'Kamrowskiego', 'Kmicica', 'Kwiatkowskiej', 'Okrezna I', 'Okrezna II', 'Pienkawy', 'Potok Wiczlinski', 'Promienna', 'Rolnicza', 'Sokola', 'Staniszewskiego', 'Stawna', 'Uczniowska', 'Wiczlino Dzialki I', 'Wiczlino Dzialki II', 'Wiczlino Niemotowo', 'Wiczlino Skrzyzowanie', 'Wiczlinska - Las', 'Wiczlinska - Sliska', 'Witomino Centrum', 'Witomino Lesniczowka', 'Witomino Polna', 'Witomino Sosnowa', 'Zaruskiego'],
	"8-gdynia-poludnie": ['Bernadowska', 'Grenadierow', 'Halicka', 'Kolej - Gdynia Orlowo', 'Kolibki', 'Lidzka', 'Lowicka', 'Maly Kack - Strzelcow', 'Maly Kack Sandomierska', 'Nawigatorow', 'Olgierda', 'Orlowo SKM - \"Klif\"', 'Orlowo SKM - Orlowska', 'Plac Gornoslaski', 'Podlesna', 'Raclawicka', 'Stadion Miejski', 'Wladyslawa Jagielly', 'Zwyciestwa - Wielkopolska'],
	"9-gdynia-poludniowy-zachod": ['Anyzowa', 'Bieszczadzka', 'Brzechwy', 'Dabrowa Centrum', 'Dabrowa Mietowa', 'Gonicza', 'Gornicza - Damroki', 'Gornicza - Kosciol, ', 'Gryfa Pomorskiego', 'Kacze Buki', 'Kacze Buki Puszczyka', 'Kameliowa', 'Karwiny Nowowiczlinska', 'Karwiny PKM', 'Karwiny Tuwima', 'Kreta', 'Krzemowa', 'Lesna Polana', 'Lipowa', 'Mysliwska (GDY)', 'Nalkowskiej', 'Paprykowa', 'Piolunowa', 'Rdestowa - Kolonia', 'Rdestowa - Lesny Zakatek', 'Szafranowa', 'Tymiankowa', 'Wielki Kack Fikakowo', 'Wielki Kack Starodworcowa', 'Zrodlo Marii'],
	"10-gdansk-zachod": ['Agrarna', 'Astronautow', 'Balcerskiego', 'Barniewicka', 'Biwakowa', 'Budowlanych', 'Firoga', 'Harfowa', 'Ilawska', 'Jednorozca', 'Klukowo', 'Kolej - Gdansk Firoga', 'Kolej - Gdansk Matarnia', 'Kolej - Gdansk Port Lotniczy', 'Kolej - Gdansk Rebiechowo', 'Konkordii', 'Konstelacji', 'Koziorozca', 'Marsa', 'Matarnia PKM', 'Meteorytowa', 'Mjr Slabego', 'Mysliborska', 'Niedzialkowskiego', 'Nowa', 'Osowa PKP', 'Owczarnia', 'Port Lotniczy', 'Radarowa', 'Radiowa', 'Sasiedzka', 'Soldka', 'Sopocka', 'Spadochroniarzy', 'Szybowcowa', 'Telewizyjna', 'Terminal Cargo', 'Wojnarskiego', 'Zeusa', 'Zlota Karczma'],
	"11-gdansk-polnoc": ['Abrahama', 'Archikatedra Oliwska', 'Bazynskiego', 'Biblioteka Glowna UG', 'Bobrowa', 'Bursztynowa', 'Cmentarz Oliwski', 'Cystersow', 'Czyzewskiego', 'Derdowskiego', 'Gospody', 'Jasia i Malgosi', 'Jelitkowo', 'Jelitkowo Kapliczna', 'Karwienska', 'Kolej - Gdansk Oliwa', 'Kolej - Gdansk Zabianka - AWFiS', 'Obroncow Westerplatte', 'Oliwa', 'Opacka', 'Park Oliwski', 'Pomorska', 'Rybacka', 'Rynarzewo', 'Sarnia', 'Subislawa', 'Szpital Marynarki Wojenej', 'Tetmajera', 'Tysiaclecia', 'Uniwersytet Gdanski', 'Zabianka SKM'],
	"12-gdansk-falowce": ['Bajana', 'Beniowskiego', 'Bialy Dwor', 'Bora - Komorowskiego', 'Chlopska', 'Czarny Dwor', 'Czerwony Dwor', 'Dywizjonu 303', 'Hynka', 'Jagiellonska', 'Jana Pawla II', 'Kolej - Gdansk Przymorze - Uniwersytet', 'Kolej - Gdansk Zaspa', 'Kolobrzeska', 'Krynicka', 'Leszczynskich', 'Meissnera', 'Obroncow Wybrzeza', 'Olsztynska', 'Opolska', 'Park Reagana', 'Piastowska', 'Pilotow', 'Poznanska', 'Przymorze SKM', 'Przymorze Wielkie', 'Rozstaje', 'Rzeczypospolitej', 'SDO \"Zlota Jesien\"', 'Skarzynskiego', 'Startowa', 'Szczecinska', 'Zaspa', 'Zaspa SKM', 'Zaspa Szpital', 'Zwirki i Wigury (GDA)'],
	"13-gdansk-wschod": ['Brzezno Dom Zdrojowy', 'Dworska', 'Kasztanowa', 'Krasickiego', 'Latarnia Morska', 'Marynarki Polskiej', 'Mazurska', 'Mostotstal', 'Na Zaspe', 'Nowa Gdanska', 'Nowy Port Goreckiego', 'Nowy Port Oliwska', 'Nowy Port Szaniec Zachodni', 'Nowy Port Zajezdnia', 'PCK', 'Plac Wolnosci', 'Polsat Plus Arena Gdansk', 'Przychodnia', 'Rondo Mazowieckiego', 'Rybolowcow', 'Sniezna', 'Uczniowska', 'Wczasy', 'Wladyslawa IV', 'Wyzwolenia', 'Zaglowa - AmberExpo', 'Zespol Szkol Morskich', 'al. Plazynskiego'],
	"14-gdansk-wrzeszcz": ['Biala', 'Chrobrego', 'Chrzanowskiego (GDA)', 'Cmentarz Srebrzysko', 'Falista', 'Galeria Baltycka', 'Gdansk Reja', 'Grudziadzka', 'Jarowa', 'Jaskowa Dolina', 'Kolej - Gdansk Politechnika', 'Kolej - Gdansk Wrzeszcz', 'Kolonia Uroda', 'Kosciuszki', 'Kreta', 'Legionow', 'Matejki', 'Mickiewicza', 'Na Wzgorzu - Teatr Lesny', 'Nad Stawem', 'Opera Baltycka', 'Ostroroga', 'Plac Komorowskiego', 'Politechnika', 'Politechnika SKM', 'Pomorskie Szkoly Rzemiosl', 'Siedlicka', 'Srebrniki', 'Strzelnica', 'Teatr Miniatura/Radio Gdansk', 'Uphagena', 'Wrzeszcz PKP', 'Wyspianskiego', 'Zabytkowa'],
	"15-gdańsk-centralny": ['Bretowo PKM', 'Dolne Mlyny', 'Doroszewskiego', 'Goralska', 'Karskiego', 'Kolej - Gdansk Bretowo', 'Kolej - Gdansk Niedzwiednik', 'Kolej - Gdansk Strzyza', 'Lesna Gora', 'Lesna Gora Przychodnia', 'Majora Slabego', 'Matemblewo', 'Mjr. Hubala', 'Niedzwiednik', 'Niedzwiednik PKM', 'Norblina', 'Ogrodowa', 'Podkarpacka', 'Potokowa', 'Potokowa - Matemblewska', 'Reymonta', 'Siemiradzkiego', 'Slowackiego - Dzialki', 'Strzyza PKM', 'Wojska Polskiego', 'Zajezdnia', 'Zamenhoffa', 'Zlota Karczma'],
	"16-gdansk-poludnoiwy-zachod": ['Bysewo', 'Centrostal', 'Czerminskiego', 'Damroki', 'Fabryczna', 'Geodetow', 'Gostynska Szpital', 'Gronostajowa', 'Instal', 'Inzynierska', 'Jabloniowa Osiedle', 'Jasien Dzialki', 'Jasien PKM', 'Jasien Polnicy', 'Jasienska', 'Jaworowa', 'Jeziorowa', 'KIelpino Gorne', 'Karczemki', 'Kielpino Szkola', 'Kokoszki', 'Kokoszki Poczta', 'Kolbudzka', 'Kolej - Gdansk Jasien', 'Kolej - Gdansk Kielpinek', 'Lagowska', 'Lapinska', 'Lawendowe Wzgorze', 'Leszczynowa', 'Lipuska', 'Lubowidzka', 'Maszynowa', 'Nowatorow', 'Otominska', 'Polczynska', 'Polnicy', 'Potegowska', 'Przytulna', 'Przywidzka', 'Rebowo', 'Schronisko dla Zwierzat \"Promyk\"', 'Stezycka', 'Stoklosy', 'Szadolki', 'Szadolki Obwodnica', 'Szczesliwa', 'Transportowcow', 'Unimor', 'Zabornia', 'Zrodlana', 'Zwierzyniecka', 'Zyczliwa'],
	"17-gdansk-morena": ['Belgrazka', 'Bema', 'Budapesztanska', 'Ciasna', 'Cyganska Gora', 'Dobrowolskiego', 'Emaus', 'Focha (GDA)', 'Hevelianum', 'Kolumba', 'Krolewskie Wzgorze', 'Kurpinskiego', 'Labedzia', 'Migowo', 'Nad Jarem', 'Nowolipie', 'Otwarta', 'Park Naukowo-Technologiczny', 'Paska', 'Piecewska', 'Piekarnicza', 'Plowce', 'Powstancow Warszawskich', 'Schuberta', 'Schumana', 'Siedlce', 'Skrajna', 'Staw Wrobla', 'Suchanino', 'Wagnera', 'Warnenska', 'Wilenska', 'Wolkowyska', 'Wyczolkowskiego', 'Zacna', 'Zakopianska', 'Zielony Stok'],
	"18-gdansk-havla": ['Basniowa', 'Braminskiego', 'Cedrowa', 'Chalubinskiego', 'Chelm Witosa', 'Cieszynskiego', 'Cmentarz Lostowicki', 'Czestochowska', 'Czluchowska', 'Elfow', 'Huenefelda', 'Jaworzniakow', 'Jeleniogorska', 'Kielecka', 'Liliowa', 'Lipowa', 'Lodzka', 'Migdalowa', 'Milskiego', 'Mysliwska (GDA)', 'Niepolomicka', 'Nowosadecka', 'Odrzanska', 'Orlat Lwowskich', 'Osiedle Swietokrzyskie', 'Pagorkowa', 'Piotrkowska', 'Pohulanka', 'Polczynska', 'Przebisniegowa', 'Przemyska', 'Rogalinska', 'Sikorskiego', 'Swietokrzyska', 'Ujescisko', 'Wiezycka', 'Wilanowska', 'Zakoniczyn'],
	"19-stary-gdansk": ['Akademia Muzyczna', 'Aksamitna', 'Brama Nizinna', 'Brama Oliwska', 'Brama Wyzynna', 'Brama Zulawska', 'Centrum Medycyny Inwazyjnej', 'Chlodna', 'Chmielna', 'Chodowieckiego', 'Cmentarna', 'Debniki', 'Dlugie Ogrody', 'Dobra', 'Dolna (<300m pieszo)', 'Dworzec Glowny', 'Dworzec PKS (<300m pieszo)', 'Elblaska', 'Europejskie Centrum Solidarnosci', 'Gdansk Politechnika', 'Gdansk Stocznia', 'Gleboka', 'Heweliusza', 'Hucisko', 'Jana z Kolna', 'Kamienna Grobla', 'Katarzynki', 'Kolej - Gdansk Glowny', 'Kolej - Gdansk Srodmiescie', 'Kolej - Gdansk Stocznia', 'Lagiewniki', 'Mostek', 'Muzeum II Wojny Swiatowej', 'Muzeum Narodowe', 'Nowe Ogrody (<300m pieszo)', 'Plac Solidarnosci', 'Rybaki Gorne', 'Sluza', 'Smoluchowskiego', 'Srodmiescie SKM', 'Stocznia Polnocna', 'Stocznia SKM', 'Stoczniowcow', 'Szpital Zakazny', 'Targ Chlebowy', 'Targ Drzewny', 'Targ Rybny', 'Torunska', 'Traugutta', 'Twarda', 'Uniwersyteckie Centrum Kliniczne', 'Uniwersytet Medyczny', 'Urzad Miejski', 'Urzad Wojewodzki / Marszalkowski', 'Wezel Groddecka (<300m pieszo)', 'Wezel Kliniczna', 'Wrobla', 'Zabi Kruk', 'Zaroslak', 'Zuraw'],
	"20-gdansk-poludnie": ['Barzychowskiej', 'Brama Orunska', 'Dom Pomocy Spolecznej', 'Glucha', 'Goscinna', 'Jagielly', 'Kampinoska', 'Knyszynska', 'Kolonia Mysia', 'Kolorowa', 'Krzemowa', 'Lucznicza', 'Mackowy', 'Malomiejska', 'Mostowa', 'Nowiny', 'Olimpijska', 'Olimpijska', 'Orunia Gorna', 'Orunia Rowna', 'Pastelowa', 'Platynowa', 'Podleckiego', 'Przemian', 'Przybrzezna', 'Ptasia', 'Rejtana', 'Sandomierska', 'Srebrna', 'Stare Szkoly', 'Starogardzka', 'Szmaragdowa', 'Ukosna', 'Uranowa', 'Urzad Dozoru Technicznego', 'Zbiornik Wody Orunia']
};

const districtSelect = [
	document.getElementById("district0"),
	document.getElementById("district1"),
	document.getElementById("district2"),
	document.getElementById("district3"),
	document.getElementById("district4"),
	document.getElementById("district5")
];

const busstopSelect = [
	null,
	null,
	document.getElementById("busstop2"),
	document.getElementById("busstop3"),
	document.getElementById("busstop4"),
	document.getElementById("busstop5")
];

for (i = 0; i < 6; ++i) {
	it = 0;
	for (let district in data) {
		++it;
		if (i != 0 && it == 1) {continue;}
		if (i == 0 && it > 1) {break;}
		let option = document.createElement("option");
		option.value = district;
		option.textContent = district;
		districtSelect[i].appendChild(option);
	}
}

document.getElementById("distresult").innerHTML = Object.keys(data)[Math.floor(Math.random() * Object.keys(data).length)];

function updateBusStops(k) {
	const selectedDistrict = districtSelect[k].value;
	
	busstopSelect[k].innerHTML = '<option value="" disabled selected>Choose a bus stop</option>';
	busstopSelect[k].disabled = false;
	
	data[selectedDistrict].forEach(busstop => {
		let option = document.createElement("option");
		option.value = busstop;
		option.textContent = busstop;
		busstopSelect[k].appendChild(option);
	});
}

function printrand() {
	let result = "";
	for (k = 0; k < 6; ++k) {
		result += "<b>" + districtSelect[k].value + "</b><br/>";
		let pool = data[districtSelect[k].value];
		let rand1 = pool[Math.floor(Math.random() * pool.length)];
		if (busstopSelect[k] != null) {
			rand1 = busstopSelect[k].value;
		}
		let rand2 = rand1;
		while (rand2 == rand1) {rand2 = pool[Math.floor(Math.random() * pool.length)];}
		result += rand1 + "<br/>" + rand2 + "<br/><br/>"
	}
	document.getElementById("randresult").innerHTML = result;
}