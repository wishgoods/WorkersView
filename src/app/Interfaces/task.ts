export interface task{
    TaskNumber:number,
    TaskName:string,
    StatusID:number,
    EmployeeName:string,
    DepartmentID:number,
    DueDate:string
    
}

export class tasks{

    constructor(){}

    getTasks()
    {
        return ( [
            {
              "TaskNumber": 0,
              "TaskName": "CEDWARD",
              "StatusID": 3,
              "EmployeeName": "Duncan Ayala",
              "DepartmentID": 3,
              "DueDate": "2020-10-15"
            },
            {
              "TaskNumber": 1,
              "TaskName": "ZILLACTIC",
              "StatusID": 1,
              "EmployeeName": "Nora Hensley",
              "DepartmentID": 4,
              "DueDate": "2019-07-14"
            },
            {
              "TaskNumber": 2,
              "TaskName": "EZENT",
              "StatusID": 1,
              "EmployeeName": "Evelyn Baxter",
              "DepartmentID": 9,
              "DueDate": "2021-03-23"
            },
            {
              "TaskNumber": 3,
              "TaskName": "CALCULA",
              "StatusID": 3,
              "EmployeeName": "Rachel Nunez",
              "DepartmentID": 10,
              "DueDate": "2019-04-24"
            },
            {
              "TaskNumber": 4,
              "TaskName": "XIXAN",
              "StatusID": 1,
              "EmployeeName": "Rose Pugh",
              "DepartmentID": 4,
              "DueDate": "2021-07-31"
            },
            {
              "TaskNumber": 5,
              "TaskName": "GONKLE",
              "StatusID": 2,
              "EmployeeName": "Estrada Barnes",
              "DepartmentID": 10,
              "DueDate": "2019-10-20"
            },
            {
              "TaskNumber": 6,
              "TaskName": "EXTREMO",
              "StatusID": 3,
              "EmployeeName": "Conway Beard",
              "DepartmentID": 4,
              "DueDate": "2020-01-14"
            },
            {
              "TaskNumber": 7,
              "TaskName": "VERAQ",
              "StatusID": 3,
              "EmployeeName": "Stanton Harvey",
              "DepartmentID": 8,
              "DueDate": "2021-02-12"
            },
            {
              "TaskNumber": 8,
              "TaskName": "GYNKO",
              "StatusID": 3,
              "EmployeeName": "Tammi Cantu",
              "DepartmentID": 1,
              "DueDate": "2019-02-20"
            },
            {
              "TaskNumber": 9,
              "TaskName": "ACRUEX",
              "StatusID": 2,
              "EmployeeName": "Dona Kirkland",
              "DepartmentID": 6,
              "DueDate": "2021-05-01"
            },
            {
              "TaskNumber": 10,
              "TaskName": "AQUOAVO",
              "StatusID": 1,
              "EmployeeName": "Natalia Kemp",
              "DepartmentID": 8,
              "DueDate": "2021-03-06"
            },
            {
              "TaskNumber": 11,
              "TaskName": "KINDALOO",
              "StatusID": 1,
              "EmployeeName": "Nichole Anthony",
              "DepartmentID": 5,
              "DueDate": "2020-06-09"
            },
            {
              "TaskNumber": 12,
              "TaskName": "ZENTIA",
              "StatusID": 1,
              "EmployeeName": "Vera Sykes",
              "DepartmentID": 4,
              "DueDate": "2020-03-27"
            },
            {
              "TaskNumber": 13,
              "TaskName": "CORPORANA",
              "StatusID": 1,
              "EmployeeName": "Blackwell Knowles",
              "DepartmentID": 9,
              "DueDate": "2021-10-02"
            },
            {
              "TaskNumber": 14,
              "TaskName": "PIGZART",
              "StatusID": 1,
              "EmployeeName": "Melody Henson",
              "DepartmentID": 10,
              "DueDate": "2019-01-24"
            },
            {
              "TaskNumber": 15,
              "TaskName": "COLUMELLA",
              "StatusID": 3,
              "EmployeeName": "Galloway Hawkins",
              "DepartmentID": 7,
              "DueDate": "2019-09-02"
            },
            {
              "TaskNumber": 16,
              "TaskName": "COMFIRM",
              "StatusID": 1,
              "EmployeeName": "Margery Salinas",
              "DepartmentID": 4,
              "DueDate": "2020-07-08"
            },
            {
              "TaskNumber": 17,
              "TaskName": "APEX",
              "StatusID": 1,
              "EmployeeName": "Phoebe Oneill",
              "DepartmentID": 7,
              "DueDate": "2021-08-27"
            },
            {
              "TaskNumber": 18,
              "TaskName": "ZIGGLES",
              "StatusID": 3,
              "EmployeeName": "Duncan Ayala",
              "DepartmentID": 3,
              "DueDate": "2019-01-08"
            },
            {
              "TaskNumber": 19,
              "TaskName": "EXPOSA",
              "StatusID": 3,
              "EmployeeName": "Booker Byrd",
              "DepartmentID": 2,
              "DueDate": "2021-05-03"
            },
            {
              "TaskNumber": 20,
              "TaskName": "TALAE",
              "StatusID": 1,
              "EmployeeName": "Mcfadden Lopez",
              "DepartmentID": 5,
              "DueDate": "2019-01-06"
            },
            {
              "TaskNumber": 21,
              "TaskName": "GEOSTELE",
              "StatusID": 3,
              "EmployeeName": "Tammi Cantu",
              "DepartmentID": 1,
              "DueDate": "2019-10-13"
            },
            {
              "TaskNumber": 22,
              "TaskName": "VISALIA",
              "StatusID": 2,
              "EmployeeName": "Mccall Holland",
              "DepartmentID": 5,
              "DueDate": "2020-02-11"
            },
            {
              "TaskNumber": 23,
              "TaskName": "ACCUFARM",
              "StatusID": 3,
              "EmployeeName": "Duncan Ayala",
              "DepartmentID": 3,
              "DueDate": "2020-11-08"
            },
            {
              "TaskNumber": 24,
              "TaskName": "TECHMANIA",
              "StatusID": 2,
              "EmployeeName": "Colette Elliott",
              "DepartmentID": 3,
              "DueDate": "2021-07-24"
            },
            {
              "TaskNumber": 25,
              "TaskName": "EYEWAX",
              "StatusID": 2,
              "EmployeeName": "Tammi Cantu",
              "DepartmentID": 1,
              "DueDate": "2019-11-13"
            },
            {
              "TaskNumber": 26,
              "TaskName": "PLASMOSIS",
              "StatusID": 1,
              "EmployeeName": "Lesley Hoffman",
              "DepartmentID": 10,
              "DueDate": "2021-06-21"
            },
            {
              "TaskNumber": 27,
              "TaskName": "VIASIA",
              "StatusID": 2,
              "EmployeeName": "Geraldine Reed",
              "DepartmentID": 8,
              "DueDate": "2021-02-24"
            },
            {
              "TaskNumber": 28,
              "TaskName": "MAROPTIC",
              "StatusID": 3,
              "EmployeeName": "Barbara Miller",
              "DepartmentID": 2,
              "DueDate": "2020-07-02"
            },
            {
              "TaskNumber": 29,
              "TaskName": "AVENETRO",
              "StatusID": 1,
              "EmployeeName": "Burgess Casey",
              "DepartmentID": 5,
              "DueDate": "2019-02-02"
            },
            {
              "TaskNumber": 30,
              "TaskName": "VORTEXACO",
              "StatusID": 1,
              "EmployeeName": "Ophelia Preston",
              "DepartmentID": 7,
              "DueDate": "2021-05-21"
            },
            {
              "TaskNumber": 31,
              "TaskName": "COMVEX",
              "StatusID": 1,
              "EmployeeName": "Aguirre Erickson",
              "DepartmentID": 3,
              "DueDate": "2020-05-03"
            },
            {
              "TaskNumber": 32,
              "TaskName": "DENTREX",
              "StatusID": 1,
              "EmployeeName": "Washington Schwartz",
              "DepartmentID": 9,
              "DueDate": "2020-10-04"
            },
            {
              "TaskNumber": 33,
              "TaskName": "QOT",
              "StatusID": 1,
              "EmployeeName": "Robert York",
              "DepartmentID": 1,
              "DueDate": "2019-10-10"
            },
            {
              "TaskNumber": 34,
              "TaskName": "RONBERT",
              "StatusID": 1,
              "EmployeeName": "Lauri Hudson",
              "DepartmentID": 8,
              "DueDate": "2019-07-01"
            },
            {
              "TaskNumber": 35,
              "TaskName": "ROCKYARD",
              "StatusID": 2,
              "EmployeeName": "Robert York",
              "DepartmentID": 1,
              "DueDate": "2020-02-29"
            },
            {
              "TaskNumber": 36,
              "TaskName": "ENTHAZE",
              "StatusID": 1,
              "EmployeeName": "Luna Matthews",
              "DepartmentID": 9,
              "DueDate": "2020-08-21"
            },
            {
              "TaskNumber": 37,
              "TaskName": "ANIXANG",
              "StatusID": 3,
              "EmployeeName": "Ethel Berger",
              "DepartmentID": 10,
              "DueDate": "2021-04-12"
            },
            {
              "TaskNumber": 38,
              "TaskName": "ACCUPHARM",
              "StatusID": 1,
              "EmployeeName": "Joyce Jefferson",
              "DepartmentID": 6,
              "DueDate": "2019-06-03"
            },
            {
              "TaskNumber": 39,
              "TaskName": "EWEVILLE",
              "StatusID": 3,
              "EmployeeName": "Flowers Ingram",
              "DepartmentID": 9,
              "DueDate": "2020-03-06"
            },
            {
              "TaskNumber": 40,
              "TaskName": "INSURETY",
              "StatusID": 1,
              "EmployeeName": "Doyle Holcomb",
              "DepartmentID": 5,
              "DueDate": "2021-05-12"
            },
            {
              "TaskNumber": 41,
              "TaskName": "ZOINAGE",
              "StatusID": 2,
              "EmployeeName": "Robert York",
              "DepartmentID": 1,
              "DueDate": "2019-02-04"
            },
            {
              "TaskNumber": 42,
              "TaskName": "BYTREX",
              "StatusID": 2,
              "EmployeeName": "Aguirre Erickson",
              "DepartmentID": 3,
              "DueDate": "2020-11-07"
            },
            {
              "TaskNumber": 43,
              "TaskName": "BEDLAM",
              "StatusID": 1,
              "EmployeeName": "Marietta Golden",
              "DepartmentID": 6,
              "DueDate": "2021-01-23"
            },
            {
              "TaskNumber": 44,
              "TaskName": "NORSUP",
              "StatusID": 1,
              "EmployeeName": "Ryan Macias",
              "DepartmentID": 10,
              "DueDate": "2020-11-05"
            },
            {
              "TaskNumber": 45,
              "TaskName": "FISHLAND",
              "StatusID": 3,
              "EmployeeName": "Spence Burris",
              "DepartmentID": 7,
              "DueDate": "2019-09-24"
            },
            {
              "TaskNumber": 46,
              "TaskName": "CUJO",
              "StatusID": 3,
              "EmployeeName": "Zamora Joseph",
              "DepartmentID": 5,
              "DueDate": "2019-08-13"
            },
            {
              "TaskNumber": 47,
              "TaskName": "XELEGYL",
              "StatusID": 3,
              "EmployeeName": "Evangeline Maldonado",
              "DepartmentID": 2,
              "DueDate": "2021-07-27"
            },
            {
              "TaskNumber": 48,
              "TaskName": "ANARCO",
              "StatusID": 1,
              "EmployeeName": "Kim Hanson",
              "DepartmentID": 7,
              "DueDate": "2020-05-15"
            },
            {
              "TaskNumber": 49,
              "TaskName": "ESSENSIA",
              "StatusID": 1,
              "EmployeeName": "Meagan Morin",
              "DepartmentID": 7,
              "DueDate": "2020-10-01"
            },
            {
              "TaskNumber": 50,
              "TaskName": "FURNIGEER",
              "StatusID": 2,
              "EmployeeName": "Barrera Vaughn",
              "DepartmentID": 2,
              "DueDate": "2021-02-15"
            },
            {
              "TaskNumber": 51,
              "TaskName": "GYNK",
              "StatusID": 1,
              "EmployeeName": "Sheryl Mckay",
              "DepartmentID": 10,
              "DueDate": "2021-07-08"
            },
            {
              "TaskNumber": 52,
              "TaskName": "COGENTRY",
              "StatusID": 1,
              "EmployeeName": "Wanda Padilla",
              "DepartmentID": 7,
              "DueDate": "2020-10-01"
            },
            {
              "TaskNumber": 53,
              "TaskName": "GEEKETRON",
              "StatusID": 3,
              "EmployeeName": "Burt Mcfarland",
              "DepartmentID": 5,
              "DueDate": "2019-01-26"
            },
            {
              "TaskNumber": 54,
              "TaskName": "QUILTIGEN",
              "StatusID": 2,
              "EmployeeName": "Brenda Swanson",
              "DepartmentID": 4,
              "DueDate": "2020-03-09"
            },
            {
              "TaskNumber": 55,
              "TaskName": "EMTRAC",
              "StatusID": 2,
              "EmployeeName": "Etta Pollard",
              "DepartmentID": 6,
              "DueDate": "2019-11-29"
            },
            {
              "TaskNumber": 56,
              "TaskName": "DANJA",
              "StatusID": 3,
              "EmployeeName": "Watson Kline",
              "DepartmentID": 7,
              "DueDate": "2020-07-31"
            },
            {
              "TaskNumber": 57,
              "TaskName": "RUBADUB",
              "StatusID": 2,
              "EmployeeName": "Rosa Martin",
              "DepartmentID": 4,
              "DueDate": "2019-10-11"
            },
            {
              "TaskNumber": 58,
              "TaskName": "UNIA",
              "StatusID": 3,
              "EmployeeName": "Richmond Higgins",
              "DepartmentID": 9,
              "DueDate": "2019-07-28"
            },
            {
              "TaskNumber": 59,
              "TaskName": "ENERVATE",
              "StatusID": 2,
              "EmployeeName": "Sofia Blake",
              "DepartmentID": 9,
              "DueDate": "2020-12-28"
            },
            {
              "TaskNumber": 60,
              "TaskName": "ESCENTA",
              "StatusID": 3,
              "EmployeeName": "Terra Wheeler",
              "DepartmentID": 5,
              "DueDate": "2019-10-05"
            },
            {
              "TaskNumber": 61,
              "TaskName": "OVATION",
              "StatusID": 1,
              "EmployeeName": "Duke Landry",
              "DepartmentID": 10,
              "DueDate": "2021-01-12"
            },
            {
              "TaskNumber": 62,
              "TaskName": "ZENTURY",
              "StatusID": 1,
              "EmployeeName": "Simpson Chaney",
              "DepartmentID": 7,
              "DueDate": "2019-04-06"
            },
            {
              "TaskNumber": 63,
              "TaskName": "TUBALUM",
              "StatusID": 1,
              "EmployeeName": "Sheri Ross",
              "DepartmentID": 8,
              "DueDate": "2020-04-15"
            },
            {
              "TaskNumber": 64,
              "TaskName": "TALENDULA",
              "StatusID": 2,
              "EmployeeName": "Bailey Shelton",
              "DepartmentID": 10,
              "DueDate": "2020-03-14"
            },
            {
              "TaskNumber": 65,
              "TaskName": "PAPRICUT",
              "StatusID": 2,
              "EmployeeName": "Jenny Britt",
              "DepartmentID": 4,
              "DueDate": "2019-05-01"
            },
            {
              "TaskNumber": 66,
              "TaskName": "UNISURE",
              "StatusID": 2,
              "EmployeeName": "Roman Ortiz",
              "DepartmentID": 4,
              "DueDate": "2020-09-11"
            },
            {
              "TaskNumber": 67,
              "TaskName": "GEEKOLOGY",
              "StatusID": 3,
              "EmployeeName": "Eunice Boyer",
              "DepartmentID": 8,
              "DueDate": "2021-09-28"
            },
            {
              "TaskNumber": 68,
              "TaskName": "TERRAGO",
              "StatusID": 3,
              "EmployeeName": "Leah Romero",
              "DepartmentID": 8,
              "DueDate": "2021-01-14"
            },
            {
              "TaskNumber": 69,
              "TaskName": "DREAMIA",
              "StatusID": 3,
              "EmployeeName": "Best Stanton",
              "DepartmentID": 1,
              "DueDate": "2021-03-19"
            },
            {
              "TaskNumber": 70,
              "TaskName": "BRAINQUIL",
              "StatusID": 1,
              "EmployeeName": "Aguirre Erickson",
              "DepartmentID": 3,
              "DueDate": "2020-05-10"
            },
            {
              "TaskNumber": 71,
              "TaskName": "KONGENE",
              "StatusID": 1,
              "EmployeeName": "Glover Lowery",
              "DepartmentID": 10,
              "DueDate": "2021-09-29"
            },
            {
              "TaskNumber": 72,
              "TaskName": "EARTHWAX",
              "StatusID": 2,
              "EmployeeName": "Edith Mathis",
              "DepartmentID": 2,
              "DueDate": "2021-01-08"
            },
            {
              "TaskNumber": 73,
              "TaskName": "WATERBABY",
              "StatusID": 2,
              "EmployeeName": "Amalia Walter",
              "DepartmentID": 2,
              "DueDate": "2021-04-16"
            },
            {
              "TaskNumber": 74,
              "TaskName": "FLOTONIC",
              "StatusID": 3,
              "EmployeeName": "Aguirre Erickson",
              "DepartmentID": 3,
              "DueDate": "2020-02-15"
            },
            {
              "TaskNumber": 75,
              "TaskName": "TELPOD",
              "StatusID": 3,
              "EmployeeName": "Jennie Doyle",
              "DepartmentID": 5,
              "DueDate": "2020-07-17"
            },
            {
              "TaskNumber": 76,
              "TaskName": "VANTAGE",
              "StatusID": 3,
              "EmployeeName": "Jacklyn Hernandez",
              "DepartmentID": 9,
              "DueDate": "2019-05-28"
            },
            {
              "TaskNumber": 77,
              "TaskName": "VORATAK",
              "StatusID": 1,
              "EmployeeName": "Holden Graham",
              "DepartmentID": 2,
              "DueDate": "2020-09-09"
            },
            {
              "TaskNumber": 78,
              "TaskName": "NIKUDA",
              "StatusID": 1,
              "EmployeeName": "Amparo Velez",
              "DepartmentID": 10,
              "DueDate": "2019-08-02"
            },
            {
              "TaskNumber": 79,
              "TaskName": "NETERIA",
              "StatusID": 1,
              "EmployeeName": "Shannon Lindsay",
              "DepartmentID": 6,
              "DueDate": "2021-08-08"
            },
            {
              "TaskNumber": 80,
              "TaskName": "XANIDE",
              "StatusID": 1,
              "EmployeeName": "Mia Mullen",
              "DepartmentID": 9,
              "DueDate": "2020-06-03"
            },
            {
              "TaskNumber": 81,
              "TaskName": "BALOOBA",
              "StatusID": 2,
              "EmployeeName": "Delia Bradford",
              "DepartmentID": 9,
              "DueDate": "2019-06-22"
            },
            {
              "TaskNumber": 82,
              "TaskName": "SKYBOLD",
              "StatusID": 1,
              "EmployeeName": "Todd Potts",
              "DepartmentID": 6,
              "DueDate": "2020-04-28"
            },
            {
              "TaskNumber": 83,
              "TaskName": "ORONOKO",
              "StatusID": 2,
              "EmployeeName": "Ida Meyer",
              "DepartmentID": 6,
              "DueDate": "2019-08-08"
            },
            {
              "TaskNumber": 84,
              "TaskName": "OVIUM",
              "StatusID": 1,
              "EmployeeName": "Tasha Cannon",
              "DepartmentID": 5,
              "DueDate": "2021-03-24"
            },
            {
              "TaskNumber": 85,
              "TaskName": "THREDZ",
              "StatusID": 1,
              "EmployeeName": "Perkins Beach",
              "DepartmentID": 4,
              "DueDate": "2020-08-01"
            },
            {
              "TaskNumber": 86,
              "TaskName": "BITTOR",
              "StatusID": 1,
              "EmployeeName": "Carmela Dejesus",
              "DepartmentID": 9,
              "DueDate": "2020-08-17"
            },
            {
              "TaskNumber": 87,
              "TaskName": "ASSISTIX",
              "StatusID": 2,
              "EmployeeName": "Lucas Duffy",
              "DepartmentID": 4,
              "DueDate": "2020-08-27"
            },
            {
              "TaskNumber": 88,
              "TaskName": "EARTHMARK",
              "StatusID": 1,
              "EmployeeName": "Gill Lynn",
              "DepartmentID": 5,
              "DueDate": "2021-03-25"
            },
            {
              "TaskNumber": 89,
              "TaskName": "NIMON",
              "StatusID": 2,
              "EmployeeName": "Dena Montgomery",
              "DepartmentID": 1,
              "DueDate": "2021-02-19"
            },
            {
              "TaskNumber": 90,
              "TaskName": "CAXT",
              "StatusID": 2,
              "EmployeeName": "Davenport Head",
              "DepartmentID": 1,
              "DueDate": "2021-02-06"
            },
            {
              "TaskNumber": 91,
              "TaskName": "COMVEY",
              "StatusID": 3,
              "EmployeeName": "Kelly Sweeney",
              "DepartmentID": 2,
              "DueDate": "2021-06-08"
            },
            {
              "TaskNumber": 92,
              "TaskName": "PROTODYNE",
              "StatusID": 1,
              "EmployeeName": "Elliott Valencia",
              "DepartmentID": 5,
              "DueDate": "2021-07-06"
            },
            {
              "TaskNumber": 93,
              "TaskName": "COSMOSIS",
              "StatusID": 2,
              "EmployeeName": "Fletcher Nieves",
              "DepartmentID": 8,
              "DueDate": "2020-01-14"
            },
            {
              "TaskNumber": 94,
              "TaskName": "LEXICONDO",
              "StatusID": 2,
              "EmployeeName": "Althea Sexton",
              "DepartmentID": 9,
              "DueDate": "2019-02-04"
            },
            {
              "TaskNumber": 95,
              "TaskName": "EMPIRICA",
              "StatusID": 2,
              "EmployeeName": "Pearl Noble",
              "DepartmentID": 9,
              "DueDate": "2020-10-02"
            },
            {
              "TaskNumber": 96,
              "TaskName": "ZBOO",
              "StatusID": 3,
              "EmployeeName": "Lucinda Murray",
              "DepartmentID": 6,
              "DueDate": "2020-08-19"
            },
            {
              "TaskNumber": 97,
              "TaskName": "PURIA",
              "StatusID": 2,
              "EmployeeName": "Mathews Nolan",
              "DepartmentID": 5,
              "DueDate": "2019-05-06"
            },
            {
              "TaskNumber": 98,
              "TaskName": "COMTRACT",
              "StatusID": 3,
              "EmployeeName": "Effie Holt",
              "DepartmentID": 2,
              "DueDate": "2021-10-03"
            },
            {
              "TaskNumber": 99,
              "TaskName": "NIPAZ",
              "StatusID": 1,
              "EmployeeName": "Ivy Sharpe",
              "DepartmentID": 10,
              "DueDate": "2020-12-21"
            }
          ]);
    }

}