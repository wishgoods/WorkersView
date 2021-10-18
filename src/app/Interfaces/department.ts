export interface department {
  DepartmentID: number,
    DepartmentName: string,
    ParentID: number
}

export class departments {
  constructor() {}
  getDepartments() {
    return (
      [{
          "DepartmentID": 14,
          "DepartmentName": "Hopeli",
          "ParentID": 18
        },
        {
          "DepartmentID": 15,
          "DepartmentName": "Telequiet",
          "ParentID": 18
        },
        {
          "DepartmentID": 1,
          "DepartmentName": "Krog",
          "ParentID": 0
        },
        {
          "DepartmentID": 6,
          "DepartmentName": "Lunchpad",
          "ParentID": 10
        },
        {
          "DepartmentID": 10,
          "DepartmentName": "Delphide",
          "ParentID": 12
        },
        {
          "DepartmentID": 16,
          "DepartmentName": "Quilch",
          "ParentID": 18
        },
        {
          "DepartmentID": 3,
          "DepartmentName": "Splinx",
          "ParentID": 0
        },
        {
          "DepartmentID": 6,
          "DepartmentName": "Oceanica",
          "ParentID": 0
        },
        {
          "DepartmentID": 19,
          "DepartmentName": "Netropic",
          "ParentID": 22
        },
        {
          "DepartmentID": 17,
          "DepartmentName": "Quadeebo",
          "ParentID": 18
        },
        {
          "DepartmentID": 12,
          "DepartmentName": "Exostream",
          "ParentID": 0
        },
        {
          "DepartmentID": 20,
          "DepartmentName": "Pearlesex",
          "ParentID": 22
        },
        {
          "DepartmentID": 13,
          "DepartmentName": "Locazone",
          "ParentID": 0
        },
        {
          "DepartmentID": 2,
          "DepartmentName": "Futuris",
          "ParentID": 1
        },
        {
          "DepartmentID": 18,
          "DepartmentName": "Synkgen",
          "ParentID": 0
        },
        {
          "DepartmentID": 8,
          "DepartmentName": "Nebulean",
          "ParentID": 6
        },
        {
          "DepartmentID": 4,
          "DepartmentName": "Centuria",
          "ParentID": 3
        },
        {
          "DepartmentID": 22,
          "DepartmentName": "Uneeq",
          "ParentID": 0
        },
        {
          "DepartmentID": 5,
          "DepartmentName": "Crustatia",
          "ParentID": 3
        },
        {
          "DepartmentID": 21,
          "DepartmentName": "Marqet",
          "ParentID": 22
        },
        {
          "DepartmentID": 11,
          "DepartmentName": "Boilcat",
          "ParentID": 12
        }
      ]);
  }
}
