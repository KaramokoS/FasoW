$(document).ready(function() {
    $(function () {
            $(".mapcontainer").mapael({
                map: {
                    name: "world_countries",
                    defaultArea: {
                        attrs: {
                            fill: "#6aafe1",
                            stroke: "#fff",
                            "stroke-width": 1
                        }
                    }
                },
                plots: {
                    'paris': {
                        latitude: 48.86,
                        longitude: 2.3444,
                        tooltip: {content: "Paris<br />Population: 500000000"}
                    },
                    'abidjan': {
                        latitude: 5.388077,
                        longitude: -3.994767,
                        tooltip: {content: "Abidjan<br />Population: 200001"}
                    },
                    'dakar': {
                        latitude:14.719306,
                        longitude: -17.467196,
                        tooltip: {content: "Dakar"}
                    },
                    'bamako': {
                        latitude: 13.062717,
                        longitude:  -7.919371,
                        tooltip: {content: "Bamako<br />Population: 200000001"}
                    }
                },
                                // Links allow you to connect plots between them
                links: {
                    'parisabidjan': {
                        // ... Or with IDs of plotted points
                        factor: -0.3
                        , between: ['paris', 'abidjan']
                        , attrs: {
                            stroke: "#0b0bfa",
                            "stroke-width": 4
                        }
                        , tooltip: {content: "Paris - Abidjan"}
                    }
                    ,'parisdakar': {
                        // The curve can be inverted by setting a negative factor
                        factor: -0.5
                        , between: ['paris', 'dakar']
                        , attrs: {
                            stroke: "#0b0bfa",
                            "stroke-width": 4
                        }
                        , tooltip: {content: "Paris - Dakar"}
                    }
                    ,'parisbamako': {
                        factor: -0.8
                        , between: ['paris', 'bamako']
                        , attrs: {
                            stroke: "#0b0bfa",
                            "stroke-width": 4
                        }
                        , tooltip: {content: "Paris - Bamako"}
                    }

                }
            });
        });
});