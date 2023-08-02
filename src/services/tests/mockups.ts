import App from "../../models/App";
import HostAppData from "../../models/HostAppData";

export const mockedApp = (): App => {
    const app = new App();
    app.apdex = 75;
    app.name = "My new App";
    app.version = 9;
    app.contributors = [];
    return app;
};

export const mockedHostList = [
    "92116865-5462.conor.com",
    "7e6272f7-098e.dakota.biz"
];

export const mockHostData: HostAppData[] = [
    {
        "name": "Awesome Wooden Sausages - Schaefer - Hegmann, Inc",
        "contributors": [],
        "version": 7,
        "apdex": 100,
        "host": [
            "92116865-5462.conor.com",
            "7e6272f7-098e.dakota.biz"
        ]
    },
    {
        "name": "Rustic Steel Wooden Sausages - Schaefer - Hegmann, Inc",
        "contributors": [],
        "version": 7,
        "apdex": 100,
        "host": [
            "92116865-5462.conor.com",
            "7e6272f7-098e.dakota.biz"
        ]
    },
    {
        "name": "Rustic Steel Shoes - Fritsch, Tremblay and Thompson, LLC",
        "contributors": [],
        "version": 5,
        "apdex": 67,
        "host": [
            "92116865-5462.conor.com",
            "7e6272f7-098e.dakota.biz",
            "95b346a0-17f4.abbigail.name"
        ]
    },
    {
        "name": "Practical Fresh Chips - Weber - Lemke, Inc",
        "contributors": [],
        "version": 4,
        "apdex": 47,
        "host": ["95b346a0-17f4.abbigail.name"]
    },
    {
        "name": "Intelligent Concrete Bike - Kris - Kemmer, and Sons",
        "contributors": [
            "Earline Gleason"
        ],
        "version": 5,
        "apdex": 34,
        "host": ["92116865-5462.conor.com"]
    },
    {
        "name": "Handmade Granite Computer - Jones - Hammes, Group",
        "contributors": [],
        "version": 7,
        "apdex": 47,
        "host": [
            "92116865-5462.conor.com",
            "7e6272f7-098e.dakota.biz",
            "95b346a0-17f4.abbigail.name"
        ]
    },
    {
        "name": "Licensed Plastic Chicken - Rau, Kohler and Spencer, and Sons",
        "contributors": [],
        "version": 2,
        "apdex": 66,
        "host": [
            "128406fc-0d3f.tiana.biz",
            "e0419f48-6a5a.craig.info",
            "e7bf58af-f0be.dallas.biz",
            "b0b655c5-928a.nadia.biz"
        ]
    },
    {
        "name": "Licensed Frozen Computer - Schumm, Boyle and Pouros, and Sons",
        "contributors": [],
        "version": 8,
        "apdex": 44,
        "host": [
            "e7bf58af-f0be.dallas.biz",
            "2b4cfcf7-81d5.kelli.org",
            "e0419f48-6a5a.craig.info",
            "1d717554-bf17.sydnie.name"
        ]
    },
    {
        "name": "Ergonomic Metal Computer - Botsford, Olson and Roob, and Sons",
        "contributors": [],
        "version": 1,
        "apdex": 89,
        "host": [
            "e7bf58af-f0be.dallas.biz",
            "95b346a0-17f4.abbigail.name",
            "1d717554-bf17.sydnie.name",
            "e0419f48-6a5a.craig.info",
            "92116865-5462.conor.com"
        ]
    },
    {
        "name": "Sleek Frozen Pants - Heaney - Heathcote, and Sons",
        "contributors": [],
        "version": 4,
        "apdex": 10,
        "host": [
            "9a450527-cdd9.kareem.info",
            "e0419f48-6a5a.craig.info",
            "e7bf58af-f0be.dallas.biz"
        ]
    },
    {
        "name": "Gorgeous Frozen Gloves - D'Amore, Hilpert and Macejkovic, LLC",
        "contributors": [],
        "version": 6,
        "apdex": 32,
        "host": [
            "128406fc-0d3f.tiana.biz",
            "e7bf58af-f0be.dallas.biz"
        ]
    },
    {
        "name": "Handmade Rubber Hat - Kulas - Abshire, LLC",
        "contributors": [],
        "version": 2,
        "apdex": 66,
        "host": [
            "e7bf58af-f0be.dallas.biz",
            "b0b655c5-928a.nadia.biz"
        ]
    },
    {
        "name": "Ergonomic Steel Salad - Dickens Inc, LLC",
        "contributors": [],
        "version": 8,
        "apdex": 77,
        "host": [
            "2b4cfcf7-81d5.kelli.org",
            "e7bf58af-f0be.dallas.biz",
            "e0419f48-6a5a.craig.info"
        ]
    },
    {
        "name": "Fantastic Plastic Fish - O'Hara LLC, LLC",
        "contributors": [],
        "version": 3,
        "apdex": 88,
        "host": [
            "e7bf58af-f0be.dallas.biz",
            "92116865-5462.conor.com",
            "9a450527-cdd9.kareem.info",
            "b0b655c5-928a.nadia.biz"
        ]
    },
    {
        "name": "Fantastic Cotton Soap - Langosh - O'Reilly, and Sons",
        "contributors": [],
        "version": 9,
        "apdex": 97,
        "host": [
            "9a450527-cdd9.kareem.info",
            "e7bf58af-f0be.dallas.biz"
        ]
    },
    {
        "name": "Handcrafted Cotton Bacon - Gislason - Beer, and Sons",
        "contributors": [
            "Mrs. Shaina Gusikowski",
            "Glenda Friesen"
        ],
        "version": 2,
        "apdex": 56,
        "host": []
    },
    {
        "name": "Refined Concrete Sausages - Jerde, Stroman and Shanahan, Inc",
        "contributors": [],
        "version": 10,
        "apdex": 76,
        "host": [
            "e0419f48-6a5a.craig.info",
            "92116865-5462.conor.com"
        ]
    },
    {
        "name": "Ergonomic Granite Chair - Buckridge - Hackett, LLC",
        "contributors": [],
        "version": 2,
        "apdex": 54,
        "host": [
            "e7bf58af-f0be.dallas.biz"
        ]
    },
    {
        "name": "Unbranded Metal Shoes - Miller, Blick and Goyette, Group",
        "contributors": [],
        "version": 4,
        "apdex": 90,
        "host": [
            "e0419f48-6a5a.craig.info",
            "e7bf58af-f0be.dallas.biz"
        ]
    },
    {
        "name": "Rustic Plastic Salad - McKenzie - Smitham, Inc",
        "contributors": [],
        "version": 10,
        "apdex": 68,
        "host": [
            "e7bf58af-f0be.dallas.biz",
            "95b346a0-17f4.abbigail.name"
        ]
    },
    {
        "name": "Intelligent Metal Keyboard - O'Kon, Wehner and Ritchie, Group",
        "contributors": [],
        "version": 1,
        "apdex": 55,
        "host": [
            "e0419f48-6a5a.craig.info",
            "7e6272f7-098e.dakota.biz"
        ]
    },
    {
        "name": "Gorgeous Soft Tuna - Raynor - Ortiz, and Sons",
        "contributors": [],
        "version": 7,
        "apdex": 78,
        "host": [
            "e7bf58af-f0be.dallas.biz"
        ]
    },
    {
        "name": "Gorgeous Granite Chips - Runolfsdottir - DuBuque, LLC",
        "contributors": [],
        "version": 5,
        "apdex": 0,
        "host": []
    },
    {
        "name": "Incredible Concrete Chips - Beier Group, and Sons",
        "contributors": [],
        "version": 6,
        "apdex": 5,
        "host": []
    },
    {
        "name": "Intelligent Metal Bike - Hartmann, VonRueden and Willms, LLC",
        "contributors": [],
        "version": 4,
        "apdex": 32,
        "host": [
            "e7bf58af-f0be.dallas.biz",
            "9a450527-cdd9.kareem.info"
        ]
    },
    {
        "name": "Sleek Steel Soap - Carter LLC, and Sons",
        "contributors": [],
        "version": 2,
        "apdex": 54,
        "host": [
            "2b4cfcf7-81d5.kelli.org",
            "e7bf58af-f0be.dallas.biz"
        ]
    }
];