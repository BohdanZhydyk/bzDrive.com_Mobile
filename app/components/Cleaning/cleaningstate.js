

export const week = [
  {
    dayInfo: { name: "PN", date: "14.10.2024" },
    schedule: [
      {
        id: `1231`,
        time: { from: `9:00`, to: `12:30` },
        client: {
          name: "Hotel Hilton",
          shortName: "Hilton",
          nip: "1234567890",
          addr: {
            zip: "80123",
            town: "Gdynia",
            street: "Wojska Polskiego",
            nr: "123/4"
          },
          contacts: {
            tel: "987654321",
            www: "https://hilton.com",
            email: "biuro@hilton.com"
          }
        },
        price: "100.00",
        tasks: "Sprzatanie pokoi, Prasowanie, Mycie okien, Skladanie w szafie"
      },
      {
        id: `1233`,
        time: { from: `13:00`, to: `15:00` },
        client: {
          name: "Biuro XYZ",
          shortName: "XYZ",
          nip: "0987654321",
          addr: {
            zip: "80234",
            town: "Sopot",
            street: "Grunwaldzka",
            nr: "45"
          },
          contacts: {
            tel: "123456789",
            www: "https://xyz.com",
            email: "kontakt@xyz.com"
          }
        },
        price: "80.00",
        tasks: "Czyszczenie biura, Odkurzanie, Mycie podłóg"
      },
      {
        id: `1232`,
        time: { from: `18:00`, to: `20:00` },
        client: {
          name: "Restauracja Pyszności",
          shortName: "Pyszności",
          nip: "4445556667",
          addr: {
            zip: "80456",
            town: "Gdańsk",
            street: "Piekna",
            nr: "10"
          },
          contacts: {
            tel: "998877665",
            www: "https://pysznosci.pl",
            email: "kontakt@pysznosci.pl"
          }
        },
        price: "150.00",
        tasks: "Sprzątanie po godzinach, Mycie naczyń, Odkurzanie"
      }
    ]
  },
  {
    dayInfo: { name: "WT", date: "15.10.2024" },
    schedule: [
      {
        id: `1234`,
        time: { from: `10:00`, to: `11:30` },
        client: {
          name: "Restauracja Smakosz",
          shortName: "Smakosz",
          nip: "1231231234",
          addr: {
            zip: "80345",
            town: "Gdańsk",
            street: "Długa",
            nr: "10"
          },
          contacts: {
            tel: "987654321",
            www: "https://smakosz.pl",
            email: "info@smakosz.pl"
          }
        },
        price: "150.00",
        tasks: "Sprzątanie po imprezie, Zmywanie naczyń"
      },
      {
        id: `1235`,
        time: { from: `12:00`, to: `14:00` },
        client: {
          name: "Biuro Księgowe",
          shortName: "Księgowe",
          nip: "4567890123",
          addr: {
            zip: "80456",
            town: "Gdynia",
            street: "Morska",
            nr: "21"
          },
          contacts: {
            tel: "654321987",
            www: "https://ksiegowe.pl",
            email: "kontakt@ksiegowe.pl"
          }
        },
        price: "90.00",
        tasks: "Czyszczenie biura, Odkurzanie, Mycie okien"
      }
    ]
  },
  {
    dayInfo: { name: "ŚR", date: "16.10.2024" },
    schedule: [
      {
        id: `1236`,
        time: { from: `8:00`, to: `10:00` },
        client: {
          name: "Dom Seniora",
          shortName: "Senior",
          nip: "7890123456",
          addr: {
            zip: "80567",
            town: "Sopot",
            street: "Malczewskiego",
            nr: "8"
          },
          contacts: {
            tel: "321654987",
            www: "https://domseniora.pl",
            email: "kontakt@domseniora.pl"
          }
        },
        price: "120.00",
        tasks: "Sprzątanie pokoi, Mycie podłóg, Czyszczenie łazienek"
      },
      {
        id: `1238`,
        time: { from: `11:00`, to: `13:00` },
        client: {
          name: "Szkoła Podstawowa",
          shortName: "SP",
          nip: "3456789012",
          addr: {
            zip: "80678",
            town: "Gdańsk",
            street: "Wyszyńskiego",
            nr: "3"
          },
          contacts: {
            tel: "987321654",
            www: "https://szkolapodstawowa.pl",
            email: "kontakt@szkolapodstawowa.pl"
          }
        },
        price: "100.00",
        tasks: "Sprzątanie klas, Odkurzanie korytarzy"
      },
      {
        id: `1237`,
        time: { from: `15:30`, to: `17:30` },
        client: {
          name: "Kancelaria Prawna ABC",
          shortName: "ABC",
          nip: "1239876543",
          addr: {
            zip: "80312",
            town: "Gdańsk",
            street: "Wola Pustka",
            nr: "17"
          },
          contacts: {
            tel: "987123456",
            www: "https://abc-law.com",
            email: "info@abc-law.com"
          }
        },
        price: "120.00",
        tasks: "Sprzątanie biura, Mycie okien, Odkurzanie"
      }
    ]
  },
  {
    dayInfo: { name: "CZ", date: "17.10.2024" },
    schedule: [
      {
        id: `1239`,
        time: { from: `10:00`, to: `12:00` },
        client: {
          name: "Klinika Zdrowia",
          shortName: "Zdrowie",
          nip: "1234567890",
          addr: {
            zip: "80789",
            town: "Gdańsk",
            street: "Słowiańska",
            nr: "1"
          },
          contacts: {
            tel: "987654321",
            www: "https://klinika-zdrowia.pl",
            email: "kontakt@klinika-zdrowia.pl"
          }
        },
        price: "130.00",
        tasks: "Sprzątanie sal, Mycie podłóg"
      },
      {
        id: `1241`,
        time: { from: `12:10`, to: `13:30` },
        client: {
          name: "Sklep Spożywczy QWERTY",
          shortName: "QWERTY",
          nip: "5556667778",
          addr: {
            zip: "80112",
            town: "Gdynia",
            street: "Sikorskiego",
            nr: "3B"
          },
          contacts: {
            tel: "112233445",
            www: "https://qwertyshop.com",
            email: "contact@qwertyshop.com"
          }
        },
        price: "70.00",
        tasks: "Sprzątanie sklepu, Czyszczenie półek, Odkurzanie"
      },
      {
        id: `1242`,
        time: { from: `14:00`, to: `16:00` },
        client: {
          name: "Sklep ABC",
          shortName: "ABC",
          nip: "0987654321",
          addr: {
            zip: "80890",
            town: "Sopot",
            street: "Jana Pawła II",
            nr: "22"
          },
          contacts: {
            tel: "123456789",
            www: "https://sklepabc.pl",
            email: "kontakt@sklepabc.pl"
          }
        },
        price: "70.00",
        tasks: "Czyszczenie sklepu, Odkurzanie"
      }
    ]
  },
  {
    dayInfo: { name: "PT", date: "18.10.2024" },
    schedule: [
      {
        id: `1243`,
        time: { from: `9:30`, to: `11:30` },
        client: {
          name: "Biuro Rachunkowe",
          shortName: "Rachunkowe",
          nip: "2345678901",
          addr: {
            zip: "80901",
            town: "Gdynia",
            street: "Wielkopolska",
            nr: "11"
          },
          contacts: {
            tel: "321654987",
            www: "https://biurorachunkowe.pl",
            email: "kontakt@biurorachunkowe.pl"
          }
        },
        price: "110.00",
        tasks: "Sprzątanie biura, Odkurzanie"
      },
      {
        id: `1244`,
        time: { from: `12:00`, to: `15:00` },
        client: {
          name: "Restauracja Italia",
          shortName: "Italia",
          nip: "3456789012",
          addr: {
            zip: "81012",
            town: "Sopot",
            street: "Główna",
            nr: "5"
          },
          contacts: {
            tel: "654321987",
            www: "https://restauracja-italia.pl",
            email: "info@restauracja-italia.pl"
          }
        },
        price: "160.00",
        tasks: "Sprzątanie kuchni, Czyszczenie sali"
      }
    ]
  },
  {
    dayInfo: { name: "SO", date: "19.10.2024" },
    schedule: [
      {
        id: `1245`,
        time: { from: `10:00`, to: `12:00` },
        client: {
          name: "Centrum Fitness",
          shortName: "Fitness",
          nip: "4567890123",
          addr: {
            zip: "81123",
            town: "Gdynia",
            street: "Sportowa",
            nr: "4"
          },
          contacts: {
            tel: "789654321",
            www: "https://centrumfitness.pl",
            email: "kontakt@centrumfitness.pl"
          }
        },
        price: "140.00",
        tasks: "Sprzątanie siłowni, Mycie podłóg"
      },
      {
        id: `1246`,
        time: { from: `13:00`, to: `15:00` },
        client: {
          name: "Osiedle Mieszkaniowe",
          shortName: "Osiedle",
          nip: "5678901234",
          addr: {
            zip: "81234",
            town: "Sopot",
            street: "Leśna",
            nr: "33"
          },
          contacts: {
            tel: "123987654",
            www: "https://osiedle.pl",
            email: "kontakt@osiedle.pl"
          }
        },
        price: "90.00",
        tasks: "Czyszczenie klatek schodowych, Odkurzanie"
      }
    ]
  },
  {
    dayInfo: { name: "NI", date: "20.10.2024" },
    schedule: [
      {
        id: `1247`,
        time: { from: `9:00`, to: `11:00` },
        client: {
          name: "Hotel Złoty",
          shortName: "Złoty",
          nip: "6789012345",
          addr: {
            zip: "81345",
            town: "Gdańsk",
            street: "Krótka",
            nr: "10"
          },
          contacts: {
            tel: "456123789",
            www: "https://hotelzloty.pl",
            email: "info@hotelzloty.pl"
          }
        },
        price: "200.00",
        tasks: "Sprzątanie pokoi, Prasowanie"
      }
    ]
  }
]
